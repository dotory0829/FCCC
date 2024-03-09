// 1번
// const spanEl = document.getElementById("value");
// let value = Number(spanEl.innerText);

// const btns = document.querySelectorAll(".btn");
// const [decrease, reset, increase] = btns;

// decrease.addEventListener("click", () => {
//   spanEl.innerText = value -= 1;
// });

// reset.addEventListener("click", () => {
//   value = 0;
//   spanEl.innerText = value;
// });

// increase.addEventListener("click", () => {
//   spanEl.innerText = value += 1;
// });

// 2번
// const valueEl = document.getElementById("value");
// let value = Number(valueEl.innerText);
// const container = document.querySelector(".btn-container");

// function updateValue(newValue)
//   value = newValue;
//   valueEl.innerText = value;
// }
// container.addEventListener("click", (event) => {
//   const target = event.target;

//   if (target.classList.contains("decrease")) {
//     updateValue(value - 1);
//   } else if (target.classList.contains("reset")) {
//     updateValue(0);
//   } else if (target.classList.contains("increase")) {
//     updateValue(value + 1);
//   }
// });

// 3번
const valueEl = document.getElementById("value");
let value = Number(valueEl.innerText);
const container = document.querySelectorAll(".btn-container");

const numMapping = {
  red: (key) => key < 0,
  black: (key) => key === 0,
  blue: (key) => key > 0,
};

const compareSizeColor = (key) => {
  for (const color in numMapping) {
    if (numMapping[color](key)) {
      return color;
    }
  }
};

const updateFn = (number) => {
  valueEl.style.color = compareSizeColor(number);
  value = number;
  valueEl.innerText = value;
};

const actionMapping = {
  decrease: () => updateFn(value - 1),
  reset: () => updateFn(0),
  increase: () => updateFn(value + 1),
};

container.forEach((item) => {
  item.addEventListener("click", (e) => {
    const action = e.target.classList[1];
    action && actionMapping[action]();
  });
});
