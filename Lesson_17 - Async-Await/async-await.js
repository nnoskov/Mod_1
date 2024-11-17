const USERS_URL = "https://jsonplaceholder.typicode.com/users";
const TODOS_URL = "https://jsonplaceholder.typicode.com/todos";

const getTodosWithUserData = async () => {
  try {
    const response = await fetch(USERS_URL);
    console.log(response);
    const users = await response.json();
    const firstUserId = users[0]?.id;
    const totosResponse = await fetch(`${TODOS_URL}?userId=${firstUserId}`);
    const userTodos = await totosResponse.json();
    console.log(userTodos);
  } catch (err) {
    console.log(err);
  } finally {
    console.log("finally");
  }
};

const promise = getTodosWithUserData();
