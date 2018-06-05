var d = new Date();
var h = d.getHours();
var m = d.getMinutes();
var s = d.getSeconds();
var day = d.getDay();
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var month = d.getMonth();
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
console.log(month + " - " + days[day] + " - " + h + ":" + m + ":" + s);
