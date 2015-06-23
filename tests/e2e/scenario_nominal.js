describe('Bataille Navale Scénario Nominal', function(){
	it("Lorsque je clique sur New Game alors la page de création d'un nouveau jeu", function(){
		browser.get('http://localhost:3000'); // on va a la page d'accueil
		expect(browser.getLocationAbsUrl()).toEqual('/'); // on vérifie que l'url est la bonne
		element(by.linkText('New Game')).click(); // on simule un clique sur le bouton new game
		expect(browser.getLocationAbsUrl()).toEqual('/newgame'); // on vérifie que l'url est la bonne

		element(by.model('gameCtrl.game.name')).sendKeys('Nom Game'); // on simule le remplissage des champs
		element(by.model('gameCtrl.game.user1.email')).sendKeys('hubert@gmail.com');
		element(by.buttonText('Créer la partie')).click(); // on simule le clic sur créer la partie
		element(by.linkText('Home')).click(); // on simule le clic sur home
		expect(browser.getLocationAbsUrl()).toEqual('/') // on vérifie qu'on est à la bonne adresse
	});
})