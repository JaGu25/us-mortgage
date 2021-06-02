<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\UserController;
use App\Http\Controllers\CorreoController;
use App\Http\Controllers\FlowFormController;

Route::post('login', [UserController::class, 'login']);
Route::post('correo', [CorreoController::class, 'enviarCorreo']);
Route::post('apply/form', [FlowFormController::class, 'saveData']);

Route::group(['middleware' => ['jwt.verify']], function() {
    Route::post('register',  [UserController::class, 'register']);
    Route::get('refresh', [UserController::class, 'refresh']);
    Route::get('apply', [FlowFormController::class, 'getDataByType']);
    Route::get('apply/download', [FlowFormController::class, 'downloadByDate']);
});

