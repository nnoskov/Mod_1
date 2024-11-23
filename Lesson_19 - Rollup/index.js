import { sum } from "./main.js";
import "./index.css";
import reactLogo from "./React_logo.svg";

const array = [1, 3, 5].map((i) => i + 1);
function hello(...args) {
  console.log("hello rollup ", args[0], args[1]);
}

hello(sum(1, 2), array);

const img = document.createElement('img');
img.src = reactLogo;

document.querySelector('body').append(img);
