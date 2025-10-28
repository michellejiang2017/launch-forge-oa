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
    

    function setStatus(dateCreated, dateDue) { 
        // when this function is called the 
        if (dateDue > dateCreated) { 
            this.status = "Working on"; 
        } else if (dateDue <= dateCreated) {
            this.status = "Finished"
        }
    }

    function getTitle() { 

    }

    function getDescription() { 

    }

    function getDateCreated() { 

    }

    function getDateDue() { 

    }

    function daysLeft() { 
        getDateDue - getDateCreated //something like that 
    }
    function getStatus() { 

    }

    function setTitle() { 

    }

    // setters for everything 

    // constructor that sets everything? 
}