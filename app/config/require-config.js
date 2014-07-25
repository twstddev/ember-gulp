require.config( {
	baseUrl : "",
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
} );
