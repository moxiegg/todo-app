
const contentElement = document.querySelector("#content");
export function clearContent() {
  while (contentElement.firstChild) {
    contentElement.removeChild(contentElement.firstChild);
  }
}
export function updateContent(obj){
    clearContent();
    contentElement.append(obj);
}