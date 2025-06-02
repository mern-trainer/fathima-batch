// NodeJS -> JavaScript runtime environment

// readline-sync -> npm package

// React -> ES6 -> 2015

// ES6 -> ECMAScript 6 -> ECMAScript 2015

// ES5 -> ECMAScript 5 -> ECMAScript 2009

// import readlineSync from "readline-sync";
// const readlineSync = require("readline-sync");

// const value = readlineSync.question("Enter a name: ");
// console.log("Entered name is: " + value);

// calculator

// const num1 = readlineSync.questionInt("Enter a number: ");
// const num2 = readlineSync.questionInt("Enter second number: ");
// const operation = readlineSync.question("Enter an operation: ");

// if(operation === "+") {
//     console.log(num1 + num2);
// } else if(operation === "-") {
//     console.log(num1 - num2);
// } else if(operation === "*") {
//     console.log(num1 * num2);
// } else if(operation === "/") {
//     console.log(num1 / num2);
// } else {
//     console.log("Invalid operation");
// }

// ATM -> Deposit, Withdraw, Check Balance, Exit


// Core Modules -> Pakages that are installed by default in NodeJS
// fs, http, os, path, crypto, etc.

// Third Party Modules -> Pakages that are installed using npm
// readline-sync, express, mongoose, etc.

// crypto

console.log(crypto.randomUUID())

const os = require("os")

console.log(os.platform())
console.log(os.hostname()) 
console.log(os.uptime())
console.log(os.release())
console.log(os.version())

console.log(os.networkInterfaces())

const fs = require("fs");

// CRUD -> Create, Read, Update, Delete

// Create
fs.writeFile("test.txt", "Hello World", { encoding: "utf-8" }, () => {
    console.log("File created successfully");
})

fs.readFile("test.txt", { encoding: "utf-8" }, (err, text) => {
    if (err) {
        return console.log(err);
    }    
    console.log(text);
})

fs.appendFile("test.txt", "\nHello World", { encoding: "utf-8" }, () => {
    console.log("File updated successfully");
})

fs.unlink("test.txt", () => {
    console.log("File deleted successfully");
})

// sync ----------------------

fs.writeFileSync("sample.txt", "Sample Text", { encoding: "utf-8" });

const result = fs.readFileSync("sample.txt", { encoding: "utf-8" });

console.log(result);

fs.appendFileSync("sample.txt", "\nSample Text", { encoding: "utf-8" });

fs.unlinkSync("sample.txt");