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
        Schema::create('tipo_imovel', function(Blueprint $table){
            $table->id();
            $table->string('descricao');
        });

        Schema::create('imoveis', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->string('nome');
            $table->string('endereco');
            $table->string('complemento')->nullable();
            $table->string('bairro');
            $table->string('cep');
            $table->double('area_construida');
            $table->integer('qtd_quarto');
            $table->integer('qtd_banheiro');
            $table->mediumText('descricao');
            $table->double('valor');
            $table->string('cidade');
            $table->string('uf', 2);
            $table->unsignedBigInteger('user_id');
            $table->unsignedBigInteger('tipo');

            $table->foreign('tipo')->references('id')->on('tipo_imovel')->onDelete('cascade');
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
        });

        // Create a separate table for images
        Schema::create('imagens', function(Blueprint $table) {
            $table->id();
            $table->string('path'); // Store the path of the image
            $table->unsignedBigInteger('imovel_id');
            $table->foreign('imovel_id')->references('id')->on('imoveis')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('imagens');
        Schema::dropIfExists('imoveis');
        Schema::dropIfExists('tipo_imovel');
    }
};
