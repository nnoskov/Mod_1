// // Делегирование событий

// const allNavButtons = document.querySelectorAll(
//   ".main-navigation__button-item"
// );

// allNavButtons.forEach((button) => {
//   button.addEventListener("click", (event) => {
//     const { target } = event;
//     allNavButtons.forEach((navButton) => {
//       navButton.classList.remove("main-navigation__button-item_selected");
//     });
//     target.classList.add("main-navigation__button-item_selected");
//   });
// });

const allNavButtons = document.querySelectorAll(
  ".main-navigation__button-item"
);

const mainNavigation = document.querySelector(".main-navigation");
mainNavigation.addEventListener("click", (event) => {
//console.log('container click');
console.log(event.target.tagName);
  //const isNavButton = event.target.closest(".main-navigation__button-item");
  if (event.target.tagName === 'A') {
    allNavButtons.forEach((navButton) => {
      navButton.classList.remove("main-navigation__button-item_selected");
    });
    event.target.classList.add("main-navigation__button-item_selected");
  }
});

// const firstNavButton = document.querySelector('.main-navigation__button-item');
// firstNavButton.addEventListener('click', (event)=>{
//     console.log('Первая кнопка', event.target);
// })

// document.body.addEventListener('click', (event)=>{
//     console.log('body click', event.target);
// })
