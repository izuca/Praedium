<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ImovelController;

Route::middleware(['auth:sanctum'])->group(function () {
    Route::apiResource('imoveis', ImovelController::class);
});

Route::get('/', function () {
    return ['Laravel' => app()->version()];
});

require __DIR__.'/auth.php';
