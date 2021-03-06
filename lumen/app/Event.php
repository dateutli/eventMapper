<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Event extends Model
{

    public $timestamps = false;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'host', 'title', 'address', 'starts', 'ends', 'circles', 'type', 'latLng'
    ];

    /**
     * The attributes excluded from the model's JSON form.
     *
     * @var array
     */
    protected $hidden = [];
}