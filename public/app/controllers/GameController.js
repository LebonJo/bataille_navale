angular.module("batailleNaval")

.controller("GameController", function (GameService, $location){
	var gameCtrl = this;

	// à mettre dans le service plutot
	gameCtrl.fleetSizes = GameService.fleetSizes

    gameCtrl.game = {
    	fleetSize : GameService.fleetSizes[0].value
    };

	// sauvegarde
	gameCtrl.addGame = function (form){
		if(form.$invalid) console.log("form invalid");
		GameService.createGame(gameCtrl.game)
			.then(function (result){
				gameCtrl.game = {};
				$location.path("/");
			})
	};
})