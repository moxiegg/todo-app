import { updateContent,updateSidebar } from "./uiModule.js";
import {project,showProject} from "./projectModule.js";
import "./style/mainStyle.css";
import { projForm } from "./formGenerator.js";
// const sidebarElement=document.querySelector("#sidebar");
export function createProjectList(projList){
    const sidebarElement=document.createElement("div");
    const projListELement=document.createElement("div");
    projListELement.className="projListElement";
    projList.forEach(projObj => {
        let extraDiv=document.createElement("div");
        extraDiv.className="projectCard";
        extraDiv.textContent=projObj.getName();
        extraDiv.addEventListener('click',()=>{
            updateContent(showProject(projObj));
        });
        const delBtn = document.createElement("button");
        delBtn.textContent="Delete";
        delBtn.className="card-button";
        delBtn.addEventListener('click',()=>{
            projList.splice(projList.indexOf(projObj),1);
            updateSidebar(createProjectHeader(projList),createProjectList(projList))
        })
        extraDiv.append(delBtn);
        projListELement.append(extraDiv);
    });
    return projListELement;
}
export function createProjectHeader(projList){
    const projectHeader = document.createElement("div");
    projectHeader.className="projectHeader";
    const prjTitle = document.createElement("div");
    prjTitle.className="title";
    prjTitle.textContent="Project";
    const prjAddBtn = document.createElement("button");
    prjAddBtn.textContent="Add Project";
    prjAddBtn.className="card-button";
    prjAddBtn.addEventListener('click',()=>{
        const form = projForm();
        const submitButton = document.createElement("button");
        submitButton.classList.add("formBtn", "card-button");
        submitButton.textContent = "Submit"; 
        form.firstChild.append(submitButton); 
        updateContent(form);
        form.firstChild.addEventListener('submit',(e)=>{
            e.preventDefault();
            const formData = new FormData(form.firstChild);
            let title = formData.get('title');
            console.log(title);
            const newProject = new project(title);
            projList.push(newProject);
            // sidebarElement.append(createProjectHeader(projList),createProjectList(projList));
            updateSidebar(createProjectHeader(projList),createProjectList(projList));
        })
        
    });
    projectHeader.append(prjTitle,prjAddBtn);
    return projectHeader;
}