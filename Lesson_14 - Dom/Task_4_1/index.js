/**
 * Инициализация основных элементов
 */
const TASK_LIST = document.querySelector(".tasks-list");
let MODAL_WINDOW = createModalWindow();
const FORM_CREATE_TASK = document.querySelector(".create-task-block");
const BODY = document.querySelector("body");
BODY.append(MODAL_WINDOW);
BODY.dataset.appTheme = "light";

ERR_SAME_TASK = "Задача с таким названием уже существует.";
ERR_TASK_IS_EMPTY = "Название задачи не должно быть пустым";

let tasks = [
  {
    id: "1138465078061",
    completed: false,
    text: "Посмотреть новый урок по JavaScript",
  },
  {
    id: "1138465078062",
    completed: false,
    text: "Выполнить тест после урока",
  },
  {
    id: "1138465078063",
    completed: false,
    text: "Выполнить ДЗ после урока",
  },
];

function addNewTask(taskObject) {
  tasks.push(taskObject); //update data
  renderTasks(); //update html
}

function updateCompletion(targetId, compState) {
  const id = targetId.split('-')[1]; // task-"1138465078061"
  tasks.find(task => task.id === id).completed = compState;
}

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
  cbxFormCbx.checked = task.completed;
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

function renderTasks() {
  TASK_LIST.innerHTML = "";
  tasks.forEach((task) => {
    TASK_LIST.append(createTaskItem(task));
  });
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
    delete buttonConfirm?.dataset.taskId;
    hideModal();
  });

  buttonConfirm.addEventListener("click", () => {
    const taskId = buttonConfirm.dataset.taskId;
    if (taskId) {
      tasks = tasks.filter((task) => task.id !== taskId); //update data
      renderTasks();
      delete buttonConfirm.dataset.taskId;
    }
    hideModal()
  });

  return modalWindowHTML;
}

function showModal() {
  MODAL_WINDOW.classList.remove("modal-overlay_hidden");
}

function hideModal() {
  MODAL_WINDOW.classList.add("modal-overlay_hidden");
}

const taskObj = (description) => ({
  id: String(Date.now()),
  completed: false,
  text: description,
});

function isExistedTask(taskDescription) {
  return tasks.find((task) => task.text === taskDescription);
}

function notifyError(alarmType) {
  spnAlarm = document.createElement("span");
  spnAlarm.className = "error-message-block";
  spnAlarm.innerText = alarmType;
  FORM_CREATE_TASK.append(spnAlarm);
}

function toggleTheme(appTheme) {
  const tasks = TASK_LIST.querySelectorAll(".task-item");

  if (appTheme === "light") {
    tasks.forEach((task) => {
      task.style.color = "#ffffff";
      task.querySelector(".task-item__delete-button").style.border =
        "1px solid #ffffff";
    });
    BODY.style.background = "#24292E";
    BODY.dataset.appTheme = "dark";
  } else {
    tasks.forEach((task) => {
      task.querySelector(".task-item__delete-button").style.border = "none";
      task.style.color = "initial";
    });
    BODY.style.background = "initial";
    BODY.dataset.appTheme = "light";
  }
}

FORM_CREATE_TASK.addEventListener("submit", (event) => {
  // отключаем перезагрузку
  event.preventDefault();
  document.querySelector(".error-message-block")?.remove();

  const { target } = event;
  const taskDescription = target.taskName.value;
  if (taskDescription && !isExistedTask(taskDescription))
    addNewTask(taskObj(taskDescription));
  else {
    notifyError(taskDescription ? ERR_SAME_TASK : ERR_TASK_IS_EMPTY);
  }
});

TASK_LIST.addEventListener("click", (event) => {
  const { target } = event;
  const taskItem = target.closest(".task-item");
  
  if (target.tagName === "BUTTON") {
    const confButton = MODAL_WINDOW.querySelector(
      ".delete-modal__confirm-button"
    );
    confButton.dataset.taskId = taskItem.dataset?.taskId; // добавляем в кнопку подтверждения ID задачи для удаления
    showModal();
  }

  if (target.tagName === "INPUT" && target.type === 'checkbox') {
    updateCompletion(target.id, target.checked);
  }
});

document.addEventListener("keydown", (event) => {
  const { key } = event;
  if (key === "Tab") {
    event.preventDefault();
    toggleTheme(BODY.dataset.appTheme);
  }
});

renderTasks();
