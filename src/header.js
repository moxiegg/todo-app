import "./style/mainStyle.css";
export function header(){
    const div=document.createElement("div");
    div.className="header";
    div.textContent="Header";
    return div;
}