// console.log("Hello, World!");

// // var a=12;
// // //window 
// // //function scoped
// // //redeclare
// // var a=13;

// // console.log(a);


// let a=12;
// //let a=13; // SyntaxError: Identifier 'a' has already been declared
//  console.log(a);


// var b=12;
// {
//    var c=16;
// }


// console.log(d); ///Cannot access 'd' before initialization(compilation error)
// let d=12;


// console.log(e); //will not show error but vallue of e is undefined (hoisting)
// var e=12;

// //symbol
// let obj= {
//    uid: 1,
//    name: "John",
//    age: 30,
//    email:"anssuljain789@gmail.com"
// }


// obj.uid=2; //reassigning value
// console.log(obj);

// let u1 = Symbol("uid");
// obj[u1] = 1; // using Symbol as a key



//bigint
Number.MAX_SAFE_INTEGER; // 9007199254740991
//to number more than this then e have to take bigint

//  if ("undefined") {
//  console.log("Runs");  // "0" is a non-empty string = truthy
//  }

//  console.log(null);
 

//  console.log(null + 1);      
// console.log("5" + 3);       
// console.log("5" - 3);       
// console.log(true + false); 

// console.log(typeof []);
//  console.log(typeof null);
//  console.log(typeof 123n)


// console.log(typeof undefined);
// console.log(typeof Symbol("uid"));
// console.log(typeof "function(){}"); // function is an object in JavaScript


// function rps(user, computer){
//     if (user === computer) {
//         return "It's a tie!";
//     } else if (
//         (user === "rock" && computer === "scissors") ||
//         (user === "scissors" && computer === "paper") ||
//         (user === "paper" && computer === "rock")
//     ) {
//         return "User wins!";
//     } else {
//         return "Computer wins!";
//     }
// }


// let x=2;
// switch(2){
//     case 2:
//         console.log("Two");
//         break;
//     case 3:
//         console.log("Three");
//         break;
// }


///print the first 110 number using setTimeout using function

    // for (var i = 1; i <= 10; i++) {
    //     setTimeout(() => {
    //         console.log(i);
    //     }, i * 100); // Delay each number by its index * 100ms
    // }

  //  let val = prompt("gve a number");
    // for(let i=1;i<=val;i++){
    //     if(i%2==0){
    //         setTimeout(() => {
    //             console.log("even no is "+i);
    //         }, i * 100); // Delay each even number by its index * 100ms
    //     }
    //     else{
    //         setTimeout(() => {
    //             console.log("odd no is "+i);
    //         }, i * 200); // Delay each odd number by its index * 100ms
    //     }
    // }


    // function getScore(...scores){


    //      let total = 0;
    //      scores.forEach(function(scores){
    //         total=total+scores;
    //        console.log(total);
    //      })
        
         
    // }

    // getScore(10,12,13,14);

    function counter(){
        let count = 0;

        return function() {
            count++; 
            return count;
        };
    }

//console.log(count);

let c = counter(); // Create a counter instance
console.log(c());


let d = counter(); // Create another counter instance
console.log(d()); // This will start from 1 again, as it's a new instance


//example of higher order function
function greet(name) {  
    return function(message) {
        console.log(`${message}, ${name}!`);
    };
}
greet("Alice")("Hello"); // Output: Hello, Alice!


//example of closure
function makeCounter() {
    let count = 0; // This variable is private to the closure

    return {
        increment: function() {
            count++;
            return count;
        },
        decrement: function() {
            count--;
            return count;
        },
        getCount: function() {
            return count;
        }
    };
}
const rr = makeCounter();
console.log(rr.increment());


//can you explain me dif between closure and higher order function?
//Sure! A higher-order function is a function that either takes one or more functions as arguments  
// or returns a function as its result. It allows for more abstract and flexible code, enabling the creation of functions that can operate on other functions.

// A closure, on the other hand, is a function that retains access to its lexical scope, even when the function is executed outside that scope.

//caan you explain bith with real world example?
// Certainly! Let's use a real-world analogy to explain both concepts:    
// Higher-Order Function Example: Coffee Shop
// Imagine a coffee shop that offers different types of drinks. The shop has a function called `makeDrink` that takes a drink type as an argument and returns a function that prepares that drink.
function makeDrink(drinkType) {
    return function(size) {
        console.log(`Making a ${size} ${drinkType}.`);
    };
} 

const latte = makeDrink("Latte");
latte("Large"); // Output: Making a Large Latte.

