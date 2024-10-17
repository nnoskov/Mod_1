const coffees = ["Latte", "Cappuccino", "Americano"];
const prices = [1.5, 1, 2];

const updatedPrices = prices.map((price) => {
  return price + 0.5;
});

coffees.forEach((coffeItem, coffeIndex)=>{
  alert(`Кофе ${coffeItem} сейчас стоит ${updatedPrices[coffeIndex]} евро.`);
});
