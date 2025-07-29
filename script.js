console.log("Hello, World!");

// var a=12;
// //window 
// //function scoped
// //redeclare
// var a=13;

// console.log(a);


let a=12;
//let a=13; // SyntaxError: Identifier 'a' has already been declared
 console.log(a);


var b=12;
{
   var c=16;
}


console.log(d); ///Cannot access 'd' before initialization(compilation error)
let d=12;


console.log(e); //will not show error but vallue of e is undefined (hoisting)
var e=12;
