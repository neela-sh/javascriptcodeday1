// objects


let personn = {
    firstName:"samar",
    lastName:"singh",
    age:19,
    rollNo:24
}

//with dot notation
console.log(personn.firstName)
console.log(personn.lastName)
console.log(personn.age)
console.log(personn.rollNo)

//with bracket notation
console.log(personn['firstName'])
console.log(personn['lastName'])
console.log(personn['age'])
console.log(personn['rollNo'])


//update the value
personn.firstName = "mehar"
console.log(personn)

//update rollNo
personn.rollNo = 30
console.log(personn)


//add the property

personn.eyeColor = "brown"                //it will add the property
console.log(personn)                      

//for loop
 

//value of leftside

for (let yz in personn){
    console.log(yz)           
}

//value of bothside 

for(let yz in personn){
    console.log(yz,personn[yz])
}

//print the value of array
let vehicles = [
    { 
        carName: "honda",
        yearNo:2015 


    },
{ 
      carName: "audi",
      yearNo:2020


},

{ 
    carName: "subaru",
    yearNo:2019


}]

//console.log(vehicles[1])    //prints second value of array 
 
console.log("-------------------------")

//retrieve the value
//with loop

//for (let i = 0 ; i < vehicles.length ; i++){
    //console.log(vehicles[i])
//}

for(let i = 0 ; i < vehicles.length ;i++){
    let obj = vehicles[i]
    for(let key in obj){
        console.log(`${key}:${obj[key]}`)
        //console.log(key, obj[key])
    }
}  













