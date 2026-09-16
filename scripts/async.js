console.log("line 1");

setTimeout(function () {
  console.log("line 2");
}, 2000);

console.log("line 3");

// JavaScript executes line 1 first, then the setTimeout waits for 2 seconds while line 3 executes, so line 2 is executed last.
