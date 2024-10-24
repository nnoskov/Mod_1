// const date1 = new Date(2005, 4, 20);
// const date2 = new Date(2006, 4, 10);

// console.log('date1', date1.getTime());
// console.log('date2', date2.getTime());

// const difference = date2.getTime() - date1.getTime();
// console.log('difference', difference);


const startTime = Date.now()
for (let index = 0; index < 5000000000; index++) {
    //
}
const endTime = Date.now();

console.log(endTime - startTime);