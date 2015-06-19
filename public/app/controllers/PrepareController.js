angular.module("batailleNaval")

.controller("PrepareController", function (GameService, $routeParams){
	var prepareCtrl = this;

	var selectedBoat = null;

	GameService.getGame($routeParams.id).then(function(game){
		prepareCtrl.game = game;

		prepareCtrl.fleet = [];

		for(var i = 1; i < game.fleetSize + 1; i++){
			boat = {
				id : i,
				positions: []
			};
			prepareCtrl.fleet.push(boat);
		}

		selectedBoat = prepareCtrl.fleet[0];

		prepareCtrl.battlefield = [];

		prepareCtrl.rows = new Array(game.battlefieldSize.height);
		prepareCtrl.cols = new Array(game.battlefieldSize.width);

		for(var i=0; i<game.battlefieldSize.height; i++){
			prepareCtrl.battlefield[i] = [];
			for(var j=0; j<game.battlefieldSize.width; j++){
				prepareCtrl.battlefield[i][j] = 0;
			}
		}
	});

	prepareCtrl.add = function(i, j){
		if(selectedBoat.positions.length === 0){
			if(prepareCtrl.battlefield[i][j] != 0) return;
				prepareCtrl.battlefield[i][j] = selectedBoat.id;
				selectedBoat.positions.push([i, j]);
		}
		if(selectedBoat.positions.length === 2){
			return
		}
		if(selectedBoat.positions.length === 1){
			if(selectedBoat.positions[0][0] === i && (selectedBoat.positions[0][1] === j-1 || selectedBoat.positions[0][1] === j+1) ||
				selectedBoat.positions[0][1] === j && (selectedBoat.positions[0][0] === i-1 || selectedBoat.positions[0][0] === i+1)){
				if(prepareCtrl.battlefield[i][j] != 0) return;
				prepareCtrl.battlefield[i][j] = selectedBoat.id;
				selectedBoat.positions.push([i, j]);
			}
		}		
	}

	prepareCtrl.selectBoat = function(boat){
		selectedBoat = boat;
	}

	prepareCtrl.resetBoat = function(){
		if(selectedBoat.positions.length === 0)	return;
		if(selectedBoat.positions.length === 1){
			prepareCtrl.battlefield[selectedBoat.positions[0][0]][selectedBoat.positions[0][1]] = 0;
		}
		if(selectedBoat.positions.length === 2){
			prepareCtrl.battlefield[selectedBoat.positions[0][0]][selectedBoat.positions[0][1]] = 0;
			prepareCtrl.battlefield[selectedBoat.positions[1][0]][selectedBoat.positions[1][1]] = 0;
		}

		selectedBoat = {
			id : selectedBoat.id,
			positions : []
		}
	}

	prepareCtrl.checkReady = function(){
		if(!prepareCtrl.fleet) return false;
		return prepareCtrl.fleet.every(function (boat){
			return boat.positions.length === 2;
		});
	}

	prepareCtrl.isSelected = function(boat){
		return boat.id === selectedBoat.id;
	}
})