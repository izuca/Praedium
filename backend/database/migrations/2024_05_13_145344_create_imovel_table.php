<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('tipoImovel', function(Blueprint $table){
            $table->id();
            $table->string('descricao');
        });

        Schema::create('imovel', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->string('nome');
            $table->string('endereco');
            $table->string('complemento');
            $table->string('bairro');
            $table->string('cep');
            $table->double('areaConstruida');
            $table->integer('qtdQuarto');
            $table->integer('qtdBanheiro');
            $table->mediumText('descricao');
            $table->double('valor');
            $table->string('cidade');
            $table->string('uf');
            $table->binary('imagens');
            $table->unsignedBigInteger('user_id');
            $table->unsignedBigInteger('tipo');

            $table->foreign('tipo')->references('id')->on('tipoImovel');
            $table->foreign('user_id')->references('id')->on('users');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('imovel');
    }
};
