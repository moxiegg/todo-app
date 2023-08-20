import "./style/mainStyle.css";
export function todoForm() {
  const formElement = document.createElement("form");
  formElement.className = "formElement";
  const titleInput = document.createElement("input");
  titleInput.type = "text";
  titleInput.name = "title";

  const descriptionInput = document.createElement("input");
  descriptionInput.type = "textarea";
  descriptionInput.rows = 4;
  descriptionInput.cols = 50;
  descriptionInput.placeholder = "Description";
  descriptionInput.name = "description";

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

  const dateInput = document.createElement("input");
  dateInput.type = "date";
  dateInput.name = "date";

  const submitButton = document.createElement("button");
  submitButton.textContent = "Submit";
  formElement.append(
    titleInput,
    descriptionInput,
    dateInput,
    priorityInput,
    submitButton
  );
  return formElement;
}
