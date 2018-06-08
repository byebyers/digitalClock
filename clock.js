var d = new Date();
var h = d.getHours();
var m = d.getMinutes();
var s = d.getSeconds();
var day = d.getDay();
var dom = d.getDate();
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var month = d.getMonth();
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];


//Get civilian timeout
function ampm(c) {
  if (c <= 12) {
    return "AM";
  }
  else {
    return "PM";
  }
}


console.log(ampm(h));
console.log(months[month] + " " + dom + " - " + days[day] + " - " + h + ":" + m + " " + ampm(h));
