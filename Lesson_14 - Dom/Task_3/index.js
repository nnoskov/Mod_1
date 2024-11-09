// init of obj
const taskList = document.querySelector(".tasks-list");
let modalWindow = null;
const formCreateTask = document.querySelector(".create-task-block");

function createTaskItem(task) {
  const taskItem = document.createElement("div");
  taskItem.className = "task-item";
  taskItem.dataset.taskId = task.id;
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

function createModalWindow() {
  /**
   * Формирование HTML структуры модального окна
   */
  const modalWindowHTML = document.createElement("div");
  modalWindowHTML.className = "modal-overlay modal-overlay_hidden";
  const deleteModalHTML = document.createElement("div");
  deleteModalHTML.className = "delete-modal";
  const deleteModalButtonsHTML = document.createElement("div");
  deleteModalButtonsHTML.className = "delete-modal__buttons";
  const buttonCancel = document.createElement("button");
  buttonCancel.className = "delete-modal__button delete-modal__cancel-button";
  buttonCancel.innerText = "Отмена";
  const buttonConfirm = document.createElement("button");
  buttonConfirm.className = "delete-modal__button delete-modal__confirm-button";
  buttonConfirm.innerText = "Удалить";

  const deleteModalQuestion = document.createElement("h3");
  deleteModalQuestion.className = "delete-modal__question";
  deleteModalQuestion.innerText = "Вы действительно хотите удалить эту задачу?";

  deleteModalButtonsHTML.append(buttonCancel);
  deleteModalButtonsHTML.append(buttonConfirm);
  deleteModalHTML.append(deleteModalButtonsHTML);
  deleteModalHTML.prepend(deleteModalQuestion);
  modalWindowHTML.append(deleteModalHTML);


  /**
   * Обработчики для кнопок. Если датасеты существуют,
   * значит был запрос на удаление задачи
   */
  buttonCancel.addEventListener("click", () => {
    if (buttonConfirm.dataset.taskId) delete buttonConfirm.dataset.taskId;
    modalWindowHTML.classList.add("modal-overlay_hidden");
  });

  buttonConfirm.addEventListener("click", (event) => {
    if (buttonConfirm.dataset.taskId) {
      const taskForDelete = taskList.querySelector(
        `[data-task-id="${buttonConfirm.dataset.taskId}"]`
      );
      if (taskForDelete) taskForDelete.remove();
    }
    modalWindowHTML.classList.add("modal-overlay_hidden");
  });

  return modalWindowHTML;
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

function notifyError(alarmType) {
  spnAlarm = document.createElement("span");
  spnAlarm.className = "error-message-block";
  switch (alarmType) {
    case "taskEmpty":
      spnAlarm.innerText = "Название задачи не должно быть пустым";
      break;
    case "taskExisted":
      spnAlarm.innerText = "Задача с таким названием уже существует.";
      break;
    default:
      break;
  }
  const formCreateTask = document.querySelector(".create-task-block");
  formCreateTask.append(spnAlarm);
}

formCreateTask.addEventListener("submit", (event) => {
  // отключаем перезагрузку
  event.preventDefault();
  // добавляем модальное окно если еще не создано.
  if (!modalWindow) {
    modalWindow = createModalWindow();
    document.querySelector("body").append(modalWindow);
  }

  const errMesageBlock = document.querySelector(".error-message-block");
  if (errMesageBlock) errMesageBlock.remove();

  const { target } = event;
  const taskDescription = target.taskName.value;
  if (taskDescription && !isExistedTask(taskDescription))
    taskList.append(createTaskItem(taskObj(taskDescription)));
  else {
    notifyError(taskDescription ? "taskExisted" : "taskEmpty");
  }
});

taskList.addEventListener("click", (event) => {
  const { target } = event;
  const taskItem = target.closest(".task-item");
  if (target.tagName === "BUTTON") {
    const confButton = modalWindow.querySelector(
      ".delete-modal__confirm-button"
    );
    confButton.dataset.taskId = taskItem.dataset?.taskId; // добавляем в кнопку подтверждения ID задачи для удаления
    modalWindow.classList.remove("modal-overlay_hidden");
  }
});
