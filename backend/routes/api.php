<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

//cor api

Route::apiResource( '/cor', \App\Http\Controllers\Api\CorController::class);

//marca api

Route::apiResource( '/marca', \App\Http\Controllers\Api\MarcaController::class);

//modelo api

Route::apiResource( '/modelo', \App\Http\Controllers\Api\ModeloController::class);

//carro api

Route::apiResource( '/carro', \App\Http\Controllers\Api\CarroController::class);
