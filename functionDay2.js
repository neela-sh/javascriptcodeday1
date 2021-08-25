//function declaration

// function Addition(x,y){
//     return x+y                //returning array
// }
// let rr = Addition(20,15)      //store in the variable rr
// console.log(rr)


//function expression


// let Addition = function(x,y){
//     return x+y
// }

// let rr = Addition(20,15)
// console.log(rr)


// let subtraction = function(x,y){
//     console.log(x-y)
// }

// console.log(subtraction)
// subtraction(30,15) // calling the function

//Arrow function

//let subtraction = (x,y)=>{
 //   console.log(x-y)                    removes function n 1 statement

 //}


//let subtraction = (x,y)=>console.log(x-y)         //this is arrow function
// subtraction(12,6)


// Function declaration 
//  function addA(x,y){
//    return x+y
//  }

//  let bb = addA(10,5)
//  console.log(bb)

// Function expression 

  let addA = function(x,y){
    return x+y
     }
 let bb = addA(10,5)         //calling function
 console.log(bb)
//  console.log(addA)              //printing complete function 

// Arrow function 

//let addA = (x,y)=>{
   // console.log(x+y)
//     return x+y
// }


// let addA = (x,y)=>x+y                     // remove function and 1 statement
//  addA(12,14)

// Arrow function 


//let x = 10



// let addB = function(x,y){
//     return x*y
// }


// // let fn = function(x,y){
// //     return x*y
// // }


// function addC(fn){                   **
//    let f =  fn(12,13)              
//    return f
// }

// let rrr = addC(addB)
// console.log(rrr)



// declaration  **


// function sub(x,y){
//      return x-y
// }

// let c = sub(12,5)
// console.log(c)


// // // function expression

//  let sub = function (x,y){
//    return x-y
//  }

//  console.log(sub)         //compelete expression
//  let c = sub(12,5)       //calling function
//  console.log(c)


// // Arrow

// let sub =  (x,y)=>{
//     return x-y              //remove function and statement
// }

// let sub =  (x,y)=> x-y
// console.log(sub)
// let c = sub(12,5)
// console.log(c)


console.log("-------------------------")


 let newA = function(x,y){
   return x+y
    
 }
//let fn = function(x,y){             //this is behind the scene
//     return x+y
//} 
 
// passing fn as parameter to another function    **

   function newB(fn){
       let cccccc = fn(12,13)
       return cccccc
  }
 
 let ff = newB(newA)   //return add x+y   newB value of newA
 console.log(ff)       //print 



 let  greeting = function(){
    console.log('Namaste')
 }

 console.log(greeting)
 greeting()


 function greetingB(fn){
     fn()
 }
 greetingB(greeting)






 