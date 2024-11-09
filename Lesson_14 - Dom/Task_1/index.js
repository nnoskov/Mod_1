function createElementWithAttr(elType, attr, text = "") {
  const element = document.createElement(elType);
  element.innerText = text;
  for (const key in attr) {
    if (Object.prototype.hasOwnProperty.call(attr, key)) {
      element.setAttribute(key, attr[key]);
    }
  }
  return element;
}

const bodyElement = document.querySelector("body");

const formElement = document.createElement("form");
formElement.className = "create-user-form";

/**
 * input name
 */
const lblUserNameAttributes = {};

const lblUserName = createElementWithAttr(
  "label",
  lblUserNameAttributes,
  "Имя"
);

const inputNameAttributes = {
  type: "text",
  name: "userName",
  placeholder: "Введите ваше имя",
};

lblUserName.append(createElementWithAttr("input", inputNameAttributes));

formElement.append(lblUserName);

/**
 * input pass
 */

const inputPassAttributes = {
  type: "password",
  name: "password",
  placeholder: "Придумайте пароль",
};

const lblPassAttributes = {};

const lblPassword = createElementWithAttr("label", lblPassAttributes, "Пароль");

lblPassword.append(createElementWithAttr("input", inputPassAttributes));
formElement.append(lblPassword);

/**
 * button
 */
const buttonAttributes = {
  type: "submit",
};

formElement.append(
  createElementWithAttr("button", buttonAttributes, "Подтвердить")
);

bodyElement.append(formElement);
