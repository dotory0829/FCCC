// innerHTML 적용전
// const rootEl = document.getElementById("root");

// const h1El = document.createElement("h1");
// h1El.innerText = "Color Flipper";
// rootEl.append(h1El);

// const navEl = document.createElement("nav");
// rootEl.appendChild(navEl);

// const navCenterDiv = document.createElement("div");
// navCenterDiv.className = "nav-center";
// navEl.appendChild(navCenterDiv);

// const navUl = document.createElement("ul");
// navUl.classname = "nav-links";
// navCenterDiv.appendChild(navUl);

// const main = document.createElement("main");
// rootEl.appendChild(main);

// const containerDiv = document.createElement("div");
// containerDiv.className = "container";
// main.append(containerDiv);

// const h2El = document.createElement("h2");
// h2El.append("background", " ", "color: "); // append의 경우 text도 추가 가능
// // h2El.innerHTML = "background colro: ";

// // h2El.innerText = "background color:";

// const colorSpan = document.createElement("span");
// colorSpan.className = "color";
// colorSpan.innerText = "#ffffff";
// containerDiv.appendChild(h2El);

// h2El.appendChild(colorSpan);

// const buttonEl = document.createElement("button");
// buttonEl.innerText = "CLICK ME";
// buttonEl.id = "btn";
// buttonEl.classname = "btn btn-hero";
// containerDiv.appendChild(buttonEl);

// // logic
// const colorsArray = [
//   "#FFD700",
//   "#8a2be2",
//   "#ff8c00",
//   "#00008B",
//   "#f15025",
//   "#556B2F",
//   "#483D8B",
//   "#20b2aa",
//   "#98fb98",
// ];

// const getRandomNumber = () => {
//   return Math.floor(Math.random() * colorsArray.length);
// };

// buttonEl.addEventListener("click", () => {
//   const randomNumber = getRandomNumber();

//   document.body.style.backgroundColor = colorsArray[randomNumber];
//   colorSpan.innerText = colorsArray[randomNumber];
// });

// innerHTML 적용 후
const rootEl = document.getElementById("root");
rootEl.innerHTML = `
  <h1>Color Flipper</h1>
  <nav>
    <div class="nav-center">
      <ul class="nav-links"></ul>
    </div>
  </nav>
  <main>
    <div class="container">
      <h2>background color: <span class="color">#ffffff</span></h2>
      <button id="btn" class="btn btn-hero">CLICK ME</button>
    </div>
  </main>
`;

const colorsArray = [
  "#FFD700",
  "#8a2be2",
  "#ff8c00",
  "#00008B",
  "#f15025",
  "#556B2F",
  "#483D8B",
  "#20b2aa",
  "#98fb98",
];

const getRandomNumber = () => {
  return Math.floor(Math.random() * colorsArray.length);
};

const buttonEl = document.getElementById("btn");
const colorSpan = document.querySelector(".color");

buttonEl.addEventListener("click", () => {
  const randomNumber = getRandomNumber();
  document.body.style.backgroundColor = colorsArray[randomNumber];
  colorSpan.innerText = colorsArray[randomNumber];
});
