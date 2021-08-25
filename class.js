//class//


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
    
   class Car{
        make = null
        model = null
        year =  null 
        color = null 
        
        
   }
    
   
// (1) Setting the object properties outside the class  

let toyota = new Car()
let ford = new Car()
let subaru = new Car()
toyota.model = "camry"

console.log(toyota)


// Fetch the  values 

toyota.year = 2020
console.log(toyota)

// Update the value 

toyota.make = "toyota"


//Add new property 

 toyota.wheels = "four"

// delete
//delete toyota.year = 2020

console.log(toyota)

// 

//output OF (1)
// Car {
//     make: 'toyota',
//     model: 'camry',
//     year: 2020,
//     color: null,
//     
//   }

//(2) CONSTRUCTOR   -----Setting the properties at the time of object creation//
    
 class Car2 {

        constructor(make,model,year,color){

            this.make = make,
            this.model = model,
            this.year= year,
            this.color = color
            
    
        }

 }

    let toyota2 = new Car2("toyota","camry",2021,"blue")
    let ford2 = new Car2("ford","fusion",2020,"white")
    let subaru2 = new Car2("subaru","ascent",2022,"red")

    console.log(toyota2)
    console.log(ford2)
    console.log(subaru2)
    

    
// (3) Setting the property for object using function 
    
    
class Car3{
    
    make= null
    year = null
    
     setyear(yr){
     this.year = yr

     }
    
    setmake(mk){
    this.make = mk
         }
    
    
    }
    
     let toyota3 = new Car3()
     toyota3.setyear(2023)
     toyota3.setmake("toyota")
      console.log(toyota3)
    
     let ford3 = new Car3()
     ford3.setyear(2019)
     ford3.setmake("ford")
     console.log(ford3)
    
    
    
    
    
    
    
    








