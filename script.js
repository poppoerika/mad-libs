var btn = document.getElementById("btn");
var onButtonClick = function() {
	var story = document.getElementById("story");
	var noun = document.getElementById("noun").value;
	var verb = document.getElementById("verb").value;
	var person = document.getElementById("person").value;
	story.innerHTML = noun + " " + verb + " " + person + ".";
}
btn.addEventListener("click", onButtonClick);