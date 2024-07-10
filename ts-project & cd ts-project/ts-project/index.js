"use strict";
//#1_____________________________________________________________
let message = "Hello, world!";
function greet(name) {
    return `Hello, ${name}!`;
}
console.log(greet("nikki"));
//#2______________________________________________________________
function add(a, b) {
    return a + b;
}
console.log("Adding 5 + 3:");
console.log(add(5, 3));
console.log("\nAdding 10 + 20:");
console.log(add(10, 20));
console.log("\nTrying to add '5' and '3' (as strings):");
console.log(add(Number('5'), Number('3')));
console.log("\nAdding 2.5 + 3.7:");
console.log(add(2.5, 3.7));
const graduateStudent = {
    id: 1,
    name: "Juan Pérez",
    age: 25,
    email: "juan.perez@example.com",
    graduationYear: 2024
};
console.log(graduateStudent);
function gradeStudent(student, grade, subject) {
    student.grade = grade;
    student.subject = subject;
    console.log(`${student.name} received a grade of ${grade} in ${subject}.`);
}
const student = {
    id: 1,
    name: "Daniel",
    age: 20,
    email: "da@yahoo.com"
};
gradeStudent(student, 95, "Math");
console.log("Updated student object:", student);
//Bonus____________________________________________________________________________
const calculateAverageGrade = (students) => {
    const totalGrades = students.reduce((sum, student) => {
        return sum + (student.grade || 0);
    }, 0);
    return totalGrades / students.length;
};
const students = [
    { id: 1, name: "John Doe", age: 20, email: "john.doe@example.com", grade: 85 },
    { id: 2, name: "Jane Smith", age: 22, email: "jane.smith@example.com", grade: 90 },
    { id: 3, name: "Alice Johnson", age: 21, email: "alice.johnson@example.com", grade: 88 }
];
console.log(calculateAverageGrade(students));
