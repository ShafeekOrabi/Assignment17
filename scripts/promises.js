function getDataFromServer(condition) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (condition) {
        resolve("Done");
      } else {
        reject("Error");
      }
    }, 2000);
  });
}

const promise = getDataFromServer(true);

promise
  .then(function (result) {
    console.log(result);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(function () {
    console.log("promise called");
  });
