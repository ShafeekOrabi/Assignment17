function getPromise() {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve("Done");
    }, 3000);
  });
}

async function getPromiseResult() {
  console.log("First line");

  try {
    const result = await getPromise();
    console.log(result);
  } catch (error) {
    console.log(error);
  } finally {
    console.log("Finally");
  }

  console.log("Last line");
}

getPromiseResult();

// The last line is not printed until getPromise is finished because await pauses the async function until the promise is resolved or rejected.
