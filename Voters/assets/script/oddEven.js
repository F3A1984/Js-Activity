function checkNumber() {
	var num = parseInt(document.getElementById("numInput").value);
	if (isNaN(num)) {
		document.getElementById("result").innerHTML = "Invalid input!";
	} else if (num % 2 == 0) {
		document.getElementById("result").innerHTML = "Even number!";
	} else {
		document.getElementById("result").innerHTML = "Odd number!";
	}
}