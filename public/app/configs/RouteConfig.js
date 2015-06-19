angular.module("batailleNaval")

.config(function ($routeProvider){
				
	$routeProvider
	.when("/", {
		templateUrl: "views/home.html",
		controller: "HomeController",
		controllerAs: "homeCtrl"
	})
	.when("/newgame", {
		templateUrl: "views/newgame.html",
		controller: "GameController",
		controllerAs: "gameCtrl"
	})
	.when("/prepare/:id", {
		templateUrl: "views/prepare.html",
		controller: "PrepareController",
		controllerAs: "prepareCtrl"
	})
	/*.when("/test/:id?", {
		template: "ici",
		controller: function ($routeParams){
			console.log($routeParams.id)
		},
		controllerAs: "newCtrl"
	})*/
	.otherwise({
		redirectTo: "/"
	})
})