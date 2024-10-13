const getDivisorsCount = (number) => {
  if (typeof number !== "number") return NaN;

  if (!Number.isInteger(number) || number <= 0)
    console.log(`${number} должен быть целым числом и больше нуля!`);

  divCount = 0;
  divDescription = 'Делители - ';
  for (let div = 1; div <= number; div++) {
    if (number % div === 0) 
    {
      divCount++;
      divDescription += String(div) + ' ';
    }
      
  }
  console.log(divDescription);
  return divCount;
};

console.log(getDivisorsCount(12));
