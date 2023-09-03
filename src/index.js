import {project,showProject} from "./projectModule.js";
import "./style/mainStyle.css";
import { updateSidebar } from "./uiModule.js";
import {createProjectHeader,createProjectList}from "./sidebar.js";

const p1 = new project("Home");
const contentElement=document.querySelector("#content");
const sidebarElement=document.querySelector("#sidebar");
// document.body.append(createAddButton(p1));
contentElement.append(showProject(p1));

const p2 = new project("Work");
const projList=[];
projList.push(p1,p2);
sidebarElement.append(createProjectHeader(projList),createProjectList(projList));
