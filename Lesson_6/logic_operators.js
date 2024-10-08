const userAge = 16;

if (userAge > 5 && userAge <=18 ) console.log('Пользователь ходит в школу');



// оператор объединения с null ??

// для || false это false, null, NaN, undefined, '', 0
console.log(false || 'Hello World');

// для ?? false это null, undefined
console.log('' ?? 'Hello World');
