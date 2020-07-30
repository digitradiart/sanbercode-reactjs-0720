// SOAL 1

console.log('---SOAL 1---')
const newFunction = function literal(firstName, lastName){
  return {
    firstName,
    lastName,
    fullName: function(){
      console.log(firstName + " " + lastName)
      return 
    }
  }
}
 
newFunction("William", "Imoh").fullName()

/////////////////////////////////////////////////////
// SOAL 2
console.log()
console.log('---SOAL 2---')
var newObject = {
  firstName: "Harry",
  lastName: "Potter Holt",
  destination: "Hogwarts React Conf",
  occupation: "Deve-wizard Avocado",
  spell: "Vimulus Renderus!!!"
}

const {firstName, lastName, destination, occupation} = newObject
console.log(firstName, lastName, destination, occupation)

/////////////////////////////////////////////////////
// SOAL 3
console.log()
console.log('---SOAL 3---')
let west = ["Will", "Chris", "Sam", "Holly"]
let east = ["Gill", "Brian", "Noel", "Maggie"]
let combinedArray = [...west, ...east]
console.log(combinedArray)