// // Day:01
// //? Topic: Es6 Variables

// // All JavaScript variables must be identified with unique names.
// // These unique names are called identifie
// //Variables are containers for storing values.

// // var is a global variable that acces anywhere and var say ham 1 say zada name kay same variable bna sktay hay hay: but this is a bad practice

// var a = "hello";
// var a = "world";
// a = "kch bhy"; // value change krdey may but varirable name same hay
// console.log(a);
// // output
// // world

// //let is a local variable is may variable name unique hoga but value is may bhy change kr sktay is name ka 2nd varible nhy bna skatay hay

// let b = "hello";
// //let b = "world";// error dega kukay b has already defined
// b = "ali"; //variable b k value update/change karsktay hay is treqay say
// console.log(b);

// //const is a local variable is may variable name unique hoga is name say koe bhy 2nd variable nhy  bn skata / or na is may value update hogy
// const c = "hello";
// //cosnt c = "ali";// c is already define
// //c = "akmal"; ham value update// change nhy karskaty hay
// console.log(c);

// //? Different scope of variables
// //!  For var
// if (true) {
//   var a = "hello";
// }
// console.log(a);

//!  For let
if (true) {
  let a = "hello world";
  a ="hello";
  console.log(a);
}
//console.log(a);// not print hello world beacuse let block scope and local variable to isay access krna hay to scope kay andr karo

//!  For const
if (true) {
        const a = "hello world";
        //a ="hello";// not update and change value
        console.log(a);
      }
      console.log(a);// cosnt is a local variable and block scope so alway access scope kay andar hoga
