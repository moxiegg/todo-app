export default class projectModule{
    constructor(name){
        this.tasks=[];
        this.name=name;
    }
    getTasks(){
        return this.tasks;
    }
    getName(){
        return this.name;
    }
    addTask(obj){
        this.tasks.push(obj);
    }
    removeTask(){
        this.tasks.splice(ind,1);
    }
}