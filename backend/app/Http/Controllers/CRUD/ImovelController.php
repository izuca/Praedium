<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Imovel;
use Illuminate\Support\Facades\Auth;

class ImovelController extends Controller
{
    public function index()
    {
        $properties = Imovel::where('user_id', Auth::id())->get();
        return response()->json($properties);
    }


    public function store(Request $request)
    {
        $request->validate([
            'nome' => 'required',
            'endereco' => 'required',
            'complemento' => 'required',
            'bairro' => 'required',
            'cep' => 'required',
            'areaConstruida' => 'required',
            'qtdQuarto' => 'required',
            'qtdBanheiro' => 'required',
            'descricao' => 'required',
            'valor' => 'required',
            'cidade' => 'required',
            'uf' => 'required',
            'imagens' => 'required',
            'tipo' => 'required',
        ]);

        Imovel::create([
            'title' => $request->title,
            'description' => $request->description,
            'price' => $request->price,
            'address' => $request->address,
            'user_id' => Auth::id(),
        ]);

        return redirect()->route('properties.index');
    }

    public function show(Imovel $Imovel)
    {
        if ($Imovel->user_id !== Auth::id()) {
            abort(403);
        }
        return view('properties.show', compact('Imovel'));
    }

    public function edit(Imovel $Imovel)
    {
        if ($Imovel->user_id !== Auth::id()) {
            abort(403);
        }
        return view('properties.edit', compact('Imovel'));
    }

    public function update(Request $request, Imovel $Imovel)
    {
        if ($Imovel->user_id !== Auth::id()) {
            abort(403);
        }

        $request->validate([
            'title' => 'required',
            'description' => 'required',
            'price' => 'required|numeric',
            'address' => 'required',
        ]);

        $Imovel->update($request->all());

        return redirect()->route('properties.index');
    }

    public function destroy(Imovel $Imovel)
    {
        if ($Imovel->user_id !== Auth::id()) {
            abort(403);
        }

        $Imovel->delete();

        return redirect()->route('properties.index');
    }
}
