/* Represents an item in the to-do list. */
export class Item {
    /*
     * Creates an instance of Item.
     * @constructor
     * @param {string} title The title of the item.
     * @param {string} description The description of the item.
     * @param {Date} dateDue The due date of the item.
     */
    constructor(title, description, dateDue) {
        this.title = title;
        this.description = description;
        this.dateCreated = new Date();
        const testDate = new Date(dateDue);
        if (isNaN(testDate.getTime())) {
            throw new Error("Invalid date format. Please use YYYY-MM-DD.");
        }
        this.dateDue = testDate;
        this.status = "New";
    }

    /*
     * Returns the title of the item.
     * @returns {string} The title of the item.
     */
    getTitle() {
        return this.title;
    }

    /*
     * Returns the description of the item.
     * @returns {string} The description of the item.
     */
    getDescription() {
        return this.description;
    }

    /*
     * Returns the date the item was created.
     * @returns {Date} The date the item was created.
     */
    getDateCreated() {
        return this.formatDate(this.dateCreated);
    }

    /*
     * Returns the due date of the item.
     * @returns {Date} The due date of the item.
     */
    getDateDue() {
        return this.formatDate(this.dateDue);
    }

    /*
     * Returns the number of days left until the item is due.
     * @returns {number} The number of days left until the item is due.
     */
    getDaysLeft() {
        return Math.ceil((this.dateDue - new Date()) / (1000 * 60 * 60 * 24));
    }

    /*
     * Returns the status of the item.
     * @returns {string} The status of the item.
     */
    getStatus() {
        this.updateStatus();
        return this.status;
    }

    /*
     * Sets the title of the item.
     * @param {string} title The new title of the item.
     */
    setTitle(title) {
        this.title = title;
    }

    /*
     * Sets the description of the item.
     * @param {string} description The new description of the item.
     */
    setDescription(description) {
        this.description = description;
    }

    /*
     * Sets the due date of the item.
     * @param {Date} dateDue The new due date of the item.
     */
    setDateDue(dateDue) {
        const testDate = new Date(dateDue);
        if (isNaN(testDate.getTime())) {
            throw new Error("Invalid date format. Please use YYYY-MM-DD.");
        }
        this.dateDue = new Date(dateDue);
    }

    /*
     * Starts the task by setting the status to "Working on".
     */
    startTask() {
        if (this.status === "New") {
            this.status = "Working on";
        }
    }

    /*
     * Updates the status of the item to "Finished" based on the due date.
     */
    updateStatus() {
        const now = new Date();
        if (this.dateDue <= now) {
            this.status = "Finished";
        }
    }

    /*
     * Returns a string representation of the date.
     * @returns {string} A string representation of the date.
     */
    formatDate(date) {
        const yyyy = date.getFullYear();
        const mm = String(date.getMonth() + 1).padStart(2, "0");
        const dd = String(date.getDate()).padStart(2, "0");
        return `${yyyy}-${mm}-${dd}`;
    }
}

// === TEST CASES ===

// Create a valid item
const task1 = new Item(
    "Finish project",
    "Implement database logic",
    "2025-11-05",
);

console.log("🟢 Task 1 created:", task1);
console.log("Days left:", task1.getDaysLeft());
console.log("Current status:", task1.getStatus());

// Update title and due date
task1.setTitle("Finish JS project");
task1.setDateDue("2025-11-10");
console.log("\n🟢 Updated Task 1:", task1);

// test due date in the past
const oldTask = new Item("Past due test", "Check overdue logic", "2024-01-01");
console.log("\nPast due status:", oldTask.getStatus());
