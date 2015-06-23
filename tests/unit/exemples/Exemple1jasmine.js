describe("Une suite avec 2 tests", function(){

	it("12 + 5 doit être égal à 17", function(){
		var a = 12;
		var b = 5;
		var resultat = a+b;

		expect(resultat).toBeDefined();
		expect(resultat).toBe(17);
		expect(resultat).not.toBe(a);
	});

	it("L'égalité de deux objets est bien gérée", function(){
		var a = { prop1 : "val1", prop2 : "val2"};
		var b = { prop1 : "val1", prop2 : "val2"};

		expect(b).toEqual(a);
	});
})