const goodInfo = {
    id: 1,
    price: 90,
    currency: '$',
    name: 'shoes',
};

//console.log("goodInfo", goodInfo)

// for in - Для объектов
// for of - Для массивов

// for (const key in goodInfo) {
//     //console.log('key', key);
//     const value = goodInfo[key];
//     console.log("value", value);
// }
// Устаревший метод

// Возращает массив ключей Object.keys()
console.log(Object.keys(goodInfo));

// Возвращает массив значений Object.values()
console.log(Object.values(goodInfo));

// Возвращает и кючи и значения
console.log(Object.entries(goodInfo));

Object.entries(goodInfo).forEach(([key, value])=>console.log(`key:${key} value:${value}`));