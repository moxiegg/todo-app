import { updateContent } from "./uiModule.js";
import {project,showProject} from "./projectModule.js";
import "./style/mainStyle.css";
import { projForm } from "./formGenerator.js";
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
        extraDiv.append(delBtn);
        projListELement.append(extraDiv);
    });
    return projListELement;
}
export function createProjectHeader(){
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
        
    });

    projectHeader.append(prjTitle,prjAddBtn);
    return projectHeader;
}