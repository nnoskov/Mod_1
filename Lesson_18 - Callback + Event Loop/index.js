// console.log('start');
// console.log('start2');

// setTimeout((params) => {
//     console.log('Iside timeout')
// },2000);

const FIRST_TODO_URL = "https://jsonplaceholder.typicode.com/todos/1";

// async function getTodo() {
//   try {
//     const answer = await fetch(FIRST_TODO_URL);
//     return await answer.json();
//   } catch (err) {
//     console.error(err);
//   }
// }

// async function renderTodo() {
//   console.log(await getTodo());
// }

// renderTodo();

function getTodo2(callback) {
  fetch(FIRST_TODO_URL)
    .then((response) => response.json())
    .then((todo) => callback(todo))
    .catch((err) => {
      console.error(err);
    });
}

getTodo2((todoItem) => {
    console.log(todoItem);
});

function firstFunc(ourCallback) {
    setTimeout(() => {
      console.log('Hello');
      ourCallback(); // Вызываем коллбэк в нужный момент
    }, 5000);
  };
  
  function secondFunc() {
    console.log('World');
  };
  
  // Передаем secondFunc в качестве коллбэка
  firstFunc(secondFunc);


  setTimeout(() => {
    setTimeout(() => {
      setTimeout(() => {
        setTimeout(() => {
          console.log('Hello World!')
        }, 1000)
      }, 1000)
    }, 1000)
  }, 1000)