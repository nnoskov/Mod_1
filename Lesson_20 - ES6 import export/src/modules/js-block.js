import JS_IMAGE from "../../assets/javaScript.png";
export class JSBlock {
    #container
    constructor() {
    this.#container = document.createElement("div");
    this.#container.className = "js-block";
  }

  render() {
    const mainTitle = document.createElement("h1");
    mainTitle.className = "main-title";
    mainTitle.textContent = "JavaScript";

    const JSImageHTML = document.createElement("img");
    JSImageHTML.className = "js-image";
    JSImageHTML.src = JS_IMAGE;

    const foundedText = document.createElement("p");
    foundedText.className = "founded-text";
    foundedText.textContent = "С момента создания JavaScript прошло";

    this.#container.append(mainTitle, JSImageHTML, foundedText);
    
    return this.#container;
  }
}
