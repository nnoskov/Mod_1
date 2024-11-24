import "./index.css";
import javaScriptImg from "../assets/javaScript.png";

const BODY = document.querySelector('body');

const h1Text = document.createElement('h1');
h1Text.innerText = "I love JavaScript";
const imgJS = document.createElement('img');
imgJS.src = javaScriptImg;

BODY.append(h1Text);
BODY.append(imgJS);
