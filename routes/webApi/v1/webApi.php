<?php

use Illuminate\Support\Facades\Route;


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
