// string, array, DOM

// string -> Collection of characters
// array -> Collection of elements


const text = "This is sample text"; // 0, length - 1 

// string methods

console.log(text.length);
console.log(text.toUpperCase());
console.log(text.toLowerCase());
console.log(text.includes("World"));
console.log(text.indexOf("Hello"));
console.log(text[0]);
console.log(text.slice(0, 5));
console.log(text.split(" "));


const arr = [1, 2, 3, 4, 5, 6]; // index -> 0 - length - 1

// array methods

console.log(arr.length);
console.log(arr.includes(30));
console.log(arr.indexOf(40));

arr.push(10);
arr.unshift(0);
arr.pop();
arr.shift();
console.log(arr.join(" "));

console.log(arr);

// const obj = {
//     name: "John",
//     age: 30,
//     address: {
//         city: "New York",
//         state: "NY"
//     },
//     hobbies: ["reading", "writing", "coding"],
//     isMarried: false
// }

// DOM -> Document Object Model: DOM is a programming interface for web documents like HTML.
// used to access and manipulate the structure, content and style of web pages.

// methods

// getElementById,
// getElementsByClassName,
// getElementsByTagName,
// querySelector,
// querySelectorAll

// ------------------------------------------------------------------------

// const element = document.getElementById("demo2")

// console.log(element.innerHTML); // get element inner html
// element.innerHTML = "<b>Hello World</b>"; // update element

// element.style.color = "green";
// element.style.backgroundColor = "black" // updating style
// element.style.padding = "10px"

// ----------------------------------------------------------------------------

const elements = document.getElementsByClassName("demo")

console.log(elements);

console.log(elements[2].innerHTML);

elements[0].innerHTML = "<b>Hey World</b>"

elements[2].style.color = "green";
elements[2].style.backgroundColor = "black" // updating style
elements[2].style.padding = "10px"

// ----------------------------------------------------------------------------

const elements1 = document.getElementsByTagName("div")

console.log(elements1);

// same as getElementsByClassName

// ----------------------------------------------------------------------------

const elem = document.querySelector("p")

console.log(elem);

// same as getElementById

// ----------------------------------------------------------------------------

const elems = document.querySelectorAll(".demo")

console.log(elems);

// same as getElementsByClassName and getElementsByTagName

// ----------------------------------------------------------------------------