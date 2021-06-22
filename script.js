"use strict";
let clearField = function clearField() {
  document.getElementById("input").value = "";
};

document.addEventListener(`keydown`, function (e) {
  if (e.key === `Enter`) {
    var x = document.getElementById("input");
    var defaultVal = x.defaultValue;
    var currentVal = x.value;

    defaultVal = currentVal;
  }
  console.log(defaultVal);
});
console.log(document.getElementById("input").defaultValue);
