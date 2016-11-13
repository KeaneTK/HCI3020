function initUser() {
	if (sessionStorage.userJsonStorage == undefined) {
		sessionStorage.userJsonStorage = userJson;
	} else {
		userJson = sessionStorage.userJsonStorage;
	}
	var userItems = JSON.parse(userJson);
	var userItem;
	userItems.forEach(function(u) {
		if (u.name === sessionStorage.name) {
			userItem = u;
		}
	});
	var htmlStr = "";
	
	document.getElementById("imagePane").src = userItem.picture;
	
	htmlStr = "<p><strong>Gym Name: </strong>" + userItem.gymName + "</p>";
	var t = document.getElementById("gymNamePane");
	t.innerHTML = htmlStr;
	
	htmlStr = "<p><strong>Name: </strong>" + userItem.name + "</p>";
	document.getElementById("namePane").innerHTML = htmlStr;
	
	htmlStr = "<p><strong>Weight: </strong>" + userItem.weight + "</p>";
	document.getElementById("weightPane").innerHTML = htmlStr;
	
	htmlStr = "<p><strong>Height: </strong>" + userItem.height + "</p>";
	document.getElementById("heightPane").innerHTML = htmlStr;
	
	htmlStr = "";
	userItem.comments.forEach(function(c) {
		htmlStr += "<p>" + c.comment + "<em class=\"pull-right comment-name\">" + c.name + "</em></p><br/>";
	});
	document.getElementById("commentPane").innerHTML = htmlStr;
	
	htmlStr = "";
	userItem.friendNames.forEach(function(f) {
		htmlStr += "<button style='width:100%; text-align: center; margin-bottom: 5px;' onclick='followFriend(\"" + f + "\");'value='" + f + "'>" + f + "</button><br/>";
	});	
	document.getElementById("friendPane").innerHTML = htmlStr;	
}

function followFriend(name) {
	sessionStorage.friend = name;
	window.location.href = "Friend.html";
}

function saveComment() {
	var commentStr = document.getElementById("commentInput").value;
	if (sessionStorage.userJsonStorage == undefined) {
		sessionStorage.userJsonStorage = userJson;
	} else {
		userJson = sessionStorage.userJsonStorage;
	}
	var userItems = JSON.parse(userJson);
	
	userItems.get(sessionStorage.name).comments.push({"name": sessionStorage.name, "comment": commentStr});
	sessionStorage.userJsonStorage = JSON.stringify(userItems);
	initUser();
}

window.onload = initUser;

var userJson = '[{"name":"Keane", "gymName":"UofM Gym", "height":"5\'10", "weight":"140", "picture":"http://i.imgur.com/luOYy5B.jpg", "friendNames":["Reagan", "Steven"], "comments":[{"comment":"Test", "name":"Keane"}, {"comment":"Test 2", "name":"Kendel"}]},{"name":"Coach", "gymName":"His Gym", "height":"6\'4", "weight":"230", "picture":"https://upload.wikimedia.org/wikipedia/commons/9/9b/Keeping_the_ball_in_their_court,_Marine_coaches_teach_kids_sports,_values_121103-M-OB827-003.jpg", "friendNames":["Reagan", "Steven", "Kendel", "Keane"], "comments":[{"comment":"Test C", "name":"Steven"}, {"comment":"Test C 2", "name":"Reagan"}]},{"name":"Kendel", "gymName":"UofM Gym", "height":"5\'10", "weight":"140", "picture":"http://i.imgur.com/luOYy5B.jpg", "friendNames":["Reagan", "Steven"], "comments":[{"comment":"Test", "name":"Keane"}, {"comment":"Test 2", "name":"Kendel"}]},{"name":"Reagan", "gymName":"UofM Gym", "height":"5\'10", "weight":"140", "picture":"http://i.imgur.com/luOYy5B.jpg", "friendNames":["Reagan", "Steven"], "comments":[{"comment":"Test", "name":"Keane"}, {"comment":"Test 2", "name":"Kendel"}]},{"name":"Steven", "gymName":"UofM Gym", "height":"5\'10", "weight":"140", "picture":"http://i.imgur.com/luOYy5B.jpg", "friendNames":["Reagan", "Steven"], "comments":[{"comment":"Test", "name":"Keane"}, {"comment":"Test 2", "name":"Kendel"}]}]';

Array.prototype.get = function(name) {
	for (var i = 0, len = this.length; i < len; i++) {
		if (typeof this[i] != "object") continue;
		if (this[i].name === name) return this[i];
	}
};


