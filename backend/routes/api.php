<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\UserController;
use App\Http\Controllers\CorreoController;


Route::post('register',  [UserController::class, 'register']);
Route::post('login', [UserController::class, 'login']);
Route::post('correo', [CorreoController::class, 'enviarCorreo']);


Route::group(['middleware' => ['jwt.verify']], function() {
    Route::get('refresh', [UserController::class, 'refresh']);
});

