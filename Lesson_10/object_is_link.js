const setName = (entity, value) => {
    if (typeof entity === "object") {
        entity.name = value;
    } else {
        entity = value;
    }
};

const developer = {
    name: 'Nikolay',
}

const developerName = 'Nikolay';

setName(developer, 'Vasya');
setName(developerName, 'Vasy uncle');

// console.log("developer",developer);
// console.log('developerName', developerName);

const entity = {};
const entityCopy = entity;

console.log(entity === entityCopy);

//console.log({} === {});

const x = 10;
const updateX = arg => arg = 20;
updateX(x);

console.log(x, 'update(x)', updateX(30)); // 10


const obj = { x: 10 };
const updateObjX = arg => arg.x = 20;
updateObjX(obj);

console.log(obj.x); // 20