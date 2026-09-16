const url = "https://jsonplaceholder.typicode.com/todos";

const resultPromise = axios.get(url);

resultPromise
  .then(function (result) {
    console.log(result.data);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(function () {
    console.log("Axios called");
  });
