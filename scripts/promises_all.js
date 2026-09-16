function getPromiseOne() {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve("Promise 1 Done");
    }, 1000);
  });
}

function getPromiseTwo() {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve("Promise 2 Done");
    }, 2000);
  });
}

function getPromiseThree() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      reject("Promise 3 Error");
    }, 3000);
  });
}

function getPromisesAll() {
  Promise.all([getPromiseOne(), getPromiseTwo(), getPromiseThree()])
    .then(function (result) {
      console.log(result);
    })
    .catch(function (error) {
      console.log(error);
    })
    .finally(function () {
      console.log("Promise.all called");
    });
}

function getPromisesAllSettled() {
  Promise.allSettled([getPromiseOne(), getPromiseTwo(), getPromiseThree()])
    .then(function (result) {
      console.log(result);
    })
    .catch(function (error) {
      console.log(error);
    })
    .finally(function () {
      console.log("Promise.allSettled called");
    });
}

function getPromisesRace() {
  Promise.race([getPromiseOne(), getPromiseTwo(), getPromiseThree()])
    .then(function (result) {
      console.log(result);
    })
    .catch(function (error) {
      console.log(error);
    })
    .finally(function () {
      console.log("Promise.race called");
    });
}

getPromisesAll();
getPromisesAllSettled();
getPromisesRace();
