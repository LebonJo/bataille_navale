module.exports = function(grunt){
	grunt.registerTask('hello', 'Hello Nantes', function(){
		console.log('Hello Grunt, depuis Nantes !');
	});

	grunt.registerTask('etape1', 'Etape 1 visite de Nantes', function(){
		console.log('Etape 1 de la visite de Nantes !');
	});

	grunt.registerTask('etape2', 'Etape 2 visite de Nantes', function(){
		console.log('Etape 2 de la visite de Nantes !');
	});

	grunt.registerTask('etape3', 'Etape 3 visite de Nantes', function(){
		console.log('Etape 3 de la visite de Nantes !');
	});

	grunt.registerTask('visite', ['etape1', 'etape2', 'etape3']);


	// Déclaration la plus utilisée

	//-- on déclare plusieurs config possible
	grunt.initConfig({
		hello:{
			configNantes: 'Nantes',
			configRennes: 'Rennes'
		}
	});

	grunt.registerMultiTask('hello', 'Hello', function(){
		console.log('Hello Grunt, depuis %s ! avec la config %s', this.data, this.target);
	});

	//-- on peut ensuite afficher toutes les configurations avec la commande : $grunt hello
	//-- ou une seule en la spécifiant dans la commande : $grunt hello:configNantes

	// Déclaration d'un alias
	//grunt.registerTask('default', 'hello');
	//-- on peut faire un alias sur une config avec grunt.registerTask('default', 'hello:configNantes');


	// Utilisation du plugin de copie de fichiers

	// grunt.initConfig({ // config pour le multitask
	// 	copy: { // nom de la config
	// 		main:{
	// 			src: ['public/**/*.js', 'public/**/*.css', 'public/**/*.html'], // fichiers copiers
	// 			dest: 'tmp', // dossier de destination
	// 			expand: true
	// 		}
	// 	}
	// });

	// autre possibilité de déclaration, cette fois ci en mode objet (files est un objet)

	// grunt.initConfig({ // config pour le multitask
	// 	copy: { // nom de la config
	// 		main:{
	// 			files: {
	// 				'tmp/': ['public/**/*.js', 'public/**/*.css', 'public/**/*.html'], // fichiers copiers
	// 			},
	// 			expand: true
	// 		}
	// 	}
	// });

	// encore deux autres modes : mode array et mode dynamic

	// création de la tache grunt copy, c'est une multi task donc on peut la configurer
	//grunt.loadNpmTasks('grunt-contrib-copy'); // 



	// Utilisation du plugin de création de serveur

	grunt.initConfig({
		clean:{
			dist: ['build']
		},
		copy: { // nom de la config
			dev:{
				files: [{
					expand: true,
					src: ['public/**/*.*'],
					dest: 'build/'
				},
				{
					expand: true,
					flatten: true,
					src: ['bower_components/**/angular.min.js',
					'bower_components/**/angular-route.min.js',
					'bower_components/**/bootstrap.min.css'],
					dest: 'build/public/lib'
				}]
			}
		},
		connect: {
			dev: {
				options: {
					base: 'build/public', // dossier de départ
					hostname: 'localhost',
					port: 3000,
					open: true, // ouverture du browser au démarrage
					livereload: true // evite de charger le script livereload.js dans l'html
					// keepalive: true //-- à mettre si connect est lancé tout seul
				}
			}
		},
		watch: {
			dev: {
				files: ['public/**/*.*'],
				tasks: ['copy'],
				options: {
					livereload: true
				}
			}
		},
		karma: {
			unit: {
				configFile: 'karma.conf.js'
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-connect');

	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.loadNpmTasks('grunt-contrib-copy');

	grunt.loadNpmTasks('grunt-karma');

	grunt.registerTask('server', ['copy', 'connect', 'watch']); // lancement de plusieurs tâches en meme temps

}