//can you explain me this line A higher-order function is a function that either takes one or more functions as arguments

// or returns a function as its result.
// In this example, `makeDrink` is a higher-order function because it returns another function
// (the function that prepares the drink) based on the `drinkType` argument.
// This allows us to create specific drink functions like `latte` that can be called later with a size argument.

//howw higher order function take ore than one function as argument?
// A higher-order function can take multiple functions as arguments. For example, consider a function that  
// applies a series of transformations to a value.
function applyTransformations(value, ...transformations) {  
    return transformations.reduce((result, transform) => transform(result), value);
}
// Here, `applyTransformations` is a higher-order function that takes a value and an array of transformation functions.
// It applies each transformation function to the value in sequence, returning the final result.

// Example usage:
function double(x) {
    return x * 2;
}
function square(x) {
    return x * x;
}

const result = applyTransformations(3, double, square); // First doubles 3 to 6, then squares it to 36
console.log(result); // Output: 36  

// Closure Example: Bank Account
// Now, let's consider a bank account where you can deposit and withdraw money. The account has a function that returns another function to handle transactions.
function createBankAccount(initialBalance) {
    let balance = initialBalance; // This variable is private to the closure

    return {
        deposit: function(amount) {
            balance += amount;
            console.log(`Deposited: $${amount}. New balance: $${balance}.`);
        },
        withdraw: function(amount) {
            if (amount <= balance) {
                balance -= amount;
                console.log(`Withdrew: $${amount}. New balance: $${balance}.`);
            } else {
                console.log("Insufficient funds.");
            }
        },
        getBalance: function() {
            return balance;
        }
    };
}
const myAccount = createBankAccount(100); // Create a bank account with an initial balance of $100
myAccount.deposit(50);
myAccount.withdraw(30);
console.log(`Current balance: $${myAccount.getBalance()}`); // Output: Current balance: $120


//means this balance variblw is private to otherfun ction that outside of createBankacount function
// Yes, exactly! The `balance` variable is private to the closure created by `createBankAccount`.
// It cannot be accessed directly from outside the `createBankAccount` function.  
// The only way to interact with it is through the methods (`deposit`, `withdraw`, and `getBalance`) that are returned by the closure.
// This encapsulation allows you to manage the account's balance securely, preventing direct manipulation from outside
// the closure. It ensures that the balance can only be modified through the defined methods, maintaining the integrity of the account's state.


//ok thnk you for explaining
// You're welcome! If you have any more questions or need further clarification on closures, higher-order functions, or any other JavaScript concepts, feel free to ask. Happy coding! 😊




let ans = [12,15,3,8,20];
///use .find function to find the 2nd number less thean 10
let count = 0;
let arr = ans.find(function(num) {
  if(num< 10){
    count++;
    return count==2;
  }
})
console.log(arr); // Output: 8 (the second number less than 10)


//use .some() function to check the number of number greater than 10
let count1=0;
let total = ans.some(function(num) {
  if(num>10){
    count1++;
  }
});
console.log(count1); // Output: true (since there are numbers greater than 10)


//clone this array with reference
let originalArray = [1, 2, 3, 4, 5];
let clonedArray = originalArray; // This creates a reference to the same array




//clousers

function abcd(){
    let a=12;
    return function(){
        console.log(a);
        
    }
}    

let fnc = abcd();

fnc();


//private counter
function countForMe(){
    let count = 0; // This variable is private to the closure

    return function() {
        count++; 
        return count;
    };
}

let fnc1 = countForMe(); // Create a counter instance
fnc1()
fnc1()
fnc1() // This will start from 1 again, as it's a new instance

let fnc2 =countForMe(); 
fnc2() 
fnc2() 
fnc2() 
fnc2() 
fnc2() 
fnc2() 




function clickLimiter(){
    let click = 0; // This variable is private to the closure

    return function() {
        if (click < 5) { // Limit to 5 clicks
            click++;
            console.log(`Button clicked ${click} times.`);
        } else {
            console.log("Click limit reached.");
        }
    };
}

let buttonClick = clickLimiter(); // Create a click limiter instance
buttonClick();
buttonClick();
buttonClick();
buttonClick();
buttonClick();
buttonClick();



//this keyword


console.log(this);


function showThis() {
    console.log(this);
}
showThis(); // In a regular function, 'this' refers to the global object (or undefined in strict mode)

let obj = {
    name: "ansul",
    showName: function() {  
        console.log(this);
    },
}

obj.showName();


class Abcd{
    
}


