module.exports = function(grunt){
	'use strict';

	require('load-grunt-tasks')(grunt);


	grunt.initConfig({

		watch:{
			options: {
				livereload:true
			},
			html: {
				files: [
					'app/src/**/*.html'
				]
			},
			config: {
				files: [
					'gruntfile.js'
				]
			}
		},

		connect: {
			options: {
				livereload:true,
				open:true

			},
			server: {
				options: {
					port: 8000,
					hostname: 'localhost',
					base: 'app/src'
				}
			}
		}

	});

	grunt.registerTask('default',[
	]);

	grunt.registerTask('serve',[
		'connect',
		'watch'

	]);
};