// script.js

// Declare a boolean variable equal to false
let isGreeting = false;

// Find in the DOM the lime cat img using the "lime-cat-img" id
let imageElem  = document.getElementById("space-cat");

// Call this function when user click on the image
imageElem.onclick = function() {
    isGreeting = !isGreeting;

    let message = document.getElementById("greeting");
    if(isGreeting) {
        message.innerHTML = "Meow!"
    }
    else {
        message.innerHTML = ""
    }
};
