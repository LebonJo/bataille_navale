angular.module("batailleNaval")

.controller("HomeController", function (GameService, $location){
	var homeCtrl = this;

	function fetchGames (){
		GameService.getAllGames().then(function (games){
			homeCtrl.games = games;
		});
    }

    fetchGames();

    homeCtrl.showGame = function(game){
        return (game.user1.pseudo != GameService.pseudo) && !game.user2;
    }

    homeCtrl.joinGame = function(game){
    	GameService.joinGame(game)
    		.then(fetchGames());
    }

    homeCtrl.prepareGame = function(game){
        $location.path("/prepare/" + game.id)
    }
})