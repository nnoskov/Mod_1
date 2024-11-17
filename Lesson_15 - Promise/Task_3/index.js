DATA_CONTAINER = document.querySelector("#data-container");
API_URL = "https://api.slingacademy.com/v1/sample-data/photos";
LOADER = document.querySelector("#loader");

function createElement({ element = "div", ...rest }) {
  let newElement = document.createElement(element);
  Object.entries(rest).forEach(([key, value]) => {
    if (key === "dataset") {
      Object.keys(value).forEach((key) => {
        newElement.dataset[key] = value[key];
      });
    } else newElement[key] = value;
  });
  return newElement;
}

function toggleLoader() {
  LOADER.toggleAttribute("hidden");
}

function renderPhotoItem(itemData) {
  const ITEM_CN = "photo-item";
  const li = createElement({
    element: "li",
    className: ITEM_CN,
  });
  const img = createElement({
    element: "img",
    className: `${ITEM_CN}__image`,
    src: itemData.photo.url,
  });
  const h3 = createElement({
    element: "h3",
    className: `${ITEM_CN}__title`,
    textContent: itemData.photo.title,
  });

  li.append(img);
  li.append(h3);
  return li;
}

function getFastestLoadedPhoto(ids) {
  toggleLoader();
  Promise.race(
    ids.map((reqId) => fetch(`${API_URL}/${reqId}`, { method: "GET" }))
  )
    .then((resp) => resp.json())
    .then((respData) => {
      DATA_CONTAINER.append(renderPhotoItem(respData));
    })
    .catch((err) => console.error(err))
    .finally(toggleLoader);
}

getFastestLoadedPhoto([60, 12, 55]);
