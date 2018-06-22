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
  for (i = 0; i < contacts.length; i++) {
    console.log(name);
    for (j = 0; j < contacts[i].length; j++) {
      if (contacts[i].hasOwnProperty(name)) {
          console.log("true");
      }
      else {
          console.log("false");
      }
    }
    }
// Only change code above this line
}

// Change these values to test your function
lookUpProfile("Akira", "likes");
