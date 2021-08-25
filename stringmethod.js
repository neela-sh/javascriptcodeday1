let firstName = "Bikash"
console.log(typeof firstName)             

 

 let secondName = "Bibek"

console.log(secondName.length)
 console.log(secondName.length-1)


// Printing the firstCharacter to the console 

console.log(secondName[0])
console.log(secondName[secondName.length-1]) 
 
 //loop 

 let thirdName  = "Kiran Shahi"
 console.log(thirdName[0])


 for(let i = 0 ; i < thirdName.length ;i++){  
    console.log(i)  

    console.log(thirdName[i])  // to print every character

}
// reverse

let fourName = "Mira"
    console.log('--------------')
for(let i = fourName.length-1 ; i >=0 ; i--){ 
     //console.log(i)
     console.log(fourName[i])
 }

console.log("------------------")

let fifthName = "Shanaya"
let count = 0

for(let i = 0 ; i < fifthName.length ; i++){     //finding (a)character in string
    //console.log(i)  
    console.log(fifthName[i])
    if(fifthName[i] == "a")
    count = count + 1
    }

  console.log("------------------------------------------")
  console.log(count)


// string concatination
//console.log(sixName +" "+sevenName)

// string interpolation

let firstNamee = "Mira "
let secondNamee = "Shah"
console.log("My first name is "+firstNamee+" and my last Name is "+secondNamee)     
console.log(`My first name is ${firstNamee} and my last name is ${secondNamee}`)      //${}


let eigthName = "Abby"

//Action - to convert everthing to uppercase
//Return type string 

let i = eigthName.toUpperCase()
console.log(typeof i)
console.log(i)

// Action - to convert everthing to lowercase
// Return type string 

let l = eigthName.toLowerCase()
console.log(typeof l)
console.log(l)
l = eigthName.toLowerCase().toUpperCase().length         //** 
console.log(l)



// indexOf

// Action - to find index of character passes
// Return type


let tenName ="smarika"
let iNo = tenName.indexOf('ma')
let iNo2 =tenName.indexOf('e')
console.log(iNo)
console.log(iNo2)

let hb = tenName.indexOf('m',2)    //search m from second index
console.log(hb)




// Methods
//1) Methods perform some action 
//2) Method returns something


console.log('------')

// let fruit = "Grapes"
//  //   0 1 2 3 4 5
// //    G r a p e s

// let hs = fruit.indexOf('ry')  //if substring not available it will be -1 output
// console.log(hs)

let fruits ="apple banana grapes orange"
let userInput ="banana"
let indexF = fruits.indexOf(userInput)
//console.log(indexF)
if (indexF >= 0){
console.log ('fruit is available')
}
else {
    console.log('fruit not available')
}




//slice 
let textOne = "Nishant"

//action to get substring
//it returns me another string

let textOneA = textOne.slice(4,6)       // an is will be out (end value won't include)
console.log(textOneA)


// 0  1  2  3  4  5  6 
// N  I  S  H  A  N  T
//-7 -6 -5 -4 -3 -2 -1
            


// let textTwo = "Nishant"
// let textTwoB = textTwo.slice(4,6)
// let textTwoC = textTwo.slice(0,4)
// console.log(textTwoB)
// console.log(textTwoC)

// console.log(textTwo.slice(-6,-1))
// console.log(textTwo.slice(-6,-3))
// console.log(textTwo.slice(-5,5))
// console.log(textTwo.slice(5))          //if one parameter pass,it will slice till end
// console.log(textTwo.slice(5,-5))     //cannot go backward /blank



console.log("------------------")

// Substring 
// toUpperCase(),toLowerCase(), indexOf, slice

// 0 1 2 3 4
// M A N G O

  let textThree = "Mango"

 //0123456789---        //it counts the space too                  
 //Mango Grapes Chiku


 //let hh = textThree.substring(1,4)  
 //let hw = textThree.substring(3,-4)   //substring doesn't include negative index

 //console.log(hh)
 //console.log(hw)

 //let hy = textThree.substr(3)
 console.log(textThree.substr(-4))     //mentions negative value




// replace

let textFour = "I am learning python"
let textFourB = textFour.replace("python","javascript")
console.log(textFourB)


//url ----- "http://reacst.studo/login"
//concat()


//  let textFive = "Mala"
//  let textSix = "rao"
//  console.log(textFive+textSix)
//  console.log('----------------')
//  console.log(textFive.concat(textSix))

// //trim

// let textSeven = " chinmay deshpande "      
// console.log(textSeven.length)  // 19
// console.log(textSeven.trim().length) // 17      //heading and tailing removes (not middle space)

// //charAt
// let textNine = "NewWords"
// console.log(textNine.charAt(3))  // find the character of index




//  let h = ["chinmay","amol","amit"]
//  for(let i = 0 ; i < h.length ; i++){
//      console.log(h[i].concat(' Welcome!'))
//  }
