describe("Une suite avec 2 tests", function(){

	var count = 0;

	beforeEach(function(){
		this.valeur = 5;
	});

	afterEach(function(){
		count++;
	});

	it("test 1", function(){
		expect(this.valeur).toEqual(5);
		expect(this.count).not.toBeDefined();
	});

	it("test 2", function(){
		expect(count).toEqual(1);
	});
})