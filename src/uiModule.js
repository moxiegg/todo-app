
const contentElement = document.querySelector("#content");
const sidebarElement = document.querySelector("#sidebar");
export function clearContent(obj) {
  while (obj.firstChild) {
    obj.removeChild(obj.firstChild);
  }
}
export function updateContent(obj){
    clearContent(contentElement);
    contentElement.append(obj);
}
export function updateSidebar(obj1,obj2){
  clearContent(sidebarElement);
  sidebarElement.append(obj1,obj2);
}