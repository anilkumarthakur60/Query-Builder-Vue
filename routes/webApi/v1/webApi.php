<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
 */

//Prefix:     api/v1
//Namespace API
//middleware: web

//Users
//current user
Route::prefix('/users/current')->group(function () {
    Route::get('', 'CurrentUserController@show');
    Route::put('', 'CurrentUserController@update');
    Route::put('/password', 'CurrentUserController@updatePassword');
    Route::post('/avatar', 'CurrentUserController@updateAvatar');
    Route::delete('/avatar', 'CurrentUserController@destroyAvatar');
    Route::delete('', 'CurrentUserController@destroy');
});

Route::prefix('/users')->group(function () {
    //all users
    //export
    Route::get('export', 'UsersController@export');
    //metrics
    Route::get('metrics', 'UsersMetricsController@index');
    //soft Delete
    Route::post('{user}/delete', 'UsersController@delete'); //soft Delete
    Route::post('{user}/restore', 'UsersController@restore');
    Route::delete('{user}/avatar', 'UsersController@destroyAvatar');
    //email
    Route::post('{user}/send-email-verification', 'UsersController@sendEmailVerification');

});
Route::apiResource('users', 'UsersController');

//Roles and Permissions
Route::apiResource('roles', 'RolesController')->except(['destroy']);
Route::apiResource('permissions', 'PermissionsController')->except(['destroy', 'create', 'update', 'store']);

//ActivityLog
Route::get('activities', 'ActivitiesController@index');
