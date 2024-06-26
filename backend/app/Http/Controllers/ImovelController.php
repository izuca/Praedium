<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\Imoveis;
use Illuminate\Support\Facades\Storage;
use App\Models\Imagem;

class ImovelController extends Controller
{
    //Essa primeira função só funfa se o usuário esiver autenticado. Pro caso que eu quero, preciso criar um outro controller pra buscas personalizadas
    public function index()
    {
        $imoveis = Imoveis::where('user_id', Auth::id())->get();
        return response()->json($imoveis);
    }


    public function store(Request $request)
    {

        $validatedData = $request->validate([
            'nome' => 'required|string|max:255',
            'endereco' => 'required|string|max:255',
            'complemento' => 'nullable|string|max:255',
            'bairro' => 'required|string|max:255',
            'cep' => 'required|string|regex:/^\d{5}-\d{3}$/',
            'area_construida' => 'required|numeric|min:0',
            'qtd_quarto' => 'required|integer|min:0',
            'qtd_banheiro' => 'required|integer|min:0',
            'descricao' => 'required|string',
            'valor' => 'required|numeric|min:0',
            'cidade' => 'required|string|max:255',
            'uf' => 'required|string|size:2',
            'tipo' => 'required|exists:tipo_imovel,id',
            'imagens' => 'nullable|array',
            'imagens.*' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ]);

        $imovel = Imoveis::create([
            'nome' => $validatedData['nome'],
            'endereco' => $validatedData['endereco'],
            'complemento' => $validatedData['complemento'],
            'bairro' => $validatedData['bairro'],
            'cep' => $validatedData['cep'],
            'area_construida' => $validatedData['area_construida'],
            'qtd_quarto' => $validatedData['qtd_quarto'],
            'qtd_banheiro' => $validatedData['qtd_banheiro'],
            'descricao' => $validatedData['descricao'],
            'valor' => $validatedData['valor'],
            'cidade' => $validatedData['cidade'],
            'uf' => $validatedData['uf'],
            'tipo' => $validatedData['tipo'],
            'user_id' => Auth::id(),
        ]);


        if ($request->has('imagens')) {
            foreach ($request->file('imagens') as $image) {
                $path = $image->store('properties', 'public');
                Imagem::create(['imovel_id' => $imovel->id, 'path' => $path]);
            }
        }

        return response()->json($imovel, 201);
    }


    public function show(Imoveis $imovel)
    {
        if ($imovel->user_id !== Auth::id()) {
            return response()->json(['error' => 'Unauthorized'], 403);
        }
        return response()->json($imovel);
    }


    public function update(Request $request, Imoveis $imovel)
    {
        if ($imovel->user_id !== Auth::id()) {
            return response()->json(['error' => 'Unauthorized'], 403);
        }

        $validatedData = $request->validate([
            'nome' => 'required|string|max:255',
            'endereco' => 'required|string|max:255',
            'complemento' => 'nullable|string|max:255',
            'bairro' => 'required|string|max:255',
            'cep' => 'required|string|regex:/^\d{5}-\d{3}$/',
            'area_construida' => 'required|numeric|min:0',
            'qtd_quarto' => 'required|integer|min:0',
            'qtd_banheiro' => 'required|integer|min:0',
            'descricao' => 'required|string',
            'valor' => 'required|numeric|min:0',
            'cidade' => 'required|string|max:255',
            'uf' => 'required|string|size:2',
            'tipo' => 'required|exists:tipo_imovel,id',
            'imagens' => 'nullable|array',
            'imagens.*' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ]);

        $imovel->update($validatedData);


        if ($request->has('imagens')) {
            foreach ($request->file('imagens') as $image) {
                $path = $image->store('properties', 'public');
                Imagem::create(['imovel_id' => $imovel->id, 'path' => $path]);
            }
        }

        return response()->json($imovel);
    }


    public function destroy(Imoveis $imovel)
    {
        if ($imovel->user_id !== Auth::id()) {
            return response()->json(['error' => 'Unauthorized'], 403);
        }
        // Delete related images
        $imovel->imagens()->each(function ($imagem) {
            // Delete the image file from storage
            Storage::disk('public')->delete($imagem->path);
            // Delete the image record from the database
            $imagem->delete();
        });

        $imovel->delete();

        return response()->json(null, 204);
    }
}
