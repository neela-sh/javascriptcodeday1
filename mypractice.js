
// function add(x,y){
//     console.log(x+y)

// }
// add(20,10)


// function sub(x,y){
//     console.log(x-y)
// }
// sub(10,5) 

// function multi(x,y){
//     console.log(x*y)
// }
// multi(4,8)

// function div(x,y){

//     console.log(x/y)
// }
// div(20,2 )


// //function with parameters and with return type

// function cal(x,y){
//     return x+y
// }
// let a=cal(12,13)
// console.log(a) 
// console.log(a+20)
// console.log(a-10)  

// //function with parameters and with return type

// function num(a,b){
//     return a+b
// }
//  let x=num(4,8)
//  console.log(x) 
//  console.log("-----------------------")
//  console.log(x*10) 



//strings 

//defining with the let keyword

//  let firstname = "bik"
//  firstname = "jack"
//  console.log(firstname)

// //defining with the const keyword

//  //const firstname = "bik"
//  //firstname = "jack"
//  //console.log(firstname) 


//  //let firstname = "ram"
//  //console.log(typeof firstname)

//  let secondname = "dipak"
//  console.log(secondname.length)    //length of string  (5)
//  console.log(secondname.length-1)  //index  (4)
//  console.log(secondname[0])
//  console.log(secondname[secondname.length-1])




// let thirdName = "ram"
// for (let i = 0 ; i < thirdName.length ; i++){
//       console.log(i)
//     console.log(thirdName [i])}
   
//     let i = thirdName.toUpperCase() 
//     console.log(i) 
//     console.log(typeof i)




// //substring
// // Substring 
// // toUpperCase(),toLowerCase(), indexOf, slice

// // 0 1 2 3 4
// // M A N G O

// let buyOne = "mango"
// //console.log(buyOne.substring(1,3))
//     // Substring 
// // toUpperCase(),toLowerCase(), indexOf, slice

// // 0 1 2 3 4
// // M A N G O

// //let textThree = "Mango"

//  //0123456789---
//  //Mango Grapes Chiku
// // let hh = textThree.substring(1,3)
// // console.log(hh)

// // let hy = textThree.substr(3)
// // console.log(hy))
//  //0123456789---
//  //Mango Grapes Chiku





// //  let fruitsOne =["apple","banana","grapes","orange"]
// //  console.log(fruitsOne.length)
// //  console.log(fruitsOne[3])



//  let nameOne = ["rashila","shila","neela","nisha"]
//  console.log(nameOne)
//  console.log(nameOne.length)
//  console.log(nameOne.length-1)


// //Arrays 
//                 // Action                       // Return (value and type)
// // Push        add the element at of array     new length (number)

// // Pop         removes the element from last    // string

// // Shift       removes the element from the beginning  // string 

// // Unshift     Add the element at the begning     //new length




// //function 
// function add(x,y){
//     return [x+y,x-y,x*y,x/y,x%y]
// }
// //let h = add(12,33)        //h is array (storing h) return array
// console.log(h[0])       // h of 0 is x+y
// console.log(h[1])
// console.log(h[3])
// console.log(h[4])


// // Function expression

// //    let Addition = function(x,y){
// //        console.log(x+y)
// //    }                                  //the complete expression in stored in one variable Addition
    

// //  let rr = Addition(33,22)          //**  
// // console.log(rr)


// // let subtraction = function(x,y){
// //     console.log(x-y)
// //}

// /// calling the function  

//  // let subtraction = (x,y)=>console.log(x-y)
// // subtraction(12,6)


// // Function declaration 
// // function addA(x,y){
// //     return x+y
// // }

// // let bb = addA(10,5)      
// // console.log(bb)

// // Function expression //

// // let addA = function(x,y){     //all the function is stored in variable
// //     return x+y
// // }
// // let bb = addA(10,5)    //calling the function
// // console.log(bb)
// // console.log(addA)      //printing the function


// // Arrow function 

// // let addA = (x,y)=>{
// //     console.log(x+y)    //if two statement can't remove
// //     return x+y
// // }


// // let addA = (x,y)=> x+y        //if only one statement we can remove the statements and add =>    remove function too
// // addA(12,14)







