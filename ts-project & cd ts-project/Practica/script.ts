
//TASK 1:
//Task 1: Create Variables for Primitive Types
//Task: Below is a list of variables with creative names for primitive types. Your task is to create these variables in TypeScript, come up with a logical associated type for each (string, number, bigint, boolean, undefined, null, symbol) and assign a random initial value. 
let studentName: string = "Alice Johnson";
let studentId: number = 12345;
let subjects: string[] = ["Math", "Physics", "Computer Science"];
let major: string | undefined = "Computer Engineering"; 
let isStudying: boolean = true;
let grade: number | null = null; 
let uniqueSymbol: symbol = Symbol("studentIdentifier");

//task 2 Task 2: Define Student Type Alias
//Task: Create a type alias Student that represents a student with the properties defined in Task 1.

// type Student = {
//     studentName: string;
//     studentId: number;
//     subjects: string[];
//     major: string | undefined;
//     isStudying: boolean;
//     grade: number | null;
//     uniqueSymbol: symbol;
// };

//Task 3: Understand Scope (Local and Global)
//Task: Explain the difference between local scope and global scope in TypeScript (2-3 sentences) and provide a code example for a global scope variable and a local scope variable to illustrate the concepts.

// Global scope variable
let globalVar: string = "I'm a global variable";

function exampleFunction() {
    // Local scope variable
    let localVar: number = 42;

    console.log(globalVar);  // Accesible: globalVar es de ámbito global
    console.log(localVar);   // Accesible: localVar está en el ámbito de esta función

    if (true) {
        let blockVar: boolean = true;  // Variable de ámbito de bloque
        console.log(blockVar);  // Accesible dentro de este bloque
    }

    // console.log(blockVar);  // Error: blockVar no es accesible aquí
}

exampleFunction();

console.log(globalVar);  // Accesible: globalVar es de ámbito global
// console.log(localVar);   // Error: localVar no es accesible fuera de exampleFunction

// Task 5: Calculate Grades for Students
// Task: Create a TypeScript program that calculates and displays grades for students based on their scores.
// First we will Create a New Branch for Task 5:
// In the terminal, write the following: 
// git checkout -b add-calculate-grade-function
// Check the bottom left corner of your VScode. You should see the name of your new branch. This means you are currently working in that branch.
// Write the code based on the following requirements:
// Update the Student type with the property:
// allScores (number[]): An array of the student's scores.
// Implement a function calculateGrade: 
// The function should accept a Student object as its parameter.
// It should calculate the total score by summing up all the scores in the scores array.
// Compute the average score by dividing the total score by the number of scores.
// Return a grade based on the average score using the predefined criteria.
// The grade should be determined using the following criteria:
// Average score >= 90: Grade "A"
// Average score >= 80: Grade "B"
// Average score >= 70: Grade "C"
// Average score >= 60: Grade "D"
// Average score < 60: Grade "F"
// Test the function
// Create instances of Student with different sets of scores.
// Use console.log to display the calculated overall grade for these student instances.
// Add and Commit Changes:
// git add .
// git commit -m "Add calculateGrade function and example usage"
// Push to GitHub:
// git push -u origin add-calculate-grade-function

// Actualización del tipo Student
// Tipo Student actualizado
type Student = {
    studentName: string;
    studentId: number;
    subjects: string[];
    major: string | undefined;
    isStudying: boolean;
    grade: number | null;
    uniqueSymbol: symbol;
    allScores: number[];
    attendance: number; // Nueva propiedad añadida
};

// Función calculateGrade actualizada
function calculateGrade(student: Student): string {
    if (student.attendance < 75) {
        return "F (Attendance below 75%)";
    }

    if (student.allScores.length === 0) {
        return "No scores available";
    }

    const totalScore = student.allScores.reduce((sum, score) => sum + score, 0);
    const averageScore = totalScore / student.allScores.length;

    if (averageScore >= 90) return "A";
    if (averageScore >= 80) return "B";
    if (averageScore >= 70) return "C";
    if (averageScore >= 60) return "D";
    return "F";
}

// Crear instancias de Student para probar
const student1: Student = {
    studentName: "Alice Johnson",
    studentId: 12345,
    subjects: ["Math", "Physics", "Computer Science"],
    major: "Computer Engineering",
    isStudying: true,
    grade: null,
    uniqueSymbol: Symbol("student1"),
    allScores: [85, 92, 78, 95, 88],
    attendance: 95
};

const student2: Student = {
    studentName: "Bob Smith",
    studentId: 67890,
    subjects: ["Biology", "Chemistry"],
    major: "Biochemistry",
    isStudying: true,
    grade: null,
    uniqueSymbol: Symbol("student2"),
    allScores: [72, 68, 75, 80, 79],
    attendance: 70
};

const student3: Student = {
    studentName: "Charlie Brown",
    studentId: 13579,
    subjects: ["History", "Literature"],
    major: "Liberal Arts",
    isStudying: true,
    grade: null,
    uniqueSymbol: Symbol("student3"),
    allScores: [95, 98, 92, 97, 94],
    attendance: 80
};

// Probar la función mejorada y mostrar resultados
console.log(`${student1.studentName}'s grade: ${calculateGrade(student1)}`);
console.log(`${student2.studentName}'s grade: ${calculateGrade(student2)}`);
console.log(`${student3.studentName}'s grade: ${calculateGrade(student3)}`);

interface ClothingItem{
    id: number,
    name: string,
    price: number,
    quantity: number,
    sizes: string[]

}

const tShirt: ClothingItem ={
    id:1,
    name: "Classic Cotton",
    price: 19.00,
    quantity: 20,
    sizes: ["S", "M","L","XL"]
}

console.log("Clothing Item:", tShirt);
console.log("Item Name:", tShirt.name);
console.log("Available Sizes:", tShirt.sizes.join(", "));

function calculateAveragePrice(items: ClothingItem[]):number{
    if(items.length===0){
        return 0;
    }
    const totalPrice=items.reduce((sum,item) => sum + item.price,0);
    return totalPrice / items.length;
}

function countItemsInventory (items: ClothingItem[]):number{
    return items.reduce((total,item) => total + item.quantity,0)
}

const inventoryItems: ClothingItem[]=[
    { id: 1, name: "Classic T-Shirt", price: 19.99, quantity: 100, sizes: ["S", "M", "L", "XL"] },
    { id: 2, name: "Denim Jeans", price: 49.99, quantity: 50, sizes: ["30", "32", "34", "36"] },
    { id: 3, name: "Hoodie", price: 39.99, quantity: 75, sizes: ["M", "L", "XL"] },
    { id: 4, name: "Socks Pack", price: 9.99, quantity: 200, sizes: ["One Size"] }
];

console.log("Average Price:", calculateAveragePrice(inventoryItems).toFixed(2));
console.log("Total Items in Inventory:", countItemsInventory(inventoryItems));

// Prueba con inventario vacío
console.log("Average Price (Empty Inventory):", calculateAveragePrice([]).toFixed(2));
console.log("Total Items (Empty Inventory):", countItemsInventory([]));