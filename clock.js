

function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    var dow = today.getDay();  //Get day number of the week
    var dom = today.getDate(); //Get day number of the month
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var month = today.getMonth(); //Get month number of the year
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    m = checkTime(m);
    s = checkTime(s);
    me = ampm(h);
    civ = civil(h);
    em = emph(dom);
    document.getElementById('clock').innerHTML =
    days[dow] + ", " + months[month] + " " + em + ", " + civ + ":" + m + ":" + s + " " + me;
    var t = setTimeout(startTime, 500);
}
function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
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

function emph(t) {
  switch (t) {
    case 1:
    case 31:
      return t + "st";
      break;
    case 2:
      return t + "nd";
      break;
    case 3:
      return t + "rd";
      break;
    default:
      return t + "th";
  }
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
