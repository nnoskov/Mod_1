import "./index.css";
//import { App as AppComponent } from "../src/modules/app";
//import {App} from '../src/modules/app';
import App from "./src/modules/app"; // стандартный импорт default

// если у нас default export то можно выбрать любое имя, 
//потому что default может быть только 1
//import AppDefault from "./modules/app";
const app = new App();
app.run();

console.log("__work__");
