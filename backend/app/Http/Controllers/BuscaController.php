<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Imovel;

class BuscaController extends Controller
{
    public function fetchAll(){
        $imoveis = Imovel::where()->get();
        return response()->json($imoveis);
    }
}
