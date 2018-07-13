<?php

namespace App\Http\Controllers;

use DB;
use App\event;
use Illuminate\Http\Request;

class EventController extends Controller
{
    public function create(Request $request)
    {
        $event = Event::create($request->all());

        return response()->json($event, 201);
    }
}
