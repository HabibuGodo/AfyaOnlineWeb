<?php

use App\Http\Controllers\LoginController;
use App\Http\Controllers\NewsController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\WebsiteController;
use Illuminate\Support\Facades\Route;



Route::get('/', function () {
    return view('dashboard.pages.login');
});


// login user
Route::post('/auth', [LoginController::class, 'authenticate']);



// how_we_work
Route::get('/how_we_work', function () {
    return view('website.pages.how_we_work');
});

// parteners
Route::get('/parteners', function () {
    return view('website.pages.parteners');
});

// governance
Route::get('/governance', function () {
    return view('website.pages.governance');
});

// global programmes
Route::get('/programmes', function () {
    return view('website.pages.global_programmes');
});

// africa
Route::get('/africa', function () {
    return view('website.pages.africa');
});



Route::middleware(['prevent-back-history'])->group(function () {
    Route::middleware(['user'])->group(function () {

        Route::get('/all_users', [UserController::class, 'allUsers']);


        Route::any('/deleteUser/{id}', [UserController::class, 'deleteUser']);

        // user
        Route::get('/new_user', [UserController::class, 'gotoAddUserPage']);

        Route::post('/add_user', [UserController::class, 'addUser']);

        // logout
        Route::get('/logout', [LoginController::class, 'logout']);
    });
});
