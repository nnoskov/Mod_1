// setTimeout
// setInterval
// let timer = Date.now();
// console.log("Start Apps", timer);
// setTimeout(() => {
//   // const timeInCallback = Date.now();
//   // console.log('timer', timer);
//   // console.log("TimeInCallback", timeInCallback);
//   // console.log("differ", timeInCallback - timer);
//   const backendData = {
//     server: "avs",
//     port: 2000,
//     status: "idle",
//   };

//   setTimeout(() => {
//     backendData.modified = true;
//     console.log("Data recived", backendData);
//   }, 2000);
// }, 2000);

// console.log(developer);

// setInterval(() => {
//   console.log("setInterval");
// }, 1000);

// pending - ожидание
// fulfilled - успех
// rejected - с ошибкой

const developer = {
  name: "Nikolay",
  isJSDev: true,
};

// const promise = new Promise((resolve, reject) => {
//   if (developer.isJSDev) {
//     setTimeout(() => {
//       resolve(`${developer.name} является JS-разработчиком`);
//     }, 3000);
//   } else {
//     reject(`${developer.name} не является JS-разработчиком`);
//   }
// });

//console.log(promise);

// then, catch, finally
// promise
//   .then((successMessage) => {
//     console.log(successMessage);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     console.log("finally");
//   });

const promise = new Promise(function (resolve, reject) {
  setTimeout(() => {
    console.log("Preparing data...");
    const backendData = {
      server: "avs",
      port: 2000,
      status: "idle",
    };
    resolve(backendData);
  }, 2000);
});

promise.then((data) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      data.modified = true;
      resolve(data);
    }, 2000);
  })
    .catch((err) => console.error("Error", err)) // ловим ошибки
    .then((clientData) => console.log("Data recived", clientData)) // код выполняется если нет ошибок;
    .finally(console.log("Finaly: Always executed!"));
});

const sleep = (ms) => {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve();
    }, ms)
  );
};

sleep(7000).then(() => {
  console.log("After 7 sec...");
});

const myPromise = new Promise((resolve, reject) => {
  if (developer.isJSDev)
    resolve(`${developer.name}, является JS разработчиком!`);
  else reject(`${developer.name}, не является JS разработчиком!`);
});

myPromise.then((params) => {
  console.log(params);
}).catch((err) => {
    console.error(err);
}).finally(() => {
    console.log('Finally');
});
