//ques 1 //reverse name//

let fourname = "chinmay"
let rev = ""

for (let i = fourname.length-1 ; i>= 0 ; i--){
  rev = rev +fourname[i]

}
console.log(rev)

//ques 2 //reverse sentence //

let newOne = "My new learning is javascript"
let newTwo = newOne.split (" ")
let newRev = newTwo.reverse().join(" ")
let reversen = " "
 for (let i = newRev.length-1 ; i>=0 ; i--){

      reversen = reversen + newRev[i]

 }

 console.log(reversen)



//ques 3 //find highest and lowest //


let xyz = [34,55,-500,66,77,88,234,5,0,66]

let highest = 0
let lowest = 0
for(i=0; i<xyz.length; i++){

    if (xyz[i]>highest)
    {
         highest = xyz[i]

    }
    if (xyz[i] < lowest)
    {
        lowest =xyz[i]
    }
    
}
console.log("Min:-", lowest)
console.log("Max:-", highest)

//Ques 4 // highest number from the given 2D array//

let highOne = [[1,2,3],[33,44,55],[55,77,343]]
let highTwo = highOne.flat()
let highest1 = 0
for (let i = 0; i < highTwo.length; i++){
     
    if (highTwo[i] > highest1)
         highest1 = highTwo[i]


}
 console.log(highest1)



//ques 5 //count the number of vowels //

let nameFive = "I am new to javascript"
let nameFivelower = nameFive.toLowerCase()
const vowels = ["a","e","i","o","u"]
let count = 0
for (let i = 0; i < nameFivelower.length; i++){
     
   if(vowels.includes(nameFivelower[i]))
   {
       count = count+1
   }

}
console.log(count)



















