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

function getUsersByIds(users) {
  toggleLoader();
  Promise.all(
    users.map((user) => fetch(`${USERS_URL}/${user}`, { method: "GET" }))
  )
    .then((responses) => {
      const respData = responses.map((resp) => {
        if (!resp.ok) throw new Error(`Bad response ${resp.url}`); 
        return resp.json()});
      return Promise.all(respData);
    })
    .then((users) => {
      users.forEach((user) => {
        DATA_CONTAINER.append(createUserElement(user));
      });
    })
    .catch((err) => {
      console.error(`getUsersByIds: ${err}`);
    })
    .finally(toggleLoader);
}

getUsersByIds([5, 6, 2, 1]);
