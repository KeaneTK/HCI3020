function loadNews() {
	if (sessionStorage.newsJsonStorage == undefined) {
		sessionStorage.newsJsonStorage = newsJson;
	} else {
		newsJson = sessionStorage.newsJsonStorage;
	}
	var newsItem = JSON.parse(newsJson);
	var i = 0;
	var newsHtml = "";
	for (i = newsItem.news.length - 1; i >= 0; i--){
		newsHtml += "<h4>" + newsItem.news[i].title + "</h4>";
		newsHtml += "<p>" + newsItem.news[i].text + "</p><br/>";
	}
	var div = document.getElementById("newsPane").innerHTML = newsHtml;
	
	if (sessionStorage.exerciseJsonStorage == undefined) {
		sessionStorage.exerciseJsonStorage = exerciseJson;
	} else {
		exerciseJson = sessionStorage.exerciseJsonStorage;
	}
	var exerciseItem = JSON.parse(exerciseJson);
	var exerciseHtml = "<h4>" + exerciseItem.exercise.title + "</h4><p>" + exerciseItem.exercise.text + "</p><br/>";
	document.getElementById("exercisePane").innerHTML = exerciseHtml;
}
window.onload = loadNews;

var newsJson = '{"news":[{"title":"New Website!", "text":"This is our new website.  Hope it works."},{"title":"Continuing Work", "text":"We are continuing our work here.  Look at the functional Twitter feed.  Facebook doesn\'t work with local pages though."}]}';
var exerciseJson = '{"exercise":{"title":"Squats", "text":"15 reps, 2 sets"}}';