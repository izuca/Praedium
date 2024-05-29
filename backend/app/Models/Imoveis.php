<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Imoveis extends Model
{
    use HasFactory;

    protected $fillable = [
        'nome',
        'endereco',
        'complemento',
        'bairro',
        'cep',
        'area_construida',
        'qtd_quarto',
        'qtd_banheiro',
        'descricao',
        'valor',
        'cidade',
        'uf',
        'user_id',
        'tipo'
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function tipoImovel()
    {
        return $this->belongsTo(tipoImovel::class, 'tipo');
    }

    public function imagens()
    {
        return $this->hasMany(Imagem::class);
    }
}