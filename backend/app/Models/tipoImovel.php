<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class tipoImovel extends Model
{
    use HasFactory;

    protected $table = 'tipoImovel';
    protected $fillable = 'descricao';
}