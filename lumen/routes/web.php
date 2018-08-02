<?php

$router->get('/', function () use ($router) {
    return $router->app->version();
});

$router->group(['prefix' => 'api'], function () use ($router) {
    $router->post('events', ['uses' => 'EventController@create']);

    $router->get('events/{time}/{type}',  ['uses' => 'EventController@getAllEvents']);

    $router->get('userEvents/{id}',  ['uses' => 'EventController@getUserEvents']);

    $router->get('test',  ['uses' => 'EventController@test']);
  });