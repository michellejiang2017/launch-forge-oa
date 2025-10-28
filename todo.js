/*
Question 1:
My brand new startup wants to build a better online productivity tracker. We think that current trackers are far too complicated, and we want to make something that is a simple to-do list.

Without worrying about design/HTML, write the functions needed to make this to-do list workable.

Write the JavaScript functions to make this to-do list functional. Please do not write any HTML or use frameworks like jQuery. The list should be saved as an array of objects. Imagine each piece of functionality would be triggered by a button that called the corresponding function.

The requirements for the to do list are:
To Do items should have properties of title, description, date created, date due, and its status (New, Working on, Finished).
The ability to add and delete items
The ability to reorganize the list (i.e. bring one to top, send down 1, etc)
The ability to edit information about each task where appropriate
Any additional functionality you can think of is highly encouraged, but keep in mind the to do list is supposed to be simple.
*/

// import { items } from './items.js';

class ToDo {
    constructor() {
        this.toDo = []; //list of to do items
    }

    addNew(item) {
        // const newItem = new items(title, description, dateDue);
        // this.toDo.push(newItem);
    }

    remove(index) {
        if (index >= 0 && index < this.toDo.length) {
            this.toDo.splice(index, 1);
        }
    }

    reorganize(fromIndex, toIndex) {
        if (
            fromIndex >= 0 &&
            fromIndex < this.toDo.length &&
            toIndex >= 0 &&
            toIndex < this.toDo.length
        ) {
            const item = this.toDo.splice(fromIndex, 1)[0];
            this.toDo.splice(toIndex, 0, item);
        }
    }

    editItem(index, property, value) {
        if (index >= 0 && index < this.toDo.length) {
            this.toDo[index][property] = value;
        }
    }
}
