var d = new Date();
var h = d.getHours();
var m = d.getMinutes();
var s = d.getSeconds();
var day = d.getDay();  //Get day number of the week
var dom = d.getDate(); //Get day number of the month
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var month = d.getMonth(); //Get month number of the year
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('clock').innerHTML =
    h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 500);
}
function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}

/*!
function insertClock()    {
      var time = months[month] + " " + dom + " - " + days[day] + " - " + civil(h) + ":" + doubled(m) + ":" + doubled(s) + " " + ampm(h);
      document.querySelector(".clock").innerHTML = time;
      var t = setTimeout(insertClock, 500);
    }

//Get am/pm
function ampm(c) {
  if (c <= 12) {
    return "AM";
  }
  else {
    return "PM";
  }
}

//Get Civilian time
function civil(t) {
  if (t <= 12) {
    return t;
  }
  else {
    return t - 12;
  }
}

function doubled(s) { //takes in seconds to make sure it is 2 digits.
  if (s < 10) {
    return "0" + s;
  }
  else {
    return s;
  }
}
*/

//months[month] + " " + dom + " - " + days[day] + " - " + civil(h) + ":" + m + ":" + doubled(s) + " " + ampm(h);
