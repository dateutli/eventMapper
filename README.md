## Inspiration
Whenever I arrive to a city the first thing I want to find out is what it's happening in the city. I want to know what concerts, parties, sales, restaurant specials, or even hackathons are happening. 

## What it does
Event Mapper is a website that allows you to explore events that are happening in your city. You may filter the events that are happening by time of the day or by the type of event (Hackathon, music concert, among others). You may also create your own event with a variety of options.

In addition to that, Event Mapper provides you with map directions to all the events that are happening near you and even an AR experience called Assisted Roaming so you can get to the events you want as soon as possible.

## How I built it

I used Bootstrap and Javascript for the front end and Lumen for the back end. I made use of the Tom Tom Maps API to visualize the events over a map and to handle map operations such as geocoding and routing.

## Challenges I ran into

There are very few libraries for AR in the web, and the ones that exist are marker based which means all the AR elements that will show in the camera have to have a QR marker in the background to function. Since I didn't want to make use of marker I had to create my own AR library. It is very basic but I think it's effective, which is what matters the most. I had a hard time getting to use the phone compass but I was able to make use of it to properly display geolocated markers in an AR environment.

## Accomplishments that I'm proud of


## What I learned
I learned how to work with the TomTomMaps API. To be honest it was very easy to use and the documentation was very helpful.

I also learned how to make use of smartphone compasses.

## What's next for Event Mapper
The limit is the sky! Honestly, I can see some interest from restaurants and stores. Since you can create timed events and categorized them as "Sale" or "Lunch Specials" events it could be a way to drive customers in to your store/restaurant.

