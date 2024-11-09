// createElement
const newNavButton = document.createElement("a");
newNavButton.className = "main-navigation__button-item";
newNavButton.href = "#task_expired";
newNavButton.dataset.buttonId = "4";
newNavButton.textContent = "Просроченные задачи";
//console.log(newNavButton);

// append, prepend

const mainNavigation = document.querySelector(".main-navigation");

//mainNavigation.append(newNavButton);
mainNavigation.insertAdjacentElement("beforeend", newNavButton);

// remove

createTaskBlock = document.querySelector(".create-task-block");

const latest = document.querySelector(".main-navigation__button-item-later");
const latest2 = document.querySelector('[href="#tasks_later"]');
console.log(latest2);

//console.log(latest.classList.add('red'));
//mainNavigation.remove();
