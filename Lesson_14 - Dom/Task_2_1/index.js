function createTaskItem(task) {
  const taskItem = document.createElement("div");
  taskItem.className = "task-item";
  taskItem.dataset.dataTaskId = task.id;
  const taskItemMainContainer = document.createElement("div");
  taskItemMainContainer.className = "task-item__main-container";
  const taskItemMainContent = document.createElement("div");
  taskItemMainContent.className = "task-item__main-content";
  const cbxForm = document.createElement("form");
  cbxForm.className = "checkbox-form";
  const cbxFormCbx = document.createElement("input");
  cbxFormCbx.className = "checkbox-form__checkbox";
  cbxFormCbx.type = "checkbox";
  cbxFormCbx.id = `task-${task.id}`;
  const lblFor = document.createElement("label");
  lblFor.htmlFor = `task-${task.id}`;
  const spnItemText = document.createElement("span");
  spnItemText.className = "task-item__text";
  spnItemText.innerText = task.text;
  const btnDelete = document.createElement("button");
  btnDelete.className = "task-item__delete-button default-button delete-button";
  btnDelete.innerText = "Удалить";

  cbxForm.append(cbxFormCbx);
  cbxForm.append(lblFor);
  taskItemMainContent.append(cbxForm);
  taskItemMainContent.append(spnItemText);
  taskItemMainContainer.append(taskItemMainContent);
  taskItemMainContainer.append(btnDelete);
  taskItem.append(taskItemMainContainer);

  return taskItem;
}

const taskObj = (description) => ({
  id: Date.now(),
  completed: false,
  text: description,
});

function isExistedTask(taskDescription) {
  const tasksDescriptions = {};
  const taskItemsText = document.querySelectorAll(".task-item__text");
  for (const text in taskItemsText) {
    if (Object.prototype.hasOwnProperty.call(taskItemsText, text)) {
      const element = taskItemsText[text];
      tasksDescriptions[element.textContent.toLocaleLowerCase()] =
        element.textContent;
    }
  }
  return Object.hasOwn(tasksDescriptions, taskDescription.toLocaleLowerCase());
}

const taskList = document.querySelector(".tasks-list");

const formCreateTask = document.querySelector(".create-task-block");
formCreateTask.addEventListener("submit", (event) => {
  event.preventDefault(); // отключаем перезагрузку
  const { target } = event;
  const taskDescription = target.taskName.value;
  if (taskDescription && !isExistedTask(taskDescription)) {
    taskList.append(createTaskItem(taskObj(taskDescription)));
    return;
  }
  console.log("пустая задача или дубль");
});
