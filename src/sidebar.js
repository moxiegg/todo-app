import { updateContent } from "./uiModule.js";
import {project,showProject} from "./projectModule.js";
import "./style/mainStyle.css";
export function createSidebarElement(projList){
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
    sidebarElement.append(projListELement);
    return sidebarElement;
}