# Javascript-revision

Chapter 1: Variables & Declarations

🧠 What are Variables?
Variables are containers that hold data.
They allow us to store, reuse, and update information in JavaScript — from simple values like numbers to complex structures like arrays and objects.

💡 Think of a variable as a box with a name on it. You can put a value inside it, check what's inside, or even replace it with something else.

🔑 Declaration Keywords: var,let,const

----------------------------------------------------
🧪 var, let, and const – Line-by-Line Comparison
----------------------------------------------------

👴 var – Old and Risky :---
-----------------------
Function scoped, not block scoped

Can be redeclared and reassigned

Hoisted to the top of the scope with a default value of undefined

example:
var score = 10;
var score = 20; // ✅ OK (redeclared)

👨‍💻 let – Modern and Safe
---------------------------

Block scoped ({ })

Can be reassigned, but cannot be redeclared in the same scope

Hoisted, but in the Temporal Dead Zone (TDZ) until declared

example:
let age = 25;
age = 30;        // ✅ OK
let age = 40;    // ❌ Error (redeclared in the same block)

🔐 const – Constant Values
----------------------------
->Block scoped
->Cannot be reassigned or redeclared
->Must be initialized at the time of declaration
->Also exists in TDZ

const PI = 3.14;
PI = 3.14159; // ❌ Error (reassignment)
💡 However, if const holds an object or array, its contents can be changed, but not the reference itself.

example:
const student = { name: "Riya" };
student.name = "Priya";   // ✅ Allowed (modifying property)

student = {};             // ❌ Error (reassigning object)

