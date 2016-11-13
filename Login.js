function loginClick() {
	var username = document.getElementById("userName").value;
	var password = document.getElementById("password").value;
	
	if (names.includes(username)) {
		var index = names.indexOf(username);
		if (pass[index] == password) {
			sessionStorage.name = username;
			if(username === "Coach" && password === "gym") {
				window.location.href = "HCI_Group24_Edit.html";
			} else {
				window.location.href = "HCI_Group24.html";
			}
		} else {
			document.getElementsByClassName("alert-danger")[0].style.display = 'block';
			document.getElementById("password").value = "";
		}
	} else {
		document.getElementsByClassName("alert-danger")[0].style.display = 'block';
		document.getElementById("password").value = "";
	}
}

var names = ["Keane", "Reagan", "Steven", "Kendel", "Coach"];
var pass = ["hciprojectt", "hciprojectr", "hciprojects", "hciprojectk", "gym"];