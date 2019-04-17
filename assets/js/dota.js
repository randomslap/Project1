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
		"https://api.steampowered.com/ISteamUser/ResolveVanityURL/v0001/?key=7D56B7CA02EB88A0A266FB4E5F61385B&vanityurl=" +
		player;

	$.ajax({
		url: queryURL,
		method: "GET",
		headers: {
			"Access-Control-Allow-Origin": "*",
			"Access-Control-Allow-Methods": "GET",
			"Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token"
		},
		dataType: "jsonp",
		crossDomain: true
	}).then(function(response) {
		console.log(response);
	});
}
