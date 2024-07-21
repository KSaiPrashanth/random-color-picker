// Random Color Boxes

let boxes = document.querySelectorAll(".box");

function getRandomColor() {
  let num1 = Math.floor(Math.random() * 16).toString(16);
  let num2 = Math.floor(Math.random() * 16).toString(16);
  let num3 = Math.floor(Math.random() * 16).toString(16);
  let num4 = Math.floor(Math.random() * 16).toString(16);
  let num5 = Math.floor(Math.random() * 16).toString(16);
  let num6 = Math.floor(Math.random() * 16).toString(16);
  return `#${num1 + num2 + num3 + num4 + num5 + num6}`;
}

// static stage
Array.from(boxes).forEach((e) => {
  e.textContent = e.style.backgroundColor = getRandomColor();
});

// onClick
function changeColor() {
  Array.from(boxes).forEach((e) => {
    e.textContent = e.style.backgroundColor = getRandomColor();
  });
}
