var d = new Date();
var h = d.getHours();
var m = d.getMinutes();
var s = d.getSeconds();
var day = d.getDay();  //Get day number of the week
var dom = d.getDate(); //Get day number of the month
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var month = d.getMonth(); //Get month number of the year
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];


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

function insertClock()    {
       currentTime = new Date();
       month = currentTime.getMonth() + 1;
       day = currentTime.getDate();
       year = currentTime.getFullYear();
      // alert("hi");
      document.getElementById('date').innerHTML=month + "/" + day + "/" + year;
    }

//setInterval(function(){clockTick();}, 1000);

console.log(civil(h));
console.log(ampm(h));
console.log(months[month] + " " + dom + " - " + days[day] + " - " + civil(h) + ":" + m + ":" + s + " " + ampm(h));
