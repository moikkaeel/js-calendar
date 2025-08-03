export class Date{

    #tasks = [];

    constructor(day, month, year) {
        this.day = day;
        this.month = month;
        this.year = year;
    }

    getDate() {
        let date = this.day + "." + this.month + "." + this.year;
        return date;
    }

    addTask(task) {
        // this.#tasks to access private element
        this.#tasks.push(task);
    }

    deleteTask(task) {
        const index = this.#tasks.indexOf(task);
        if (index > -1) {
            this.#tasks.splice(index, 1);
            console.log(task, "deleted from tasks!");
        }
        else { console.log("Task not found") };
    }

    printTasks() {

        console.log(this.getDate());

        for(let task of this.#tasks) {
            console.log("- "+task);
        }
    }

    getTaskCount() {
        return this.#tasks.length;
    }
}