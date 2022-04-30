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

Route::get('/', 'HomeController@index')->name('home');

Auth::routes(['verify' => true]);
Route::get('/logout', 'Auth\LoginController@logout');
//Socialite
Route::get('login/{provider}', 'Auth\SocialController@redirectToProvider')
    ->where('provider', 'apple|twitter|facebook|linkedin|google|github|bitbucket')->name('login.social');
Route::get('login/{provider}/callback', 'Auth\SocialController@handleProviderCallback')
    ->where('provider', 'apple|twitter|facebook|linkedin|google|github|bitbucket');

Route::get('/admin', 'BackendController@index')->name('admin');
