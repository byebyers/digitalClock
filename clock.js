var d = new Date();
var h = d.getHours();
var m = d.getMinutes();
var s = d.getSeconds();
var day = d.getDay();
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
console.log(days[day] + " - " + h + ":" + m + ":" + s);


days[d.getDay()]
