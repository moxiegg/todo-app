import { updateContent } from "./uiModule.js";
import {project,showProject} from "./projectModule.js";
export function createSidebarElement(projList){
    const sidebarElement=document.createElement("div");
    projList.forEach(projObj => {
        let extraDiv=document.createElement("div");
        extraDiv.textContent=projObj.getName();
        extraDiv.addEventListener('click',()=>{
            updateContent(showProject(projObj));
        })
        sidebarElement.append(extraDiv);
    });
    return sidebarElement;
}