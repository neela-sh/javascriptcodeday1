

// function person(name){
//     if(typeof name ==="string")
// console.log("hello  "+ name)
// else
// console.log("please put my name")

// }
//  person("neela")
//  person(15)




//  let firstname ="nisha"
//  firstname = "shah"
// console.log(firstname)
 

//let cars = "honda"
// console.log(cars)
// console.log(cars.length)
// console.log(cars.length-1)
// let b = cars.toLowerCase()
// console.log(typeof b)
// console.log(cars[0])
// console.log(b)


// for (let i = 0 ; i < cars.length ; i++){      //loop
//     //console.log(i)
//     console.log(cars[i])
//     if(cars)
// }


// //count character a                  
// let namee = "shanaya"
// let count = 0
// for(let i = 0 ; i < namee.length ; i++){     //finding (a)character in string
//    // console.log(i)  
//    //console.log(namee[i])

//     if(namee[i] == "a")

//          count++
//     }
    
// console.log(count)


// console.log("--------------------------")

// let nameOne = "abby"
// let i = nameOne.toUpperCase()             //to uppercase
// //console.log(typeof i)             //string
// console.log(i)                   //ABBY


// //function expresion

// let addOne = function(x,y){
//     return x+y
// }

// let aa = addOne(10,20)   //calling function
// console.log(aa)          // 30 ans
// console.log(addOne)   //printing complete function [function]  



/////////8/18/////////Arrays////

// let students = [
//     {
//         firstName:"chinmay",
//         age:23,
//         skills:["python","c","python"]
 
//     },
 
//     {
//         firstName:"poorva",
//         age:29,
//         skills:["python","c","js"]
 
//     },
 
//     {
//         firstName:"amit",
//         age:24,
//         skills:["python3","c++","js"]
 
//     }
 
//  ]


//  //print the name and no. of skills

//  // console.log(students[0])
//  // console.log(students[0].firstName,students[0].skills)
  
//   for (let i = 0 ; i < students.length ; i++){
//     console.log(students[i].firstName,students[i].skills)
    
// //console.log(students[i].firstName,students[i].skills.length)

//  }

 

// //console.log(students[0].firstName,students[0].skills.length)
// // print name and skills for every student in array


// // find

// let ooooa = students.find(function(el,index,arr){
//     return el.firstName == "poorva"
// })
// console.log(ooooa)


// findindex

// let ooooaa = students.findIndex(function(el,index,arr){
//     return el.firstName == "poorva"
// })

// console.log(ooooaa)


// // every  some   -----> false true 

// let bbbb = [23,34,55,66,77]
// let mmmm = bbbb.some(function(el,index,array){
//     return el > 50
// })
// console.log(mmmm)


// let bbbbc = [23,34,55,66,77]
// let mmmmc = bbbbc.every(function(el,index,array){
//     return el > 10
// })
// console.log(mmmmc)


// /forEach -- map , filter 
// // forEach does not return anything 

// let cities = ["pune","mumbai","tokiyo","newyork"]
// cities.forEach(function(el,index,arr){
//     console.log(`Welcome ${el}!`)
// })

// let h = ["abhisha","yayga","chinmay"]
// h.sort()
// console.log(h)


// // flat()
// let numbersa = [[10,20,30],[11,224,33],[23,44,55]]
// console.log(numbersa[2][2])
// console.log(numbersa[1][1])
// // ------> Highest number from numbersa

// let jjjjj =numbersa.flat()
// console.log(jjjjj)

//fill
// let r = [1,2,3,4,5,6,7,8,9]
// //[1,2,3,4,'a','a','a','a','a']
// console.log(r.fill('a',4,r.length))

// //sort 
// let num1 = [[10,20,30],[11,24,33],[23,404,55]] 
// let num2 = num1.flat()
// let numsort = num2.sort((a, b) => a - b)
// console.log(numsort[num2.length - 1])


//console.log(num1.flat().sort().length-1) 





//  let rs = "My new learning is javascript"
//  let reversestring = ""
//  for (let i = rs.length -1 ; i >=0 ; i--){

//     console.log(rs[i])
//     reversestring = reversestring + rs[i]
//  }

// console.log(reversestring)         //==>tpircsavaj si gninrael wen yM ***



// let newOne = "My new learning is javascript"
// let newTwo = newOne.split('')
// let newRev = newTwo.reverse().join("")
// let newAns = newRev.split(" ").reverse().join(" ")
// console.log(newAns)



let numbers=[34,55,-500,66,77,88,234,5,0,66,88]
 //let min=numbers.sort((a,b)=>a-b)
//  console.log(min.filter(()=>)) 
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





//class//
//  class Car {

//     model =  null
//      year = null
//      color = null 

//  }

    
//     let honda = new Car()
//     let ford = new Car()

// honda.year =2020
// console.log(honda)
    
    // user defined data type

// let toyota = {
//        make : 'toyota',
//        model:'camry',
//         year:2021,
//         color: 'blue'
//     }
    
//     let ford = {
//         make :'ford',
//         model:'fusion',
//         year:2020,
//         color:white
//     }
    
//     let subaru = {
//         make : 'subaru',
//         model:'ascent',
//         year:2022
//         color:'red'
//     }


//average of age of all people////
// let sy = [amol2,chinmay2,poorva2]
// let aaverage = sy.reduce(function(acc,el){
//         return acc + el.age
// },0)
 //console.log(aaverage/sy.length)

////FIND THE OBJECT WITH PUNE

 // let puneCity = sy.find(function(el){
    //     return el.city == 'Pune'
    // })
    // console.log(puneCity)




    



