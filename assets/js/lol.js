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
	player = playerName;
	console.log(player);
}

function ajax() {
	var queryURL =
		"https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/" +
		player +
		"?api_key=RGAPI-b6d347df-a826-41c6-9f09-00747a104df9";
	$.ajax({
		url: queryURL,
		method: "GET"
	}).then(function(response) {
		console.log(response);
	});
	console.log(queryURL);
}
