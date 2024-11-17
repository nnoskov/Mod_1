// const TODOS_URL = 'https://jsonplaceholder.typicode.com/todos';
// const getTodosByIds = (ids) => {
//   const requests = ids.map((id) => fetch(`${TODOS_URL}/${id}`));
//   Promise.all(requests)
//     .then((responses) => {
//       const dataResults = responses.map((data) => data.json());
//       return Promise.all(dataResults)
//     })
//     .then((allTasks) => {
//       console.log(allTasks);
//     })
//     .catch((error) => {
//       console.log(error);
//     })
// }
// getTodosByIds([43, 21, 55, 100, 10]);

const TODOS_URL = "https://jsonplaceholder.typicode.com/todos";

const getTodosByIds = async (ids) => {
  try {
    const requests = await Promise.all(ids.map((id) => fetch(`${TODOS_URL}/${id}`)));
    const dataResult = await Promise.all(requests.map((req) => req.json()));
    console.log(dataResult);
  } catch (err) {
    console.log(err);
  }
};
getTodosByIds([43, 21, 55, 100, 10]);

