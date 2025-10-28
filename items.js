class items { 
    /*
    let title = ""; 
    let description = ""; 
    let dateCreated = ""; //should it be a string? 
    let dateDue = ""; 
    let statusList = ["New", "Working on", "Finished"]; // maybe it can be a list or like a selection? 
    let status = statusList[0]; */

    constructor(title, description, dateDue) { 
        this.title = title; 
        this.description = description; 
        this.dateCreated = new Date(); 
        //if dateDue = regex
        this.dateDue = new Date(dateDue); 
        this.status = "New"; 
    }
    

    setStatus(dateCreated, dateDue) { 
        // when this function is called it automatically assumes that it is no longer new
        if (dateDue > dateCreated) { 
            this.status = "Working on"; 
        } else if (dateDue <= dateCreated) {
            this.status = "Finished"
        }
    }

    getTitle() { 
        return this.title;
    }

    getDescription() { 
        return this.description;
    }

    getDateCreated() { 
        return this.dateCreated;
    }

    getDateDue() { 
        return this.dateDue;
    }

    daysLeft() { 
        return this.dateDue - this.dateCreated;
    }
    
    getStatus() { 
        return this.status;
    }

    setTitle(title) { 
        this.title = title;
    }

    // setters for everything 

    // constructor that sets everything? 
}