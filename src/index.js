import {project,showProject} from "./projectModule.js";
import "./style/mainStyle.css";

const p1 = new project("Home");
const contentElement=document.querySelector("#content");
// document.body.append(createAddButton(p1));
contentElement.append(showProject(p1));
