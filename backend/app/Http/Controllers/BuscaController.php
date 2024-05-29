<?php

namespace App\Http\Controllers;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Http\Request;
use App\Models\Imoveis;

class BuscaController extends Controller
{
    public function fetchAll(){
      $imoveis = Imoveis::with('tipoImovel','User','Imagem')
        ->take(9)
        ->get();

      return response()->json($imoveis);
    }
}
