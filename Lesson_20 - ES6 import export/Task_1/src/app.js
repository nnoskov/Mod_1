import { getRandomColor } from "./utils";
export default function initApp() {
  console.log("__StartApp__");
  const BODY = document.querySelector("body");
  const btn = document.createElement("button");
  btn.className = "button";
  btn.textContent = "Изменить цвет страницы";
  btn.addEventListener("click", (event) => {
    BODY.style.backgroundColor = getRandomColor();
  });
  BODY.append(btn);
}
