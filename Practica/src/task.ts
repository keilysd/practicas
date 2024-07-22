class Task {
    title: string;
    completed: boolean;

    constructor(title: string, completed: boolean = false) {
        this.title = title;
        this.completed = completed;
    }
}

const task1 = new Task('Complete assignment');
console.log(task1);

export default Task;