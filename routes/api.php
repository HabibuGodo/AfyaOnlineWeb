<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ApiController;


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


// send OTP
Route::post('/send_otp', [ApiController::class, 'sendOTP']);

// chek otp
Route::post('/check_otp', [ApiController::class, 'checkOTP']);

// go to fetchgroups
Route::get('/mygroups/{id}', [ApiController::class, 'fetchGroups']);
//go to fetchMessages
Route::get('/mygroups/{id}/messages', [ApiController::class, 'fetchMessages']);

//go to create message  
Route::post('/sendMessages', [ApiController::class, 'createMessage']);