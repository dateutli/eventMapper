function rad(x) {
  return x * Math.PI / 180;
};

function getDistance(lat1, lng1, lat2, lng2) {
  var R = 6378137; // Earth’s mean radius in meter
  var dLat = rad(lat2 - lat1);
  var dLong = rad(lng2 - lng1);
  var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(rad(lat1)) * Math.cos(rad(lat2)) *
    Math.sin(dLong / 2) * Math.sin(dLong / 2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  var d = R * c;
  return d; // returns the distance in meter
};

function opr360(type, destination, offset) {
    if (type == '+') {
      destination += offset;
    } else {
      destination -= offset;
    }

    if (destination > 360) {
      return destination - 360;
    } else if (destination < 0) {
      return 360 - destination;
    } else {
      return destination;
    }
  }

  function getArrowDirection(direction, destination) {
    direction = Math.round(direction);
    destination = Math.round(destination);
    if (direction == destination || (direction < opr360('+', destination, 10) && direction > destination) || (direction > opr360('-', destination, 10) && direction < destination)) {
      return "up";
      // return "|^^^|";
    } else {

      if (destination > direction) {

        diff = Math.abs(destination - direction);
        if (diff >= 180) {
          return "left";
          // return "|<<<|";
        } else {
          return "right";
          // return "|>>>|";
        }

      } else {

        diff = Math.abs(destination - direction);
        if (diff <= 180) {
          return "left";
          // return "|<<<|";
        } else {
          return "right";
          // return "|>>>|";
        }

      }

    }

  }

  function calcAngleDegrees(x, y) {
    return Math.atan2(y, x) * 180 / Math.PI;
  }

  function compassHeading(event) {
    var alpha = event.alpha;
    var beta = event.beta;
    var gamma = event.gamma;


    // Convert degrees to radians
    var alphaRad = alpha * (Math.PI / 180);
    var betaRad = beta * (Math.PI / 180);
    var gammaRad = gamma * (Math.PI / 180);

    // Calculate equation components
    var cA = Math.cos(alphaRad);
    var sA = Math.sin(alphaRad);
    var cB = Math.cos(betaRad);
    var sB = Math.sin(betaRad);
    var cG = Math.cos(gammaRad);
    var sG = Math.sin(gammaRad);

    // Calculate A, B, C rotation components
    var rA = - cA * sG - sA * sB * cG;
    var rB = - sA * sG + cA * sB * cG;
    var rC = - cB * cG;

    // Calculate compass heading
    var compassHeading = Math.atan(rA / rB);

    // Convert from half unit circle to whole unit circle
    if (rB < 0) {
      compassHeading += Math.PI;
    } else if (rA < 0) {
      compassHeading += 2 * Math.PI;
    }

    // Convert radians to degrees
    compassHeading *= 180 / Math.PI;


    // $('#compassHeading').html("Direction: " + compassHeading + "<br>");

    start = [];
    start['x'] = 0;
    start['y'] = 0;

    navigator.geolocation.getCurrentPosition(function (location) {
      start['x'] = location.coords.longitude;
      start['y'] = location.coords.latitude;

      // $('#myCoords').html("LNG: " + start['x'] + " LAT: " + start['y']);

      x = start['x'] - finish['x'];
      y = start['y'] - finish['y'];

      destinationBearing = calcAngleDegrees(x, y);

      if (destinationBearing <= 0) {
        destinationBearing = 360 + destinationBearing;
      }

      distanceAway = Math.round(getDistance(start['y'], start['x'], finish['y'], finish['x']) / 1609, 1);
      arrows['up'] = '<i class="fa fa-map-marker fa-5x" aria-hidden="true" style="text-shadow: 2px 2px 4px white;"></i><div id="distanceAway" style="text-shadow: 2px 2px 4px white;">'+ distanceAway +' mi</div>';
      $('#arrowDirection').html(arrows[getArrowDirection(compassHeading, destinationBearing)]);

      // $('#destinationBearing').html("Destination: " + destinationBearing);

    });

  }

  // var x = document.getElementById("demo");
  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }