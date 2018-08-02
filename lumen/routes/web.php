<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

$router->get('/', function () use ($router) {
    return $router->app->version();
});

$router->group(['prefix' => 'api'], function () use ($router) {
    $router->post('events', ['uses' => 'EventController@create']);

    $router->get('events/{time}',  ['uses' => 'EventController@getAllEvents']);

    $router->get('userEvents/{id}',  ['uses' => 'EventController@getUserEvents']);

    $router->get('test',  ['uses' => 'EventController@test']);
  });