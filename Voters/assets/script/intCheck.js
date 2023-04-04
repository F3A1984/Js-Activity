function checkInteger() {
    var num = parseInt(document.getElementById("numInput").value);
    if (isNaN(num)) {
      document.getElementById("result").innerHTML = "Invalid input!";
    } else if (num > 0) {
      document.getElementById("result").innerHTML = "Positive integer!";
    } else if (num < 0) {
      document.getElementById("result").innerHTML = "Negative integer!";
    } else {
      document.getElementById("result").innerHTML = "Zero!";
    }
  }