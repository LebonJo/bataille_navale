angular.module("batailleNaval")

.directive("dtaPhoto", function(){ //dtaPhoto EN CAMELCASE !!!!!!!!!!

	return{

		// controller: "DtaPhotoController", appel du controleur spécial
		restrict: "E",
		transclude: true,
		template: "<div ng-click=\"e()\">ici bientot une photo<span ng-transclude></span></div>",
		scope:{
			borderWidth: "=", //ce scope.borderWidth aura un lien bi-directionnel avec le scope.borderWidth de l'index
			str: "@",
			e: "&"
		},
		link: function (scope, element, attrs){
			element.css("color", attrs.couleur || "blue");

			element.css("border", "0px solid red")
			element.css("display", "inline-block")

			scope.$watch("borderWidth", function (){
				element.css("borderWidth", scope.borderWidth + "px")
			})
		}
	}
})

.controller('DtaPhotoController', function (DtaPhotoService){
	// Logique de la directive
	console.log("Je suis dans le controleur photo")
})
.factory("DtaPhotoService", function (){
	console.log("Je suis dans le service photo")
})