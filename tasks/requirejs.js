module.exports = function( gulp ) {
	gulp.task( "requirejs", function() {
		return plugins.requirejs( {
			baseUrl : get_application_path( "" ),
			out : "main.js",
			removeCombined : true,
			findNestedDependencies: true,
			include : [ "config/require-config", "requirejs" ],
			name : "js/main",
			wrapShim : true,
			optimizeAllPluginResources : true,
			paths : {
				"requirejs" : "libs/requirejs/require",
				"jquery" : "libs/jquery/dist/jquery",
				"jquery-migrate" : "libs/jquery-migrate/jquery-migrate",
				"handlebars" : "libs/handlebars/handlebars.runtime",
				"ember" : "libs/ember/ember.prod",
				"ember-data" : "libs/ember-data/ember-data.prod"
			},

			pragmas : {
				configExclude : true
			},

			shim : {
				"jquery" : {
					exports : "$"
				},

				"jquery-migrate" : {
					deps : [ "jquery" ],
					exports : "$"
				},

				"handlebars" : {
					exports : "Handlebars"
				},

				"ember" : {
					deps : [ "jquery", "handlebars" ],
					exports : "Ember"
				},

				"ember-data" : {
					deps : [ "ember" ],
					exports : "DS"
				}
			}
		} )
			.pipe( plugins.uglify() )
			.pipe( gulp.dest( config.dist + "/js" ) );
	} );
};
