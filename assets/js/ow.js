var playerName = "";
var playerTag = "";
var player = "";

$(document).ready(function() {
	$("#player-add").on("click", function(event) {
		event.preventDefault();
		getPlayer();
		ajax();
	});
});

function getPlayer() {
	playerName = $("#playernameinput")
		.val()
		.trim();
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
		const data = JSON.parse(response);
		console.log(data);
		$("#playerUsername").text("Name: " + data.name);
		$("#gamesWon").text("Total Wins: " + data.gamesWon);
		$("#endorsementLevel").text("Endorsement: " + data.endorsement);
		$("#playerLevel").text("Level: " + data.level);
		$("#playerPrestige").text("Prestige: " + data.prestige);
		$("#playerRank").text("Rank: " + data.rating);
		$("#rankImg").attr("src", data.ratingIcon);
		$("#playerImg").attr("src", data.icon);
		$("#compMedal").text(data.competitiveStats.awards.medals);
		$("#compBronze").text(data.competitiveStats.awards.medalsBronze);
		$("#compSilver").text(data.competitiveStats.awards.medalsSilver);
		$("#compGold").text(data.competitiveStats.awards.medalsGold);
		$("#compPlayed").text(data.competitiveStats.games.played);
		$("#compWon").text(data.competitiveStats.games.won);
		$("#qckMedal").text(data.quickPlayStats.awards.medals);
		$("#qckBronze").text(data.quickPlayStats.awards.medalsBronze);
		$("#qckSilver").text(data.quickPlayStats.awards.medalsSilver);
		$("#qckGold").text(data.quickPlayStats.awards.medalsGold);
		$("#qckPlayed").text(data.quickPlayStats.games.played);
		$("#qckWon").text(data.quickPlayStats.games.won);
	});
	console.log(queryURL);
}
