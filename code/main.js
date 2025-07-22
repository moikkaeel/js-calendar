import {Date} from "./date.js";

// Storing Date-objects
let calendar = [];

// Can add own dates for people needing to have 
// to-do lists for certain dats (aka me)
function addDate(date) {
    calendar.push(date);
    console.log(date.getDate(), "added to calendar!");
}

function addTask(date, task) {
    date.addTask(task);
    console.log("New task", task, "added!");
}

function deleteTask(date, task) {

    if(date.getTaskCount() == 0) {
        console.log("No tasks available!");
        return;
    }

    date.deleteTask(task);
}

function deleteDate(date) {

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
function viewCalendar() {

    if(calendar.length == 0) {
        console.log("No dates available!");
        return;
    }

    for(let date of calendar) {
        console.log(date.getDate());
    }
}

function viewTasks(date) {

    if(date.getTaskCount() == 0) {
        console.log("No tasks available!");
        return;
    }

    date.printTasks();
}

console.log("Welcome to js-calendar where you can create your own days.");

console.log("-- View an empty calendar --")
viewCalendar();

console.log("-- Add a new date --")

let today = new Date(1,1,2025);
let tomorrow = new Date(2,1,2025);

addDate(today);
addDate(tomorrow);

console.log("-- Add a new task to set date -- ");
addTask(today, "Clean room");
addTask(today, "Do the dishes");

console.log("-- View tasks of a date -- ");
viewTasks(today);

console.log("-- Delete a task -- ");
deleteTask(today, "Clean room");
deleteTask(today, "Play games");

console.log("-- View tasks of a date again -- ");
viewTasks(today);

console.log("-- View a calendar --")
viewCalendar();

console.log("-- Delete a date --")
deleteDate(today);