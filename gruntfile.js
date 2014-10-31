module.exports = function(grunt){
	'use strict';

	require('load-grunt-tasks')(grunt);


	grunt.initConfig({

		watch:{
			options: {
				livereload:true
			},
			config: {
				files: [
					'gruntfile.js'
				]
			},
			html: {
				files: [
					'src/index.html'
				]
			},
			tpl: {
				files: [
					'src/**/*.tpl.html',
					'src/js/**/*.js'
				],
				tasks: [
					'includeSource'
				]

			},
			bower: {
				files: [
					'src/vendor/**/.bower.json'
				],
				tasks: [
					'wiredep'
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
					base: 'src'
				}
			}
		},

		wiredep: {
			index: {
				src: [
					'src/index.tpl.html'
				]
			}
		},

		includeSource: {
			options: {
				basePath: 'src'
			},
			app: {
				files: {
					'src/index.html':'src/index.tpl.html'
				}
			}
		}

	});

	grunt.registerTask('default',[
		'wiredep'
	]);

	grunt.registerTask('serve',[
		'includeSource',
		'wiredep',
		'connect',
		'watch'

	]);
};