// // function add(x,y){
// //     return [x+y,x-y,x*y,x/y,x%y]
// // }
// // let h = add(12,33)
// // console.log(h[0])
// // console.log(h[1])
// // console.log(h[3])
// // console.log(h[4])


// // -------------- Three ways 

// // Function declartion 
// // function Addition(x,y){
// //     return x+y
// // }

// // let rr = Addition(33,22)
// // console.log(rr)

// // Function expression

// // let Addition = function(x,y){
// //     return x+y
// // }

// // let rr = Addition(33,22)
// // console.log(rr)


// // let subtraction = function(x,y){
// //     console.log(x-y)
// // }

// // console.log(subtraction)
// // subtraction(30,15) // calling the function

// // //Arrow function

// // let subtraction = (x,y)=>{
// //     console.log(x-y)
// // }


// // let subtraction = (x,y)=>console.log(x-y)
// // subtraction(12,6)


// // Function declaration 
// // function addA(x,y){
// //     return x+y
// // }

// // let bb = addA(10,5)
// // console.log(bb)

// // Function expression 

// // let addA = function(x,y){
// //     return x+y
// // }
// // let bb = addA(10,5)
// // console.log(bb)
// // console.log(addA)

// // Arrow function 

// // let addA = (x,y)=>{
// //     console.log(x+y)
// //     return x+y
// // }


// // let addA = (x,y)=> x+y
// // addA(12,14)



// // Arrow function 


// // let x = 10



// // let addB = function(x,y){
// //     return x*y
// // }


// // // let fn = function(x,y){
// // //     return x*y
// // // }


// // function addC(fn){
// //    let f =  fn(12,13)
// //    return f
// // }

// // let rrr = addC(addB)
// // console.log(rrr)



// // // declaration 


// // // function sub(x,y){
// // //     return x-y
// // // }

// // // let c = sub(12,5)
// // // console.log(c)


// // // // function expression


// // // let sub = function (x,y){
// // //     return x-y
// // // }

// // // console.log(sub)
// // // let c = sub(12,5)
// // // console.log(c)


// // // // Arrow

// // // let sub =  (x,y)=>{
// // //     return x-y
// // // }
// // // let sub =  (x,y)=> x-y
// // // console.log(sub)
// // // let c = sub(12,5)
// // // console.log(c)





// // let newA = function(x,y){

// //     return x+y
    
// // }


// // // let fn = function(x,y){

// // //     return x+y

// // // } 
 

// // // passing fn as parameter tp another function

// // // function newB(fn){
// // //     let cccccc = fn(12,13)
// // //     return cccccc
// // // }

// // // let ff = newB(newA)
// // // console.log(ff)

// // // let  greeting = function(){
// // //     console.log('Hello World')
// // // }

// // // console.log(greeting)
// // // greeting()


// // // function greetingB(fn){
// // //     fn() //
// // // }
// // // greetingB(greeting)






// // //Return type string 

// // let i = eigthName.toUpperCase()
// // console.log(typeof i)
// // console.log(i)

// // // Action - to convert everthing to lowercase
// // // Return type string 

// // let l = eigthName.toLowerCase()
// // console.log(typeof l)
// // console.log(l)
// // l = eigthName.toLowerCase().toUpperCase().length
// // console.log(l)



// let xyz = "hello Neela"
// console.log(xyz)




// let languages = ["hindi","marathi","telgu"]
// for(let i = 0 ; i < languages.length; i++){
//     console.log(languages[i].length)
// }

//find age?
// let birthYears = [2000, 2001,2004]
// // ages --> [21,20,17]
// let agess = []      //ages for everone
// for(let i = 0 ; i < birthYears.length ; i++){
//     let age  = 2021 - birthYears[i] //21
//     agess.push(age)

// }
// console.log(agess)

//find the ages which is greater than 15?
//(old way)
// let ageOne = [14,12,25,10,16,18]       //** 
// let grtThan15 = []                     //** 

// for (let i = 0 ; i < ageOne.length ; i++){
// if (ageOne[i]>15){
//     grtThan15.push(ageOne[i])
//    }
// }
// console.log(grtThan15)



// //calculate average = sum/2

// let dages = [12,13,15,16,18]
// let sum = 0                //add variable sum=0
// for(let i = 0 ; i < dages.length ; i++){
//     sum = sum + dages[i] // 0 + 12--> 12    

