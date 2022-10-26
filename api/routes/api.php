<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\PasswordController;
use App\Http\Controllers\ClientsController;

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


Route::middleware('auth:sanctum')->group(function(){
    Route::get('/user', function (Request $request) { return $request->user(); });

    Route::post('/logout', [AuthController::class, 'logout']);

    Route::post('/clients/search', [ClientsController::class, 'getBySearch']);
    Route::apiResources([
        '/clients' => ClientsController::class,
    ]);
});


Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);
Route::post('/forgot-password', [PasswordController::class, 'forgotPassword']);
Route::post('/reset', [PasswordController::class, 'reset'])->name('password.reset');
