// fetch

// fetch(url);
// GET, POST, DELETE
const TODOS_URL = "https://api.github.com/users";

const createTodosElement = (...rest) => {
    console.log(rest);
  const todoElement = document.createElement("li");
  const todoElementAnchor = document.createElement("a");
  const todoImg = document.createElement('img');
  todoImg.className = 'avatar';
  todoImg.src = rest.avatar_url;
  todoElementAnchor.href = rest.html_url;
  todoElementAnchor.textContent = rest.login;

  todoElement.append(todoImg);
  todoElement.append(todoElementAnchor);

  return todoElement;
};

const DATA_CONTAINER = document.querySelector("#data-container");

const toggleLoader = () => {
  const loaderHTML = document.querySelector("#loader");
  loaderHTML.toggleAttribute("hidden");
};

const getAllTodos = () => {
  toggleLoader();
  result = fetch(TODOS_URL, { method: "GET" });

  // console.log(result);

  result
    .then((response) => {
      if (!response.ok) throw new Error("Ошибка запроса");
      return response.json();
    })
    .then(function (todos) {
      todos.forEach((todo) => {
        const todoItem = createTodosElement(todo);
        DATA_CONTAINER.append(todoItem);
      });
    })
    .catch((error) => {
      console.error(error);
    })
    .finally(() => {
      toggleLoader();
    });
};

getAllTodos();


