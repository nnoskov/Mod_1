// const POSTS_URL = "https://jsonplaceholder.typicode.com/posts";
// let isLoading = false;
// const createNewPost = () => {
//   isLoading = true;
//   fetch(POSTS_URL, {
//     method: "POST"
//   })
//     .then((response) => response.json())
//     .then((result) => {
//       console.log("result", result);
//     })
//     .catch((error) => {
//       console.log("error", error);
//     })
//     .finally(() => {
//       isLoading = false;
//     });
// };
// createNewPost();

const POSTS_URL = "https://jsonplaceholder.typicode.com/posts";
let isLoading = false;

const createNewPost = async () => {
  try {
    isLoading = true;
    response = await fetch(POSTS_URL, { method: "POST" });
    console.log('result', await response.json());
  } catch (err) {
    console.log("error", err);
  } finally {
    isLoading = false;
  }
};

createNewPost();
