const delay = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

url = "https://jsonplaceholder.typicode.com/comments";
// function getComments() {
//   return delay(500)
//     .then(() => fetch(url))
//     .then((response) => response.json());
// }

// getComments()
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((e) => {
//     console.error(e);
//   });

async function fetchAsyncComments() {
  try {
    await delay(2000);
    const data = await fetch(url);
    console.log(await data.json());
  } catch (e) {
    console.error(e);
  }
}

fetchAsyncComments();
