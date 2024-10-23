const developerInfo = {
    age: 25,
    experience: 3,
    name: 'Evgeny',
};

const developerExtraInfo = {
    height: 180,
    isJunior: false,
    name: 'Nikolay',
};

// 1 ... объединение через спред-оператор

const developer = {
    ...developerInfo,
    ...developerExtraInfo,
    name: 'Houpe',
};

// 2 Object.assign

const developer2 = Object.assign(developerInfo, developerExtraInfo);

console.log(developerInfo);


// Опциональная цепочка ?. - см index.js

