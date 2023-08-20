export default class todoModule{
    constructor(title,description,date,priority){
        this.title=title;
        this.description=description;
        this.date=date;
        this.priority=priority;
    }
    getTitle(){
        return this.title;
    }
    getDate(){
        return this.date;
    }
    getDescription(){
        return this.description;
    }
    getPriority(){
        return this.priority;
    }
}