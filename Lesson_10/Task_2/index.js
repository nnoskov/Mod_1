const ordersArr = [4, 2, 1, 3];
const people = [
   { id: 1, name: "Максим" },
   { id: 2, name: "Николай" },
   { id: 3, name: "Ангелина" },
   { id: 4, name: "Виталий" },
];

function giveTalonsInOrder(people, ordersArr) {
    
    const peopleMap = people.reduce((acc, people) => {
        acc[people.id] = people;        
        return acc;
    },{});
    return ordersArr.map((order) => {
        return peopleMap[order];
    });
}

const result = giveTalonsInOrder(people, ordersArr);
console.log('result', result);