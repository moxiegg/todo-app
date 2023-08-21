import { todoForm } from "./formGenerator";
import task from './todoModule.js';
import {updateContent , clearContent} from "./uiModule";

export class project{
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
    removeTask(obj){
        const ind = this.tasks.indexOf(obj);
        if(ind!=-1)this.tasks.splice(ind,1);
    }
}


const contentElement = document.querySelector("#content");
function createAddButton(projObj) {
  const todoAddBtn = document.createElement("button");
  todoAddBtn.textContent = projObj.getName();
  const extraDiv = document.createElement("div");
  todoAddBtn.addEventListener("click", () => {
    const formElement = todoForm();
    // clearContent();
    updateContent(formElement);
    formElement.addEventListener("submit", (e) => {
      e.preventDefault();
      const formData = new FormData(formElement);
      let title = formData.get("title");
      let description = formData.get("description");
      let priority = formData.get("priority");
      let date = formData.get("date");
      const obj = new task(title, description, date, priority);
      projObj.addTask(obj);
      updateContent(showProject(projObj));
    });
  });
  extraDiv.append(todoAddBtn);
  return extraDiv;
}

function createTaskElement(taskObj, projObj) {
  const element = document.createElement("div");
  element.classList.add("todoObject");
  const title = document.createElement("div");
  title.textContent = taskObj.getTitle();

  const description = document.createElement("div");
  description.textContent = taskObj.getDescription();

  const date = document.createElement("div");
  date.textContent = taskObj.getDate();

  const delButton = document.createElement("button");
  delButton.textContent = "Delete";
  delButton.addEventListener("click", () => {
    projObj.removeTask(taskObj);
    updateContent(showProject(projObj));
  });
  element.append(title, description, date,delButton);

  if (taskObj.priority == "high") element.classList.add("high");
  if (taskObj.priority == "low") element.classList.add("low");
  if (taskObj.priority == "medium") element.classList.add("medium");
  return element;
}

export function showProject(projObj) {
//   clearContent();
  const todoElement = document.createElement("div");
  todoElement.className = "projectUI";
  todoElement.append(createAddButton(projObj));
  const extraDiv = document.createElement('div');
  extraDiv.className="projectElement";
  projObj.getTasks().forEach((task) => {
    const t = createTaskElement(task,projObj);
    extraDiv.append(t);
  });
  todoElement.append(extraDiv);
  return todoElement;
}
