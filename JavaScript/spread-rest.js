// spread operator, rest operator

// destructure

const arr = [1, 2, 3, 4, 5];

// const a = arr[0]
// const b = arr[1]
// const c = arr[2]
// const d = arr[3]
// const e = arr[4]

const [a, b, c, d, e] = arr;

const obj = { user: "Sachin", age: 32, city: "Mumbai" };

// const user = obj.user;
// const age = obj.age;
// const city = obj.city;

const { user, age } = obj;
console.log(user, age);

const array = [1, 2, 3, 4, 5];

const newArr = [...array, 20, 30, 30, 30, 40] // spread

console.log(newArr);

const [n1, n2, ...remainingArray] = array // rest

console.log(remainingArray);

const obj2 = { user: "Sachin", age: 32, city: "Mumbai" };

const newObj = { ...obj2, state: "Maharashtra", city: "Pune" } // spread
console.log(newObj);

const { city, ...rest } = obj2

console.log(obj2, rest);

const n = 10

switch (n) {
    case n < 20:
        console.log("Odd");
        break;
    default:
        console.log("Even");
        break;
}
