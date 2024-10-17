const coffe = ["Latte", "Cappuccino", "Americano"];

const coffeName = prompt("Поиск кофе по названию:").toLowerCase();

const findedCoffeIndex = coffe.findIndex((coffeItem) => {
  return coffeItem.toLowerCase() === coffeName;
});

if (findedCoffeIndex !== -1) {
  alert(
    `Держите ваш любимый кофе, ${coffe[findedCoffeIndex]}. Он ${findedCoffeIndex + 1}-ый по полуряности в нашей кофейне.`
  );
} else {
  alert("К сожалению, такого вида кофе нет в наличии.");
}
