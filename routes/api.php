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

//update firebaseToken
Route::post('/updateFirebaseToken', [ApiController::class, 'updateFirebaseToken']);

//go to updateProfile
Route::post('/updateProfile', [ApiController::class, 'updateProfile']);


// send OTP
Route::post('/send_otp', [ApiController::class, 'sendOTP']);

// chek otp
Route::post('/check_otp', [ApiController::class, 'checkOTP']);

//go to create group
Route::post('/create_group', [ApiController::class, 'createGroup']);

// go to fetchgroups
Route::get('/mygroups/{id}', [ApiController::class, 'fetchGroups']);
//go to fetchMessages
Route::get('/mygroups/{id}/messages', [ApiController::class, 'fetchMessages']);

//go to allMygroupsMessagess
Route::get('/allMygroupsMessagess/{id}', [ApiController::class, 'fetchAllGroupsMessages']);

//go to create message  
Route::post('/sendMessages', [ApiController::class, 'createMessage']);

//go to create feed 
Route::post('/createFeed', [ApiController::class, 'createFeed']);

//go to fetch news feed
Route::get('/newsfeed', [ApiController::class, 'fetchNewsFeeds']);

//go to edit news feed-
Route::any('/editFeed/{id}', [ApiController::class, 'editNewsFeed']);

// go to delete news feed 
Route::delete('/deleteFeed/{id}', [ApiController::class, 'deleteNewsFeed']);

//go to fetch users     
Route::get('/users/{id}', [ApiController::class, 'fetchUsers']);

//fetch all users not in group
Route::get('/usersNotInGroup/{my_id}/{group_id}', [ApiController::class, 'fetchUsersNotInGroup']);

//fetch all users in group
Route::get('/usersInGroup/{my_id}/{group_id}', [ApiController::class, 'fetchUsersInGroup']);

//go to add user to group
Route::post('/saveGroupMembers', [ApiController::class, 'saveGroupMembers']);

//go to fetch conversation  
Route::get('/conversations/{id}', [ApiController::class, 'fetchConversations']);

//go to fetch messages          
Route::get('/messagesInbox/{my_id}/{receiver_id}', [ApiController::class, 'fetchMessagesSingleInConvo']);

//fetch all messages of logged in user  
Route::get('/messagesAllInbox/{my_id}', [ApiController::class, 'fetchAllMessages']);

//go to update messages to read
Route::any('/updateMessageRead', [ApiController::class, 'updateMessagesSingleInConvoRead']);

//go to sendMessageSingle
Route::post('/sendMessageSingle', [ApiController::class, 'sendMessageSingle']);
