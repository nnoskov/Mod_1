const tasksWrapper = document.querySelector('.tasks__wrapper');
console.log(tasksWrapper.className);

// tasksWrapper.className = 'tasks__wrapper_1';
console.log(tasksWrapper.className);

const taskBlock = document.querySelector('#tasks');
console.log(taskBlock.id);

// taskBlock.id = 'tasks_1';

const submitButton = document.querySelector(".create-task-block__button");
console.log(submitButton.innerText);
console.log(submitButton.textContent);

submitButton.innerHTML = '<b>Создать новую закладку</b>';

// innerHTML

//console.log(taskBlock.innerHTML);

//taskBlock.innerHTML = '<b>TasksBlock</b>';

// children

const createTaskForm = document.querySelector(".create-task-block");
console.log(createTaskForm.children); // Только для чтения

// Data атрибуты

const firstNavButton = document.querySelector('.main-navigation__button-item');
console.log(firstNavButton.dataset.buttonId);

firstNavButton.dataset.buttonId = '10';

// style

console.log(firstNavButton.style);
firstNavButton.style.fontWeight='bold';
firstNavButton.style.boxShadow = 'inset 0 0 0 3px #fff';