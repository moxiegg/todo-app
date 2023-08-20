import todoObj from './todoModule.js';
import './style/mainStyle.css'
const obj = new todoObj('todo-app','this is a TOP project for js','2023-08-19','high');
console.log(obj)
function createTodo(priorityClass){

    const element=document.createElement('div');
    element.classList.add('todoObject');
    const title=document.createElement('div');
    title.textContent=obj.getTitle();
    
    const description=document.createElement('div');
    description.textContent=obj.getDescription();
    
    const date=document.createElement('div');
    date.textContent=obj.getDate();
    
    
    element.append(title,description,date);
    element.classList.add(priorityClass);
    return element;
}
const contentElement=document.querySelector('#content');
contentElement.append(createTodo('high'));
contentElement.append(createTodo('medium'));
contentElement.append(createTodo('low'));
