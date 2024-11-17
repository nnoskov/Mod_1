const USERS_URL = "https://jsonplaceholder.typicode.com/users";
const TODOS_URL = "https://jsonplaceholder.typicode.com/todos";

fetch(USERS_URL, { method: "GET" })
  .then((response) => {
    return response.json();
  })
  .then((users) => {
    console.log("users", users);
    const firstUserId = users[0]?.id;
    fetch(`${TODOS_URL}?userId=${firstUserId}`)
      .then((response) => response.json())
      .then((todos) => {
        console.log(todos);
        // при большой вложенности сложность кода увеличивается =>>
        fetch("url")
          .then(() => {})
          .catch(() => {});
      })
      .catch((err) => {
        console.log(err);
      });
  })
  .catch((err) => {
    console.log(err);
  });

// проблема растет в право.
