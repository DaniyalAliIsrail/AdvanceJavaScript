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

// let firstName="daniyal";
// let lastName = "ali";
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


//for of loop (ARRAY)
// ["", "", ""]
// [{}, {}, {}]

// const arr = [1, 2, 3, 4, 5]

// for(const item of arr) {
//     console.log(item);
// }
// console.log(number);

// const greetings = "Hello world!"
// for (const item of greetings) {
//     console.log(item);
// }

// Maps

// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")

// console.log(map);
//           destrucuture||
// for (const [key , value] of map) {
//     console.log(`${key} :- ${value}`);
// }

//for IN loop (OBJECTS or ARRAY)
// const myObject = {
//     game1: 'NFS',
//     game2: 'Spiderman'
// }

// for (const key in myObject) {
//     // console.log(key);
//     console.log(`${key} and value is ${myObject[key]}`);
// }

// const programming = ["js", "rb", "py", "java", "cpp"];
// for (const key in programming) {
//     console.log(`array key ${key} and value ${programming[key]}`);
// }

//? FOREACH LOOP
// const coding = ["js", "ruby", "java", "python", "cpp"];

// coding.forEach( (item , index , arr)=> {
//     console.log(`arrya value ${item} and index${index} arr ${arr}`);
// })

// function printme(item){
//     console.log(item);
// }
// coding.forEach(printme)

// const myCoding = [
    // {
    //     languageName: "javascript",
    //     languageFileName: "js"
    // },
    // {
    //     languageName: "java",
    //     languageFileName: "java"
    // },
    // {
    //     languageName: "python",
    //     languageFileName: "py"
    // },
// ]
// myCoding.forEach( (item)=> {
//     console.log(item.languageName);
// })

// forEach not return  a value
// const coding = ["js", "ruby", "java", "python", "cpp"]
// const values = coding.forEach( (item) => {
//     //console.log(item);
//     return item
// } )

// console.log(values);




// const values = coding.forEach( (item) => {
//     //console.log(item);
//     return item
// } )
// console.log(values);

//? FILLTER value return karata hay

// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const newNum = myNums.filter( (num )=>{
//     return num > 2;
// } )
// console.log(newNum);

// const books = [
//     { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
//     { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
//     { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
//     { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
//     { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
//     { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
//     { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
//     { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
//     { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
//   ];

// const post = books.map((items)=>{
//     return
// })


//   let userBook1 = books.filter( (bk) => bk.genre === 'History')
//   console.log(userBook1);

//   const userbook = books.filter( (bk) => {
//     return bk.publish>= 1980  && bk.genre === "History" 
//   } )
//   console.log(userbook)

//   const userbook2 = books.filter((bk)=>{
//     return bk.edition > 2009
//   })
//   console.log(userbook2);

//? MAP  return karta hay
// const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNum = myNumers
// .map((num)=> num*10 )
// .map( (num)=> num+1  )
// .filter( (num)=>  num >= 30)
// console.log(newNum);

// const myNumers1 = [1, 2, 3, 4, 5,5, 6, 7, 8, 9, 10,10]
// let uniqArr = myNumers1.map((num)=> num).map((num)=> num*2)
// console.log(uniqArr);

//? REDUCE return karta hay
const myNums = [1, 2, 3]

const rarr = myNums.reduce( (acc , item)=> {
    console.log(`${acc} and ${item}`);
    return acc + item
},0 )
console.log(rarr);

























