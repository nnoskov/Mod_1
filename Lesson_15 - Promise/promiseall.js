//Promise.all([new Promise(), new Promise(), new Promise()]);

// fulfilled - все должны быть fulfilled
// rejected - Если даже 1 rejected
const TODOS_URL = "https://jsonplaceholder.typicode.com/todos";
const TODOS_IDs = [10, 15, 45, 155, 177];
const DATA_CONTAINER = document.querySelector("#data-container");

const createTodosElement = (todo) => {
  const todoElement = document.createElement("li");
  const todoElementAnchor = document.createElement("a");
  todoElementAnchor.href = '#';
  todoElementAnchor.textContent = todo.title;
  todoElement.append(todoElementAnchor);
  return todoElement;
};

const getTodosByIds = (ids) => {
  const requests = ids.map((id) => fetch(`${TODOS_URL}/${id}`));

  Promise.all(requests)
    .then((responses) => {
      const dataResult = responses.map((response) => {
        return response.json();
      });
      return Promise.all(dataResult);
    })
    .then((todos) => {
      todos.forEach((todo) => {
        DATA_CONTAINER.append(createTodosElement(todo));
      });
    })
    .catch((err) => {
      console.error(err);
    });
};

getTodosByIds(TODOS_IDs);
