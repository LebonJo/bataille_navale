describe("HomeController Tests", function(){
	beforeEach(function(){
		module('batailleNaval');
	});

	it("HomeController.prepareGame redirige vers /prepare/idGame", inject(function ($controller, $location){
		var homeCtrl = $controller('HomeController'); // crée une instance du controlleur
		var game = {id: 123};
		homeCtrl.prepareGame(game);
		expect($location.path()).toEqual('/prepare/' + game.id);
	}));
});