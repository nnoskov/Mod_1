const ALBUM_URL = "https://jsonplaceholder.typicode.com/albums";
const DATA_CONTAINER = document.querySelector("#data-container");
const LOADER = document.querySelector("#loader");
const ERR_TEXT = "Произошла ошибка в получении данных об альбомах...";

function toggleLoader() {
  LOADER.toggleAttribute("hidden");
}
async function renderAlbums() {
  toggleLoader();
  const albums = await getAlbumsData();
  if (Array.isArray(albums)) {
    albums.forEach((album) => {
      const liElement = document.createElement("li");
      const aElement = document.createElement("a");
      aElement.innerText = album.title;
      liElement.append(aElement);
      DATA_CONTAINER.append(liElement);
    });
  } else {
    DATA_CONTAINER.innerText = ERR_TEXT;
  }
  toggleLoader();
}

async function getAlbumsData() {
  try {
    const resp = await fetch(ALBUM_URL);
    return await resp.json();
  } catch (err) {
    console.error(err);
  }
}

renderAlbums();
