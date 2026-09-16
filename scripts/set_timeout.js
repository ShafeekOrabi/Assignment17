const paragraph = document.getElementById("message");
const stopButton = document.getElementById("stop");

const timeout = setTimeout(function () {
  paragraph.style.fontSize = "1.5rem";
}, 3000);

stopButton.onclick = function () {
  clearTimeout(timeout);
  console.log(paragraph.style.fontSize);
};
