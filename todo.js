/* import Item object */
import { Item } from "./items.js";

/* Represents a to-do list. */
class ToDo {
    /* Creates an instance of ToDo. */
    constructor() {
        this.toDo = []; //list of to-do items
    }

    /* Adds a new item to the to-do list.
     * @param {Item} item The item to add to the to-do list.
     */
    addNew(item) {
        if (!(item instanceof Item)) {
            throw new Error("Invalid item. Please provide an Item object.");
        } else {
            this.toDo.push(item);
        }
    }

    /* Removes an item from the to-do list.
     * @param {Item} item The item to remove from the to-do list.
     */
    remove(item) {
        const index = this.toDo.indexOf(item);
        if (index !== -1 && item instanceof Item) {
            this.toDo.splice(index, 1);
        } else {
            console.log("Item not found in the list.");
        }
    }

    /* Reorganizes the to-do list by moving an item from one index to another.
     * @param {number} fromIndex The index of the item to move.
     * @param {number} toIndex The index to move the item to.
     */
    reOrganize(fromIndex, toIndex) {
        if (
            fromIndex >= 0 &&
            fromIndex < this.toDo.length &&
            toIndex >= 0 &&
            toIndex < this.toDo.length
        ) {
            const item = this.toDo.splice(fromIndex, 1)[0];
            this.toDo.splice(toIndex, 0, item);
        } else {
            console.log("Invalid index.");
        }
    }

    /* Edits an item in the to-do list.
     * @param {Item} item The item to edit.
     * @param {string} property The property of the item to edit.
     * @param {string} value The new value of the property.
     */
    editItem(item, property, value) {
        if (!this.toDo.includes(item)) {
            console.log("Item not found in the list.");
        } else {
            if (property === "title") {
                item.setTitle(value);
            } else if (property === "description") {
                item.setDescription(value);
            } else if (property === "dateDue") {
                item.setDateDue(value);
            } else {
                console.log(
                    "Invalid property. Please use 'title', 'description', or 'dateDue'",
                );
            }
        }
    }

    /* Prints the to-do list to the console. */
    printList() {
        console.log("***To Do List***\n");
        this.toDo.forEach((item, index) => {
            console.log(`Item ${index + 1}:`);
            console.log(`Title: ${item.getTitle()}`);
            console.log(`Description: ${item.getDescription()}`);
            console.log(`Date Created: ${item.getDateCreated()}`);
            console.log(`Date Due: ${item.getDateDue()}`);
            console.log(`Days Left: ${item.getDaysLeft()}`);
            console.log(`Status: ${item.getStatus()}`);
            console.log("---");
        });
    }
}
