let submit = document.getElementById("submit");


submit.addEventListener("click", (event) => {
  let height = document.getElementById("height").value;
  let weight = document.getElementById("weight").value;

  height = parseFloat(height/100);
  let bmi = weight / (height * height);
  bmi = bmi.toFixed(1);

  document.getElementById("result").innerHTML = `Your BMI is ${bmi}`;
});
