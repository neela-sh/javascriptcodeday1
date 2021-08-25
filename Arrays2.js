////////8/18//////////////

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


//   console.log(students[0])
//console.log(students[0].firstName,students[0].skills.length)    // chinmay 3

 //print the name and no. of skills
//   console.log(students[0].firstName,students[0].skills)
//   console.log(students[1].firstName,students[1].skills)
//   console.log(students[2].firstName,students[2].skills)

//using loop to print the name and no. of skills in array // 

  for (let i = 0 ; i < students.length ; i++){
    console.log(students[i].firstName,students[i].skills)

}

 

// find method in array       

let ppp = students.find(function(el,index,array){
        return el.firstName == "amit"           //return the first occurance complete object

})

console.log(ppp)     //error



//find index
let gg = students.findIndex(function(el,index,array){
     return el.firstName == "amit"                       //2

 })  

 console.log(gg)



//every some

//some
//let xyz = [21,23,55,66,87,34]
//let abc = xyz.some(function(el,index,arr){
//    return el > 80                //true   // for some one element should match
//})

//console.log(abc)

let xyzz = ["vegas","maine","texas","boston"]
let bbbb = xyzz.some(function(el,index,arr){
   return el == "paris"
})


console.log(bbbb)

console.log("------------------------------")
//every
let mmm = [21,23,55,66,87,34]
let ccc = mmm.every(function(el,index,arr){    
    return el > 20                           //true  //for every ,every element should match 
}) 

console.log(ccc)

console.log("-------------------------")

//forEach     
//forEach does not return anything   

let cars = ["ford","tesla","audi","lexus"]

   let ee = cars.forEach(function(el,index,arr){
    console.log(`New ${el}`)                     //doesnot return anything so print whts in there
   })


//sort
//sort by name alphabetical order

let namee = ["mayank"," arya","sagar","lisa"]
namee.sort()
console.log(namee)                    //arya,lisa,mayank,sagar
   

// flat()


let numO = [[10,20,30],[11,224,33],[23,44,55]]     // **********

// console.log(numO[1][2])
// console.log(numO[0][2])

console.log("------------------------------")

//Highest number from this array//
//from each array
//   console.log(numO[0][2])  //30
//   console.log(numO[1][1])  //224
//   console.log(numO[2][2])  //55

let numM = numO.flat()
console.log(numM)      //[10, 20, 30, 224,33,23, 44, 55]

//to find largest number

let largest = 0;
for(i=0; i<numM.length; i++){

      if (numM[i]>largest)
    {
         largest = numM[i]

    }
}
console.log(largest)

//print single array 
//  let hhh =numO.flat()
//   console.log(hhh.sort())      


// // fill method
// let ii = [1,2,3,4,5,6,7,8,9]
// console.log(ii.fill('b',3,ii.length))         //[1,2,3,b,b,b,b,b,b] fill from 4 to b

// slice 

let cities = ["berkeley","alameda","fairfield","pinole","vallejo"]
//console.log(hhhh.slice(-5))
console.log(cities.slice(0,3)) // end value not included


// concat 
let num2 = [5,10,15,20]
let num3 = [1,3,5,7]
let sub =num2.concat(num3)
//let sum = num3.concat(num2)
console.log(sub)



// include
let name1 = ["mila","shiva","manav","priya","aana"]
console.log(name1.includes("manav"))              //true
console.log(name1.includes("diya"))               //false

// spilce(startpoint,no.ofdelete,"replacewithwith n number",)
 console.log(name1.splice(2,2,"tina","suman","riya"))
 console.log(name1)

//split
let mno = "the weather is good"
let nop = mno.split(" ")
console.log(nop)

//Join
//Action - join every element of Array
// Return - string

let name4 = ["the","weather","is","good"]
console.log(name4.join(" "))


let name5 = [5,10,15,20,25]
console.log(name5.join("/"))


