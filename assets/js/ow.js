var playerName = "";
var playerTag = "";
var player = "";

$(document).ready(function() {
	$("#player-add").on("click", function() {
		getPlayer();
		ajax();
	});
});

function getPlayer() {
	playerName = $("#playernameinput")
		.val()
		.trim()
		.toLowerCase();
	playerTag = $("#battletaginput")
		.val()
		.trim();
	player = playerName + "-" + playerTag;
	console.log(player);
}

function ajax() {
	var queryURL = "https://ow-api.com/v1/stats/pc/us/" + player + "/profile";
	$.ajax({
		url: queryURL,
		method: "GET"
	}).then(function(response) {
		console.log(response);
	});
	console.log(queryURL);
}
