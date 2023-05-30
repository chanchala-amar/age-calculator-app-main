var intervalToDuration = require("date-fns/intervalToDuration");

//const button = document.querySelector("button");
var showvalues = function () {
  var errorMessages = [];
  var days = parseInt(document.getElementById("days").value);
  var months = parseInt(document.getElementById("months").value);
  var years = parseInt(document.getElementById("years").value);

  //leap year check
  var enteredDate = new Date(years, months, days);
  var today = new Date();
  var duration = intervalToDuration({ start: enteredDate, end: today });

  //console.log(enteredDate);
  if (
    days !== enteredDate.getDate() ||
    months !== enteredDate.getMonth() ||
    years !== enteredDate.getFullYear()
  ) {
    errorMessages[0] = "Must be a valid date";
  }
  if (years > today.getFullYear()) {
    errorMessages[2] = "Must be in the past";
  }
  if (months > 12 || months < 1) {
    errorMessages[1] = "Must be a valid month";
  }
  if (1 > days > 31) {
    errorMessages[0] = "Must be a valid day";
  }

  const labels = document.querySelectorAll(".label");
  const errorDisplay = document.querySelectorAll(".errmsg");
  console.log(errorDisplay.length);
  if (errorMessages.length > 0) {
    labels.forEach((elem) => elem.classList.add("error"));
    for (let i = 0; i < errorMessages.length; i++) {
      if (errorMessages[i]) {
        errorDisplay[i].innerHTML = errorMessages[i];
        console.log(i, errorDisplay[i]);
      }
    }
  } else {
    //if there was a previous error, clear it
    labels.forEach((elem) => elem.classList.remove("error"));
    errorDisplay.forEach((errorMsg) => (errorMsg.innerHTML = ""));

    //show the calculated age
    let results = document.getElementsByClassName("purple-text");
    results[0].innerHTML = duration.years;
    results[1].innerHTML = duration.months;
    results[2].innerHTML = duration.days;
  }
};

const button = document.getElementById("calc");
console.log(button);

button.addEventListener("click", showvalues);
