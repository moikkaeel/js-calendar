import { Date } from "./date.js";

// Storing Date-objects
export const calendar = [];

// Can add own dates for people needing to have 
// to-do lists for certain dats (aka me)
export function addDate(date) {
    calendar.push(date);
    console.log(date.getDate(), "added to calendar!");
}

export function addTask(date, task) {
    date.addTask(task);
    console.log("New task", task, "added!");
}

export function deleteTask(date, task) {

    if(date.getTaskCount() == 0) {
        console.log("No tasks available!");
        return;
    }

    date.deleteTask(task);
}

export function deleteDate(date) {

    if(calendar.length == 0) {
        console.log("No dates available!");
        return;
    }

    const index = calendar.indexOf(date);
    if (index > -1) {
        calendar.splice(index, 1);
        console.log(date.getDate(), "deleted from calendar!");
    }
    else { console.log("Date not found") };
}

// Sort dates
export function viewCalendar() {

    if(calendar.length == 0) {
        console.log("No dates available!");
        return;
    }

    for(let date of calendar) {
        console.log(date.getDate());
    }
}

export function viewTasks(date) {

    if(date.getTaskCount() == 0) {
        console.log("No tasks available!");
        return;
    }

    date.printTasks();
}

let today = new Date(1,1,2025);
let tomorrow = new Date(2,1,2025);

addDate(today);
addDate(tomorrow);
