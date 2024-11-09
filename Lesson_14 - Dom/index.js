// как получать элементы в разметке

const tasksBock = document.getElementById('tasks');
console.log(tasksBock);
const allNavButtons = document.getElementsByClassName('main-navigation__button-item');
console.log(allNavButtons);
const allButtons = document.getElementsByTagName('button');
console.log(allButtons);

//querySelector
const tasksBock2 = document.querySelector('#tasks'); // Получение по ID через #
console.log(tasksBock2);

const mainNavigation = document.querySelector('.main-navigation'); // Получение как класса через .
console.log(mainNavigation);

const firsButton = document.querySelector('button'); // Получение по тегу
console.log(firsButton);

const thirdNavigationButton = document.querySelector('[data-button-id="3"]'); // Получение по атрибуту
console.log(thirdNavigationButton);


// querySelectorAll - выбирает все элементы
const allNavigationButtons = document.querySelectorAll('.main-navigation__button-item');
console.log(allNavigationButtons);
allNavigationButtons.forEach((button, index)=>{
    console.log(index, button);
});


const createTaskBlock = document.querySelector('.create-task-block');
const submitButton = createTaskBlock.querySelector('[type="submit"]');
console.log(submitButton);

const pageTitle = document.querySelector('title');
console.log(pageTitle);