exports.config = {
	seleniumAdresse: "http://localhost:4444/wd/hub",

	multiCapabilities: [{
		"browserName": "chrome"
	},{
		"browserName": "firefox"
	}],

	baseUrl: "http://localhost:3000",

	specs: [
		'tests/e2e/**/*.js'
	]
};