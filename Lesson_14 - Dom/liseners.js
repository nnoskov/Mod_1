// const firstNavButton = document.querySelector(".main-navigation__button-item");
// firstNavButton.addEventListener("click", (event) => {
//   console.log(event.target);
//   //const target = event.target;
//   const { target } = event;
//   target.classList.add("main-navigation__button-item_selected");
// });

const allNavButtons = document.querySelectorAll(
  ".main-navigation__button-item"
);
allNavButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    allNavButtons.forEach((button) => {
      button.classList.remove("main-navigation__button-item_selected");
    });
    const { target } = event;
    target.classList.add("main-navigation__button-item_selected");
  });
});

// submit
const tasksForm = document.querySelector(".create-task-block");
tasksForm.addEventListener("submit", (event) => {
  console.log(event);
  event.preventDefault();
  const { target } = event;
  const taskNameInput = target.taskName;
  if (taskNameInput.value) {
    alert(`Созданная задача:${taskNameInput.value}`);
    return;
  }
  alert("Введите правильные данные!");
});

// keydown, keyup

// document.addEventListener("keydown", (event) => {
//   event.preventDefault();
//   const { key } = event;
//   const taskItemToDelete = document.querySelector(`[data-task-id="${key}"]`);
//   if (taskItemToDelete) {
//     const deleteConfirm = confirm("Вы действительно хотите удалить, задачу?");
//     if (deleteConfirm) taskItemToDelete.remove();
//   }
// });

// document.addEventListener("keyup", (event) => {
//   const { key } = event;
//   //console.log(key);
// });

// mouseover
const createTooltip = (text) => {
  const tooltip = document.createElement("span");
  tooltip.textContent = text;
  tooltip.className = "tooltip";
  return tooltip;
};

document.addEventListener("mouseover", (event) => {
  const { target } = event;
  const isOverDeleteButton = target.className.includes(
    "task-item__delete-button"
  );
  if (isOverDeleteButton) {
    const taskItemHTML = target.closest(".task-item");
    const taskId = taskItemHTML?.dataset.taskId;
    if (taskId) {
      const tooltipHTML = createTooltip(
        `Удалить задачу под номером ${taskId}?`
      );
      target.append(tooltipHTML);
    }
  }
});

document.addEventListener("mouseout", (event) => {
  const { target } = event;
  const isOutFromDeleteButton = target.className.includes(
    "task-item__delete-button"
  );
  if (isOutFromDeleteButton) {
    const tooltip = document.querySelector(".tooltip");
    if (tooltip) tooltip.remove();
  }
});

// document.addEventListener("mousemove", (event) => {
//   console.log(event);
// });

// context menu

document.addEventListener("contextmenu", (event) => {
  event.preventDefault(); // отключение вывода контекстного меню
});

// change, input
const checkTaskNameInputOnValidation = (value) => {
  if (!value || value.includes("@")) return false;

  return true;
};

const createTaskBlock = document.querySelector(".create-task-block");
const taskNameInput = createTaskBlock.querySelector(
  ".create-task-block__input"
);

taskNameInput.addEventListener("change", (event) => {
  const { target } = event;
  const { value } = target;
  const isValid = checkTaskNameInputOnValidation(value);
  const messageBlockFromDom = document.querySelector(".error-message-block");
  if (!isValid) {
    const newMessageBlock = document.createElement("span");
    newMessageBlock.className = "error-message-block";
    newMessageBlock.textContent = "Текст для задачи не может быть пустым";
    createTaskBlock.append(newMessageBlock);
  } else if (isValid && messageBlockFromDom) {
    messageBlockFromDom.remove();
  }
});

taskNameInput.addEventListener("input", (event) => {
  const { target } = event;
  const { value } = target;
  const isValid = checkTaskNameInputOnValidation(value);
  const messageBlockFromDom = document.querySelector(".error-message-block");
  if (!isValid) {
    const newMessageBlock = document.createElement("span");
    newMessageBlock.className = "error-message-block";
    newMessageBlock.textContent = "Текст для задачи не может быть пустым";
    createTaskBlock.append(newMessageBlock);
  } else if (isValid && messageBlockFromDom) {
    messageBlockFromDom.remove();
  }
});