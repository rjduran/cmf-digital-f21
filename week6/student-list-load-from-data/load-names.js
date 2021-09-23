// make array of names
let names = [
  "Alex",
  "Mickey",
  "Kindsay",
  "Aaron",
  "John",
  "Cameron",
  "Caroline",
  "Olivia",
  "Trent",
  "Sarah",
  "Danny",
  "Lily",
  "RJ"
];

// make array of alphabet letters (A-Z)
// https://javascript.plainenglish.io/create-an-array-of-alphabet-characters-in-javascript-with-this-simple-trick-930033079dd3
const alpha = Array.from(Array(26)).map((e, i) => i + 65);
const alphabet = alpha.map((x) => String.fromCharCode(x));
//console.log(alphabet);

// sort names alphabetically, and update array
let sortedNames = names.sort();

// get first letter of each name
let firstLetter = [];
for(let i = 0; i < sortedNames.length; i++){
  //console.log(names[i].charAt(0));
  firstLetter.push(sortedNames[i].charAt(0));
}

// make array of letters to see how many sections we have names for
// use filter function to remove duplicates
let uniqueChars = firstLetter.filter(function(item, index) {  
  // return on the first occurrence of a charater
  return firstLetter.indexOf(item) === index; 
});
//console.log(uniqueChars);

// get reference to ul element in dom
let ul = document.getElementById('names');

// loop over list of first letters, to add header li elements
uniqueChars.forEach(function(letter) {              
  let li = document.createElement('li');
  let h3text = document.createElement('h3');
  h3text.appendChild(document.createTextNode(letter));
  li.appendChild(h3text);
  li.classList.add("list-group-item", "list-header");
  ul.appendChild(li);

  // loop over each item to find match in names and make list items for each name to append
  sortedNames.forEach(function(name){
    if (name.charAt(0) === letter){
      // when it matches the current letter, create element and add it
      //console.log(name);
      let li = document.createElement('li');
      let a = document.createElement('a');
      a.href="#";
      let atext = document.createTextNode(name);
      a.appendChild(atext);
      li.appendChild(a);
      li.classList.add("list-group-item", "list-item");
      ul.appendChild(li);
    }
  });
});


