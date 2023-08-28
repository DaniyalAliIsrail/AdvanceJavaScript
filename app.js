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
// if (true) {
//   let a = "hello world";
//   a ="hello";
//   console.log(a);
// }
// //console.log(a);// not print hello world beacuse let block scope and local variable to isay access krna hay to scope kay andr karo

// //!  For const
// if (true) {
//         const a = "hello world";
//         //a ="hello";// not update and change value
//         console.log(a);
//       }
      //console.log(a);// cosnt is a local variable and block scope so alway access scope kay andar hoga
//---------------------------------------------------------------------------------------------
//?Topic: Template literals
//Template literals allows multiline strings:
//Template Literals use back-ticks (``)

//? Example no:1
// let Fname= "daniyal";
// let lname = "ali";
// console.log(`first name is ${Fname} and last name is ${lname}` );
// //? Example no:2
// console.log(`what is your name`); 

// let num1 = 10;
// let num2 =20;
// console.log(`the sum of two num is ${num1 + num2}`);

//! Topic : String Method

let firstName="daniyal";
let lastName = "ali";
//check the firstName start with d or not 
// console.log(`${firstName}`.startsWith('d'));// boolean return karayga ans correct hay to true otherwise false
//check the lasttName start with d or not 
// console.log(`${lastName}`.endsWith('l'));// boolean return karayga 
//includes() string method includes check karta hay kay kya ye string exist karta hay firstname kay andar.
///boolean return karay ga ans correct hay to true otherwise false
//!PROMISES
// method#1
// const promomiseOne = new Promise(function(resolve , reject){
//       //do an async task
//       // DB calls & Cryptography,network
//       setTimeout(function(){
//             console.log("async task are completed");
//             resolve();
//       },1000)
// })
// promomiseOne.then(function(){
//       console.log("promised one");
// })

// // !Method#2
// // without variable
// new Promise(function(resolve,reject){
//       setTimeout(function(){
//             console.log("Asyns task two");
//             resolve();
//       },1000)
// }).then(function(){
//       console.log("Async two is resolved");
// })

// // !Method3
// const promiseThree = new Promise(function(resolve,reject){
//       setTimeout(function(){
//             console.log("promise task three");
//             resolve({userName:"daniyal",email:"dani@gmail.com"})
//       },1000)
// })
// promiseThree.then(function(user){
//       console.log(user);

// })
// // ! Method4
// const promiseFour = new Promise(function(resolve,reject){
//       setTimeout(function(){
//             let error= false;
//             if(!error){
//                   resolve({userName:"daniyal",email:"dani@gmail.com"})
//             }else{
//                   reject("Error: something went wrong");
//             }
//       },1000)
// })
// promiseFour.then((user)=>{
//       console.log(user);
//       return user.userName;
// }).then((userName)=>{
//       console.log(userName);
// }).catch(function(error){
//       console.log(error);
// }).finally("the promise will be resolved or reject");

// // promise with Async and await function
// const fivePromise = new Promise(function(resolve,reject){
//       setTimeout(function(){
//             let error = true;
//             if(!error){
//                   resolve({username:"daniyal",email:"dani@gmail.com"})
//             }else{
//                   reject("some thing went wrong")
//             }
//       },1000)
// })
// method 4 may ham nay .then OR .catch use keya hay
// ab ham Async and await use kray gey
// Async and await k andr try and catch user kray gay
// async function consumePromise(){
//       try {
//             const response = await fivePromise
//             console.log(response);
//       }catch(error){
//             console.log(error);
//       }
// }
// consumePromise();

// Asyn and await (data fetch )


//for in loop (OBJECT)

const programming = ["js", "rb", "py", "java", "cpp"]

// for (const key in programming) {
//     console.log(programming[key]);
// }

programming.forEach( ( item ,index ,arr )=>{
      console.log(item ,index , arr)
} )

// const myCoding = [
//       {
//           languageName: "javascript",
//           languageFileName: "js"
//       },
//       {
//           languageName: "java",
//           languageFileName: "java"
//       },
//       {
//           languageName: "python",
//           languageFileName: "py"
//       },
//   ]
//   programming.forEach(( item )=>{
//       console.log(item.languageName);
//   } )

  const myCoding = [
      {
          languageName: "javascript",
          languageFileName: "js"
      },
      {
          languageName: "java",
          languageFileName: "java"
      },
      {
          languageName: "python",
          languageFileName: "py"
      },
  ]
  
  myCoding.forEach( (item ) => {
      
      console.log(item.languageName );
  } )















