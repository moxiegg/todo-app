import "./style/mainStyle.css";
export function todoForm() {
  const extraDiv = document.createElement("div");
  extraDiv.className = "centerClass";

  const formElement = document.createElement("form");
  formElement.classList.add("formElement","card");

  const titleLabel = document.createElement("label");
  titleLabel.textContent = "Title";
  titleLabel.className = "formLabel";
  const titleInput = document.createElement("input");
  titleInput.type = "text";
  titleInput.name = "title";


  const descriptionLabel = document.createElement("div");
  descriptionLabel.textContent = "Description";
  const descriptionInput = document.createElement("input");
  descriptionInput.type = "textarea";
  descriptionInput.rows = 4;
  descriptionInput.cols = 50;
  descriptionInput.placeholder = "Description";
  descriptionInput.name = "description";
  
  const priorityLabel = document.createElement("label");
  priorityLabel.textContent = "Priority";
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
  dateLabel.textContent = "Date";
  dateLabel.className = "formLabel";
  const dateInput = document.createElement("input");
  dateInput.type = "date";
  dateInput.name = "date";

  const submitButton = document.createElement("button");
  submitButton.classList.add("formBtn","card-button");
  submitButton.textContent = "Submit";
  formElement.append(
    titleLabel, 
    titleInput,
    descriptionLabel,
    descriptionInput,
    dateLabel,
    dateInput,
    priorityLabel,
    priorityInput,
    submitButton
  );
  extraDiv.append(formElement);
  return extraDiv;
}
