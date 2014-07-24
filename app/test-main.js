var allTestFiles = [];
var TEST_REGEXP = /(spec|test)\.js$/i;

var pathToModule = function(path) {
	return path.replace(/^\/base\//, '').replace(/\.js$/, '');
};

Object.keys(window.__karma__.files).forEach(function(file) {
	if (TEST_REGEXP.test(file)) {
		// Normalize paths to RequireJS module names.
		allTestFiles.push(pathToModule(file));
	}
});

require( [ "base/config/require-config" ], function() {
	require.config({
		// Karma serves files under /base, which is the basePath from your config file
		baseUrl: '/base',

		paths : {
			"jquery" : "libs/jquery/dist/jquery",
			"jquery-migrate" : "libs/jquery-migrate/jquery-migrate",
			"handlebars" : "libs/handlebars/handlebars.runtime",
			"ember" : "libs/ember/ember",
			"ember-data" : "libs/ember-data/ember-data"
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
				exports : "Handlebards"
			},

			"ember" : {
				deps : [ "jquery", "handlebars" ],
				exports : "Ember"
			},

			"ember-data" : [ "ember" ] 
		}
	});

	require( [ "ember" ], function() {
		App = Ember.Application.create();

		$( "body" ).append( $( "<div />", { id : "tests" } ) );
		App.rootElement = "#tests";
		App.setupForTesting();
		App.injectTestHelpers();

		App.initializer( {
			name : "tests",
			initialize : function( container, application ) {
				require.config( {
					deps : allTestFiles,
					callback : window.__karma__.start
				} );
			}
		} );

	} );
} );
