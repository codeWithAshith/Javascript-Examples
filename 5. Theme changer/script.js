const switchGray = document.getElementById("greyBtn");
const switchWhite = document.getElementById("whiteBtn");
const switchBlue = document.getElementById("blueBtn");
const switchYellow = document.getElementById("yellowBtn");

const body = document.getElementsByTagName("body")[0];

console.log(body);
const switchColor = (color) => {
  switch (color) {
    case "g":
      body.style.backgroundColor = "grey";
      body.style.color = "white";
      break;
    case "w":
      body.style.backgroundColor = "white";
      body.style.color = "black";
      break;
    case "b":
      body.style.backgroundColor = "blue";
      body.style.color = "white";
      break;
    case "y":
      body.style.backgroundColor = "yellow";
      body.style.color = "white";
      break;
    default:
      break;
  }
};
