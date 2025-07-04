// // skdjlfksjdlkfjsd 
// // javascript -> Javascript is used for creating interactive effects within web pages

// // variables -> container for storing data values
// // data types -> type of data stored in a variable
// // keywords -> reserved words in javascript
// // identifiers -> names used to identify objects, variables, or functions
// // static typing -> the type of a variable is determined by its initial value
// // dynamic typing -> the type of a variable can change over time.
// // operators -> symbols used to perform operations on variables and values

// // arithmetic operators -> +, -, *, /, %
// // assignment operators -> =, +=, -=, *=, /=
// // comparison operators -> ==, !=, >, <, >=, <=
// // logical operators -> &&, ||, !

// // var, let, const

// // var -> global scope
// // let -> block scope
// // const -> block scope

// var a;
// var a = 10;
// console.log(a);
// var a = "Hello World";
// console.log(a);

// // var -> re-declare allowed, re-assign allowed

// let c;
// let b = 20;
// console.log(b);
// // var b = "Hey"
// b = "hey"
// console.log(b);

// // let -> re-declare not allowed, re-assign allowed

// const d = 30;
// console.log(d);

// // const -> re-declare not allowed, re-assign not allowed

// // conditional statements -> if, else if, else
// // if -> if a condition is true, execute the block of code
// // else if -> if a condition is true, execute the block of code
// // else -> if no condition is true, execute the block of code

// const n1 = 10
// const n2 = 200
// const n3 = 30
// // console.log(typeof n2); // number, string, object, boolean, undefined
// // console.log(n1 === n2);

// if(n1 == 10){
//     console.log("n1 is 10");
// }

// if(n1 == 20){
//     console.log("n1 is 20");
// }else{
//     console.log("n1 is not 20");
// }

// if(n1 > n2 && n1 > n3){
//     console.log("n1 is greater than n2 and n3");
// }else if(n2 > n3){
//     console.log("n2 is greater than n1 and n3");
// }else{
//     console.log("n3 is greater than n1 and n2");
// }

// const getDataFromSource = () => {
//     return "Hello World"
// }

// switch(1){ // practice with months
//     case 1:
//         console.log("Monday");
//         break;
//     case 2:
//         console.log("Tuesday");
//         break;
//     case 3:
//         console.log("Wednesday");
//         break;
//     case 4:
//         console.log("Thursday");
//         break;
//     case 5:
//         console.log("Friday");
//         break;
//     case 6:
//         console.log("Saturday");
//         break;
//     case 7:
//         console.log("Sunday");
//         break;
//     default:
//         console.log("Invalid day");
//         break;
// }

// // // function -> A block / set of instructions that performs a specific task.

// function add(a, b){ // parameter
//     const s = a + b;
//     return s
// } 

// const res = add(10,20) // argument

// console.log(res);

// // loops -> used to iterate over a block of code multiple times.

// // for, while, do-while

// let x = 10
// let y = 10

// const z = ++x // pre increment

// console.log(z, x);

// for(let i = 0; i < 10; i++){
//     if(i == 5){
//         continue;
//     }
//     console.log(i);
// }
// console.log("Outside loop");

// let j = 2;

// // while -> entry controlled loop
// // do-while -> exit controlled loop

// while(true){
//     if(j == 5){
//         j++
//         continue
//     }
//     if(j == 10){
//         break
//     }
//     console.log(j);
//     j++
// }

// console.log("while loop finished");

// let k = 0;

// do{
//     console.log(k);
//     k++
// } while (k < 0);

// // prime -> 2 factors

// function is_prime(number=182){
//     if(number == 0 || number == 1){
//         return false
//     }
//     for(let i = 2; i <= number/2; i++){
//         if(number % i == 0){
//             return false
//         }
//     }
//     return true
// } 

// const result = is_prime(1)

// console.log(result);

var thirdMax = function(nums) {
    let first = -Infinity;
    let second = -Infinity;
    let third = -Infinity;
    
    for (let num of nums) {
        if (num === first || num === second || num === third) continue;
        
        if (num > first) {
            third = second;
            second = first;
            first = num;
        } else if (num > second) {
            third = second;
            second = num;
        } else if (num > third) {
            third = num;
        }
    }
    
    return third === -Infinity ? first : third;
};

console.log(thirdMax([5, 2, 2]))