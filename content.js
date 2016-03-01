setTimeout(function () {
	console.log("Extension Running");
	var videoImages = document.getElementsByClassName("_3xn1");
	for (var i = 0; i < videoImages.length; i++) {
		var ID = getYoutubeID2(videoImages[i].outerHTML);
		videoImages[i].style = "";
		videoImages[i].innerHTML = '<div class="videoWrapper"><iframe width="560" height="315" src="https://www.youtube.com/embed/' + ID + '"frameborder="0" allowfullscreen></iframe></div>';
		}
}, 1000);

function isAYoutubeURL(text) {
	return (text.indexOf("youtube.com/watch") > -1)
}


function getYoutubeID(text) {
	var lst = [];
	lst = text.split("v=");
	return lst[1].split('"')[0];
}

function getYoutubeID2(text) {
	var lst = [];
	lst = text.split(".ytimg.com%2Fvi%2F")
	return lst[1].split('%2F')[0];
}