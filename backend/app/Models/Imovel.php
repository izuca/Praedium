<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Imovel extends Model
{
    use HasFactory;

    protected $table = 'imovel';
    protected $fillable =[
        'nome',
        'endereco',
        'complemento',
        'bairro',
        'cep',
        'areaConstruida',
        'qtdQuarto',
        'qtdBanheiro',
        'descricao',
        'valor',
        'cidade',
        'uf',
        'imagens',
        'user_id',
        'tipo'
    ];
}
