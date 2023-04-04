function checkNumber() {
  var input = document.getElementById("input").value;

  if (input % 2 === 0) {
    document.getElementById("result").innerHTML = input + " is even!";

  } else {
    document.getElementById("result").innerHTML = input + " is odd!";
  }
  var ageInMonths = 12; // Example age in months

if (input >= 6) {
    console.log("You are eligible to vote");
} else {
    console.log("Sorry, you are disqualified");
}
}
