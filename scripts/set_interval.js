const paragraph = document.getElementById("message");
const stopButton = document.getElementById("stop");

const interval = setInterval(function () {
  paragraph.style.fontSize =
    paragraph.style.fontSize === "1.5rem" ? "" : "1.5rem";
}, 3000);

stopButton.onclick = function () {
  clearInterval(interval);
  console.log(paragraph.style.fontSize);
};
