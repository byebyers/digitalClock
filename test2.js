//Setup
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];


function lookUpProfile(name, prop){
// Only change code below this line
for (var i = 0; i < contacts.length; i++) {
  if (contacts[i].firstName == name && contacts[i].hasOwnProperty("likes")) {
    console.log("true");
  }
  else {
    console.log("false");
  }
}
// Only change code above this line
}

//console.log(contacts[i]);

/*
for (var i = 0; i < arr.length; i++) {
  for (var j = 0; j < arr[i].length; j++) {
    console.log(arr[i][j]);
  }
}


for (var i = 0; i < contacts.length; i++) {
  console.log(contacts[i]);
  for (var j = 0; j < contacts[i].length; j++) {
    console.log(contacts[i][j]);
  }
}

for (var i = 0; i < contacts.length; i++) {
  console.log(contacts[i]);
}

*/
//myObj.hasOwnProperty("top"); // true
// Change these values to test your function
lookUpProfile("Akira", "likes");
