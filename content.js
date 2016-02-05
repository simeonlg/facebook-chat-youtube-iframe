var conversationHTML;

/*Set timeout because it takes some time for facebook to open the conversations*/
$(document).ready(function(){
	setTimeout(function() {
		console.log("Running");
		$('div.conversation').each(function() {
			conversationHTML += $(this).html();
		});
		console.log(conversationHTML);
		

	}, 5000);
	
});

//TODO find a method to find all the youtube URLS and replace them with the iframe with the video
function replaceURLwithiframe (text) {

}