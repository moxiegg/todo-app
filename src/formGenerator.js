import "./style/mainStyle.css";
export function todoForm() {
  const extraDiv = document.createElement("div");
  extraDiv.className = "centerClass";

  const formTitle = document.createElement("div");
  formTitle.textContent = "Add Task";
  formTitle.className = "formTitle";

  const formElement = document.createElement("form");
  formElement.classList.add("formElement");

  const titleLabel = document.createElement("label");
  titleLabel.textContent = "Title  : ";
  titleLabel.className = "formLabel";
  const titleInput = document.createElement("input");
  titleInput.type = "text";
  titleInput.maxLength=20;
  titleInput.name = "title";

  const descriptionLabel = document.createElement("label");
  descriptionLabel.textContent = "Description : ";
  descriptionLabel.className = "formLabel";
  const descriptionInput = document.createElement("textarea");
  descriptionInput.rows = 3;
  descriptionInput.cols = 15;
  descriptionInput.placeholder = "Description";
  descriptionInput.maxLength=35;
  descriptionInput.name = "description";
  
  const priorityLabel = document.createElement("label");
  priorityLabel.textContent = "Priority : ";
  priorityLabel.className = "formLabel";
  const priorityInput = document.createElement("select");
  priorityInput.name = "priority";

  const option1 = document.createElement("option");
  option1.textContent = "High";
  option1.value = "high";

  const option2 = document.createElement("option");
  option2.textContent = "Medium";
  option2.value = "medium";

  const option3 = document.createElement("option");
  option3.textContent = "Low";
  option3.value = "low";

  priorityInput.append(option1, option2, option3);

  
  const dateLabel = document.createElement("label");
  dateLabel.textContent = "Date : ";
  dateLabel.className = "formLabel";
  const dateInput = document.createElement("input");
  dateInput.type = "date";
  dateInput.name = "date";

  formElement.append(
    formTitle,
    titleLabel, 
    titleInput,
    descriptionLabel,
    descriptionInput,
    dateLabel,
    dateInput,
    priorityLabel,
    priorityInput,
  );
  extraDiv.className = "card";
  extraDiv.append(formElement);
  return extraDiv;
}

export function projForm(){
  const extraDiv = document.createElement("div");
  const formElement = document.createElement("form");
  const titleElement = document.createElement("input");
  titleElement.type="text";
  titleElement.name="title";
  const titleLabel = document.createElement("label");
  const formTitle = document.createElement("div");
  formElement.classList.add("formElement","card");
  formTitle.textContent="Add Project";
  formTitle.className="formTitle";

  titleLabel.textContent="Project Name:";
  titleLabel.className="formLabel";
  titleElement.name="title";
  titleElement.maxLength=10;
  
  formElement.append(formTitle,titleLabel,titleElement);
  extraDiv.append(formElement);
  return extraDiv;
}
