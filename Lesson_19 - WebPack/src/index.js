import { sum } from "./utils.js";
import "./style.css";
import reactLogo from "../assets/reactLogo.svg";
import javaScriptImage from "../assets/javaScript.png";

const BODY = document.querySelector('body');

const array = [1, 3, 5].map((i) => i + 1);
function hello(...args) {
  console.log("hello webPack ", args[0], args[1]);
}

hello(sum(1, 2), array);

const imgReact = document.createElement("img");
imgReact.src = reactLogo;
const imgJavaScript = document.createElement('img');
imgJavaScript.src = javaScriptImage;


BODY.append(imgReact);
BODY.append(imgJavaScript);
