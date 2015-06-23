angular.module("batailleNaval")

.factory("GameService", ["$http", function ($http){

	"use strict";

	var apiUrl = "http://localhost:3000/games";

	return{
		version: "1.0",

	    pseudo: "JambonNinja",

		fleetSizes: [
	    	{value : 1},
	    	{value : 2},
	    	{value : 3},
	    	{value : 4},
	    	{value : 5},
	    ],
		getAllGames: function (){
			var  GameService = this;
			return $http.get(apiUrl)
			.then(function (result){
				return result.data;
			})
			.then(function (games){
				return games.filter(function (game){
					return !game.user2 || (game.user1.pseudo === GameService.pseudo || game.user2.pseudo === GameService.pseudo)
				})
			})
		},

		getGame: function (id){
			return $http.get(apiUrl + "/" + id)
				.then(function (response){
					return response.data;
				})
		},

		createGame: function (game){
			// ne fonctionne pas si on ne met pas d'email
			game.user1.pseudo = this.pseudo;
			return $http({
				method: "POST",
				url: apiUrl,
				data: game 
			})
		},

		joinGame: function(game){
			game.user2 = {
				pseudo: this.pseudo
			}
			return $http.put(apiUrl + "/" + game.id, game)
		},
	}
}])