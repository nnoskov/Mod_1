const USERS_URL = "https://jsonplaceholder.typicode.com/users";
const DATA_CONTAINER = document.querySelector("#data-container");
const LOADER = document.querySelector("#loader");

function createUserElement(user) {
  const liUserElement = document.createElement("li");
  const aUserElement = document.createElement("a");
  aUserElement.href = `https://www.${user.website}`;
  aUserElement.innerText = user.name;
  liUserElement.id = user.id;
  liUserElement.append(aUserElement);
  return liUserElement;
}

function toggleLoader() {
  LOADER.toggleAttribute("hidden");
}

function getAllUsers() {
  toggleLoader();
  const result = fetch(USERS_URL, { method: "GET" });

  result
    .then((response) => {
        console.log(response);
      if (!response.ok) throw new Error("Request error");
      return response.json();
    })
    .then(function (users) {
      users.forEach((user) => {
        DATA_CONTAINER.append(createUserElement(user));
      });
    })
    .catch((error) => console.error(error))
    .finally(toggleLoader);
}

getAllUsers();
