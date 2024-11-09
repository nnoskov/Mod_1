const options = [
  { value: 1, text: "JavaScript" },
  { value: 2, text: "NodeJS" },
  { value: 3, text: "ReactJS" },
  { value: 4, text: "HTML" },
  { value: 5, text: "CSS" },
];

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

class CustomSelect {
  #id;
  #option;
  #COMMON_CN = "select-dropdown";
  #currentSelectedOption;

  constructor(id = "123", option) {
    this.#id = id;
    this.#option = option;
    this.currentSelectedOption = null;
  }

  get selectedValue() {
    return this.currentSelectedOption;
  }

  #currentSelection(selectedValue) {
    return this.#option.find((option) => option.value == selectedValue);
  }

  #updateButtonText(button, text) {
    button.textContent = text;
  }

  #showList(ul) {
    ul.classList.add("active");
  }

  #updateListState(ul, target) {
    // update state
    this.#currentSelectedOption = target.dataset.value;
    this.currentSelectedOption = this.#currentSelection(
      this.#currentSelectedOption
    );
    // update views
    ul.querySelectorAll(".select-dropdown__list-item").forEach((li) =>
      li.classList.remove("selected")
    );
    target.classList.add("selected");
    ul.classList.remove("active");
  }

  render(container) {
    const SELECT_DD = createElement({
      element: "div",
      className: `${this.#COMMON_CN} ${this.#COMMON_CN}--${this.#id}`,
    });
    const sddButton = createElement({
      element: "button",
      className: `${this.#COMMON_CN}__button ${this.#COMMON_CN}__button--${
        this.#id
      }`,
    });
    const sddSpan = createElement({
      element: "span",
      className: `${this.#COMMON_CN}__text ${this.#COMMON_CN}__text--${
        this.#id
      }`,
      textContent: "Выберите элемент",
    });
    const sddList = createElement({
      element: "ul",
      className: `${this.#COMMON_CN}__list ${this.#COMMON_CN}__list--${
        this.#id
      }`,
    });

    this.#option.forEach((li) => {
      sddList.append(
        createElement({
          element: "li",
          className: `${this.#COMMON_CN}__list-item`,
          dataset: { value: `${li.value}` },
          textContent: `${li.text}`,
        })
      );
    });

    sddButton.append(sddSpan);
    SELECT_DD.append(sddButton);
    SELECT_DD.append(sddList);
    container.append(SELECT_DD);

    SELECT_DD.addEventListener("click", (event) => {
      const { target } = event;
      if (target.tagName === "SPAN" || target.tagName === "BUTTON")
        this.#showList(sddList);
      if (target.tagName === "LI") {
        this.#updateListState(sddList, target);
        this.#updateButtonText(sddButton, target.textContent);
      }
    });
  }
}

const customSelect = new CustomSelect("123", options);
const mainContainer = document.querySelector("#container");
customSelect.render(mainContainer);

function getValues() {
  console.log(customSelect.selectedValue);
}

const intervalId = setInterval(getValues, 1000);
