
setTimeout(function() {
	//updateToIframes();
	addButton();
},1000);


function updateToIframes() {
	var videoImages = document.getElementsByClassName("_3xn1");
	for (var i = 0; i < videoImages.length; i++) {
		if (!isIframed(videoImages[i].innerHTML)) {
			var ID = getYoutubeID2(videoImages[i].outerHTML);
			videoImages[i].style = "";
			videoImages[i].innerHTML = '<div class="videoWrapper"><iframe width="560" height="315" src="https://www.youtube.com/embed/' + ID + '"frameborder="0" allowfullscreen></iframe></div>';

		}
	}
}

function addButton() {
	var ul = document.getElementsByClassName("_4rv4")[0];
	var li = document.createElement("li");
	var button = document.createElement("a");
	ul.insertBefore(li, ul.children[0]);
	li.appendChild(button,0);
	button.innerHTML = "BTN";
	button.className = "4rv4 a youtubeBtn";
	button.onclick = updateToIframes;
}


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

function isIframed(text) {
	return (text.indexOf("iframe") > -1)
}
//Div with chat = class="__i_"