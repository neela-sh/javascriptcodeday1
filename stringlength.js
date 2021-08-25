//function without parameters and no return type

function cal(){
    console.log(8+9)

}
cal() 


//function with parameters and without return type

function cal(x,y){
    console.log(x+y)
}
cal(10,20)

//function with parameters and with return type 

function cal(x,y){              
    return x+y
}
let a=cal(12,13)
console.log(a)
console.log(a+25)
console.log(a-10) 
console.log(a*0.10) 


//strings

// defining with the let keyword

let firstname ="chinmay"
firstname = "poorva"
console.log(firstname)
 

//defining with the const keyword

//const lastname="deshpande"
//lastname="vyas"
//console.log(lastname) 


//string in js
//string stores the character by index
 
//let city = "pune"
//console.log(city) 
//console.log(city.length) 

//methods of string

//function sub(x,y){
  //  return x+y
//}
//let r=sub(12,13)
//console.log(r)
//console.log(typeof r)   


let city2 = "Nagpur"
let i = city2.toUpperCase()
console.log(typeof i)
console.log(i) 

let r = city2.toLowerCase()
console.log(typeof r)
console.log(r)  




let fullname = "shanaya"
let upper = fullname.toUpperCase()
console.log(upper) 
console.log(fullname.length)


let lower =fullname.toUpperCase().toLowerCase().length
console.log(lower)
console.log(typeof lower) 


let city = "sanjose"
 console.log(city[0]) 
 console.log(city[city.length-1])  


 let state = "florida"

 for (let i=0 ; i < state.length ; i++){

 console.log(i)
 console.log(state[i])

} 

//string+string=string
//string+number=string
//number+string=string
//number+number=number


let x=10
let y=30
let z="add"

console.log(x+y+z)
console.log(z+y+x) 
console.log(x+z+y)







