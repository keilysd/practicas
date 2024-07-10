"use strict";
// 3. Implement Interfaces (engineer1, manager1)
const engineer1 = {
    id: 1,
    name: "Alice Johnson",
    department: "Software Development",
    salary: 85000,
    programmingLanguages: ["TypeScript", "JavaScript", "Python"],
    projectsCompleted: 7
};
const manager1 = {
    id: 2,
    name: "Bob Smith",
    department: "Project Management",
    salary: 95000,
    teamSize: 8,
    budget: 500000
};
// 4. Usage of Interfaces
function printEmployeeInfo(employee) {
    console.log(`Employee ID: ${employee.id}`);
    console.log(`Name: ${employee.name}`);
    console.log(`Department: ${employee.department}`);
    console.log(`Salary: $${employee.salary}`);
}
function printEngineerInfo(engineer) {
    printEmployeeInfo(engineer);
    console.log(`Programming Languages: ${engineer.programmingLanguages.join(", ")}`);
    console.log(`Projects Completed: ${engineer.projectsCompleted}`);
}
function printManagerInfo(manager) {
    printEmployeeInfo(manager);
    console.log(`Team Size: ${manager.teamSize}`);
    console.log(`Budget: $${manager.budget}`);
}
console.log("Engineer Information:");
printEngineerInfo(engineer1);
console.log("\nManager Information:");
printManagerInfo(manager1);
