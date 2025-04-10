// oops -> Object oriented programming system

// class -> Template for creating objects
// Object -> Instance of a class

// constructor -> special method called when an object is created
// methods -> functions inside a class
// properties -> variables inside a class
// this -> current object
// super -> parent class

class Person{ // class name -> Pascal Case -> First letter capital

    #first_name;
    #last_name;

    constructor(firstName, lastName){ // constructor
        this.#first_name = firstName;
        this.#last_name = lastName;
    }

    displayFirstName() {
        console.log(this.#first_name);
    }

    #displayLastName() {
        return this.#last_name
    }
}

const person = new Person("Sachin", "Tendulkar")

person.displayFirstName()

// const lastName = person.displayLastName()
person.first_name = "Sachin Tendulkar"

person.displayFirstName()

// 4 pillers of oops

// Encapsulation -> wrapping of properties and methods together, hiding of data
// Abstraction -> showing only necessary information to the user
// Inheritance -> creating new class from existing class
// Polymorphism -> multiple forms
    // Method overloading -> same method name with different parameters
    // Method overriding -> same method name with same parameters

// parent, child

class Vehicle{
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    displayMake() {
        return this.make
    }

    displayModel() {
        return this.model
    }

    displayYear() {
        return this.year
    }
}

// const vehicle = new Vehicle("Honda", "Civic", 2022)

// const res = vehicle.displayModel()

// console.log(res);

class Bike extends Vehicle{

}

const bike = new Bike("Honda", "Civic", 2022)

const res = bike.displayYear()

// console.log(res);

class Calculator{
    calc(num1, num2) {
        const sum = num1 + num2
        return sum
    }

    display() {
        console.log("Hello");
    }
}

class AdvancedCalculator extends Calculator {
    // overloading
    calc(string1, string2, string3) {
        const str = string1 + string2 + string3
        return str
    }

    callParent(a, b) {
        return super.calc(a, b)
    }

    display() {
        super.display()
        console.log("Hi");
    }
}

const cl = new AdvancedCalculator()

console.log(cl.calc("a", "2", "r"));
console.log(cl.callParent(1, 2));

cl.display()