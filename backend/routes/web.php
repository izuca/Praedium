<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ImovelController;
use App\Http\Controllers\BuscaController;

Route::middleware(['auth:sanctum'])->group(function () {
    Route::apiResource('imoveis', ImovelController::class);
});

Route::get('/',[BuscaController::class,'fetchAll']);

require __DIR__.'/auth.php';
