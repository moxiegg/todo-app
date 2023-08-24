
const contentElement = document.querySelector("#content");
const sidbarElement = document.querySelector("#sidebar");
export function clearContent() {
  while (contentElement.firstChild) {
    contentElement.removeChild(contentElement.firstChild);
  }
}
export function updateContent(obj){
    clearContent();
    contentElement.append(obj);
}
export function updateSidebar(obj){
  clearContent();
  sidebarElement.append(obj);
}