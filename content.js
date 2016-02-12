setTimeout(function () {
	console.log("Running2");
	var chatElements = document.getElementsByClassName("_5yl5");
	for (var i = 0; i < chatElements.length; i++) {
		var message  = chatElements[i].children[0]
		var messageSibling = message.parentNode.parentNode.parentNode.children[1];
		if (isAYoutubeURL(message.innerText)) {
			var ID = getYoutubeID(message.innerText);
			messageSibling.innerHTML = '<div class="videoWrapper"><iframe width="560" height="315" src="https://www.youtube.com/embed/' + ID + '"frameborder="0" allowfullscreen></iframe></div>';
		}
	};
}, 1000);

function isAYoutubeURL(text) {
	return (text.indexOf("youtube.com/watch") > -1)
}


function getYoutubeID(text) {
	var lst = [];
	lst = text.split("v=");
	return lst[1].split('"')[0];
}