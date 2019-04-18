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
		"http://api.steampowered.com/ISteamUser/ResolveVanityURL/v0001/?key=7D56B7CA02EB88A0A266FB4E5F61385B&vanityurl=" +
		player;

	$.ajax({
		url: queryURL,
		method: "GET",
		dataType: "json"
	}).then(function(response) {
		console.log(response);
	});
}
