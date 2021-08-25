//Array

// let numbers = [1,2,3,4,5]
// let names = ["sagar","samir","raj","ramesh","rajiv"]
// let person = ["samir","singh",269029,true,[234,34]]


       //      0           1         2
let city = ["Alameda","Fremont","Modesto"]

// Array stores the value by index
console.log(city[1])
// length of array
console.log(city.length)
// Last element of Array 
 console.log(city[city.length-1])
// Replace the value at position 1
 city[1] = "fresno"
 console.log(city)



// ----------- printing every element inside arrays -----------
let fruits = ['apple','mango','banana','papaya']

 console.log(fruits[0])                                             
 for(let i = 0 ;i < fruits.length ; i++){              
  console.log(i)                            //printing (i) =0
  console.log(fruits[i])                    //printing every element
 }

 console.log('----------------')

 for(let i = fruits.length-1  ;i >= 0 ; i--){ // reversed
    console.log(i)  
    console.log(fruits[i])
}

 let firstName = "chinmay"
 let ff = firstName.toUpperCase()   //convert firstname to UpperCase *
 console.log(ff)



// Methods

//Action
//Return  


// Adding the element at the last 

//let  veg = ["potato","tomato","chilly",]
//let aa = veg.push("brinjal")
 //console.log(aa) // ----  4    //gives new length i.e number
 //console.log(veg) //["potato","tomato","chilly","brinjal"]     //add new element


// //Action - removes the element from last
// //return- string (lastELement)

  let VegOne = ["potato","tomato","chilly","brinjal"]
  let bb = VegOne.pop()         
  console.log(VegOne)           //removes last element i.e brinjal["potato","tomato","chilly","brinjal"]
  console.log(bb)               //returns the element that removed "brinjal"
  console.log(typeof bb)        // string


 // Add the element at the beginning  (Unshift Method)


let vegTwo = ["chilly","tomato","cabbage"]
let cc = vegTwo.unshift("ladyfinger")  // 4
 // Action 
 // Return type
 console.log(cc)  //  4   returns the length i.e number
 console.log(vegTwo) //["ladyfinger","chilly","tomato","cabbage"]  adds elements (ladyfinger) in the beginning


 //shift methods removes the element from beginning

let dd = vegTwo.shift()
console.log(dd)           // ladyfinger -----  returns the element which it removes (string)
console.log(vegTwo)          // removes elements from beginning



//reverse

let country = ["nepal","india","pakistan","bhutan"]
let ee = country.reverse().pop()
console.log(ee)
console.log(country)


let languages = ["nepali","hindi","english"]
for (let i = 0 ; i < languages.length ; i++){
  
       console.log(languages[i].length)           //6,5,7   //length of every element in the array

}

console.log("--------------------------")
 let birthYears = [2000, 2005,2010]

// let agess = []                    //define blank array   **'

// for(let i = 0 ; i < birthYears.length ; i++){
//     let age  = 2021 - birthYears[i] //21
//       agess.push(age)

//  }
//  console.log(agess)              //[21,16,11]

    // Map 
//Method - action 

//  birthYears.map(function(el,index,arr){
//    console.log(el,index,arr)
//  })

// // console.log("----Using map----")

  let gg = birthYears.map(function(el,index,arr){
    return 2021-el          // 2021-2000, 2021-2005,2021-2010
 })
 console.log(gg)


// // names 

  let nameTwo = ["maya","ram","tina"]
 
  let naam = nameTwo.map(function(el){
     return `Hello ${el}!`         //using back tick   **
  })
       console.log(naam)      //['Hello maya!','Hello ram','Hello tina']



// filter  
//finding even no.

  let even = [22,13,10,45,20,36,21]
  //let match = even.filter(function(el){

      //   return el % 2 ==0
        

//})
       
   // console.log(match)
console.log("------------------------------")
//  Arrow function

  let match = even.filter((el)=> el % 2 == 0)
   console.log(match)

//finding odd no.
   let odd = [12,13,55,32,41]
   let ooo = odd.filter(function(el){
         return el % 2 !==0
 })

 console.log(ooo)


//arrow function

 let ppp = odd.filter((el)=> el % 2 !==0)
 console.log(ppp)


//  Reduce            

 let agee = [12,14,33,21,25]
//  let onn= agee.reduce(function(acc,el,index,arr){
//     return acc + el
//  },0)
//    console.log(onn/agee.length)
   
// //using arrow function   
   
 let onn= agee.reduce((acc,el,index,arr)=> acc + el ,0)
   console.log(onn/agee.length)
   

//////////////////////////date 8/18///////////////
console.log("------------------------------")

   

let students = [
   {
       firstName:"chinmay",
       age:23,
       skills:["python","c","python"]

   },

   {
       firstName:"poorva",
       age:29,
       skills:["python","c","js"]

   },

   {
       firstName:"amit",
       age:24,
       skills:["python3","c++","js"]

   }

]

//print the name and no. of skills

// console.log(students[0])
// console.log(students[0].firstName)

//print name and skills for every students in array//

 for(let i = 0 ; i < students.length ; i++){
    console.log(students[i].firstName,students[i].skills)

}

// for(let i = 0 ; i < students.length ;i++){
//    let xyz = students[i]
//    for(let key in xyz){
//        console.log(`${key}:${xyz[key]}`)
  
//    }
//}



// find

let ooooa = students.find(function(el,index,arr){
   return el.firstName == "poorva"
})
console.log(ooooa)


// findindex

let ooooaa = students.findIndex(function(el,index,arr){
   return el.firstName == "poorva"
})

console.log(ooooaa)


// every  some   -----> false true 

let bbbb = [23,34,55,66,77]
let mmmm = bbbb.some(function(el,index,array){
   return el > 50
})
console.log(mmmm)


let bbbbc = [23,34,55,66,77]
let mmmmc = bbbbc.every(function(el,index,array){
   return el > 10
})
console.log(mmmmc)




let transactions = [1000, -100, 500, -300, -400, 800, 4000, -3000]

// sum of despoist
// sum of withdrawl

let deposit = transactions.filter(function (el) {
    return el > 0
}).reduce(function (acc, el) {
    return acc + el
}, 0)

console.log(deposit)


let withdrawl = transactions.filter(function (el) {
    return el < 0
}).reduce(function (acc, el) {
    return acc + el
}, 0)

console.log(withdrawl)