'use strict'

// 1. Read the JSON file into a variable called students
const students = require('./students.json');
console.log(students);



// 2. Iterate over the students array and print Hello with their full names to the console
// e.g. Hello Walter Baker
function say(message) {
    console.log(message)
}

students.forEach(student => {
    say(`Hello ${student.firstName} ${student.lastName}`)
    }) 



// 3. Print out the number of last names starting with the letter D
// e.g. Count of last names starting with D is 1

const targetStudents = students.filter(student => student.lastName[0] == "D")
console.log("Count of last names starting with D is:" + targetStudents.length)
//console.log(targetStudents)