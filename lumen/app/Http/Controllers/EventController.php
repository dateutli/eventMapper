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

    public function getAllEvents($time)
    {   
        $startTime = ($time - 1) . ':30';
        $endTime = $time . ':30';
        return response()->json(Event::where('starts', '>', date("Y-m-d") . ' ' . $startTime)->where('starts', '<', date("Y-m-d") . ' ' . $endTime)->get());
    }

    public function getUserEvents($id)
    {   
        $events = Event::where('host', '=', $id)->get();
        return response()->json($events);                
    }

    public function test()
    {   
        $response['message'] = 'Hello world';
        return response()->json($response);                
    }
}