// }
// console.log(sum)                     //74
// console.log(sum/dages.length)          //14.8
  



//new method of array


// Map is method of array                        //output of map and loop is same
//Method - action 

//  

// let birthYears = [2000,2006,2011]
  
//           //fn  callbackfn
// let gg = birthYears.map(function(el,index,arr){       
//      return 2021-el
//  })
// console.log(gg)


// // names 

// let namesa = ["chinmay","ram","sham"]
// //["welcome chinmay!","welcome ram!","welcome sham!"]
// let uuu = namesa.map(function(el){
//     return welcome // names 

// let namesa = ["chinmay","ram","sham"]
//     //["welcome chinmay!","welcome ram!","welcome sham!"]
// let uuu = namesa.map(function(el){
//     return `welcome ${el}!`

    //})
    //console.log(uuu)
    
    // let age = 12
    // let ffname = "chinmay"
    // console.log("My name is "+ffname+" my age is "+age)
    // console.log(`My name is ${ffname} and       age is ${age}`)
    
//})
//console.log(uuu)

// let age = 12
// let ffname = "chinmay"
// console.log("My name is "+ffname+" my age is "+age)
// console.log(`My name is ${ffname} and       age is ${age}`)



// let odd = [23,34,55,66,77,88]
// let ooo = odd.filter(function(el){
//     return el % 2 !== 0
// })
// console.log(ooo)

// // Arrow function

// let odda = [23,34,55,66,77,88]
// let oooo = odda.filter((el)=>el % 2 !== 0)
// console.log(oooo)


console.log("-------------------------------")

//OBJECTS //


//  let x = 10
//  let y = true
//  let name = "samar"
//  let personn = ["samar","singh",19,24]

// person[0]
// object 
let personn = {
    firstName:"samar",
    lastName:"singh",
    age:19,
    rollNo:24
}


// ways to retrive the value from object 
// Dot notation
// objName.propertyName ---> value
 console.log(personn.firstName)
 console.log(personn.lastName)
 console.log(personn.age)
 console.log(personn.rollNo)

//ObjName['propertyName']
// bracket notation
console.log(personn['firstName'])
console.log(personn['lastName'])
console.log(personn['rollNo'])
console.log(personn['age'])

// // updating the value for object 

// person.firstName = "poorva"
// console.log(person)

// person.age = 12
// console.log(person)


// add the property
// person.language = "marathi"
// // console.log(person)
// person.language = "hindi"
// console.log(person)


// delete person.language
// console.log(person)



//  for loop
// dot operator does not work correctly inside the for loop
console.log(person['firstName'])


for(let x in person){
    console.log(x,person[x])
}
// obj , update , retrive , del , create , loop the object , why object?

let students = [
        {
            fullName:"chinmay deshpande",
            rollNumber:23
        },
        {
            fullName:"ram dani",
            rollNumber:28
        },

        {
            fullName:"sham deshmukh",
            rollNumber:29
        }

]

for(let i = 0 ; i < students.length ;i++){
    console.log(students[i].fullName)
}


for(let i = 0 ; i < students.length ;i++){
    let obj = students[i]
    for(let key in obj){
        //console.log(`${key}:${obj[key]}`)
        console.log(key, obj[key])
    }
}

// console.log(students[2].fullName)
// console.log(students[2].rollNumber)
// console.log(students[2]['rollNumber'])




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





let ann = ["abinash","lax",5,20,-1,1000,[-1,6]]

let dd = ann.flat()

console.log(dd)

let high = 0
for(let q = 0 ; q < ann.length ; q++ ){
    if (ann[q]>high)
    {

        high = ann[q]
    }
}


console.log(high)





// let sortedXyz = xyz.sort((a, b) => a - b);
// console.log("Min:-",sortedXyz[0])
// console.log("Max:-",sortedXyz[sortedXyz.length -1])






let numbers=[34,55,-500,66,77,88,234,5,0,66,88]
 //let min=numbers.sort((a,b)=>a-b)
 //console.log(min.filter(()=>)) 

 let min=0
 let max=0
for(let i=numbers.length-1;i>=0;i--){
    if(numbers[i]<min){
        min=numbers[i]
        }
        else
  {
   if(numbers[i]>max){
   max=numbers[i]
  }
}
}
console.log(min)
console.log(max)















