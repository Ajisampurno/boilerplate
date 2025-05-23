<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\UserController;


Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);
   
Route::middleware('auth:sanctum')->group(function () {
    Route::get('/users/datatable', [UserController::class, 'datatable']);
    Route::resource('/users', UserController::class);
});