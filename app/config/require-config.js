require.config( {
	baseUrl : "",
	paths : {
		"jquery" : "libs/jquery/dist/jquery",
		"jquery-migrate" : "libs/jquery-migrate/jquery-migrate"
	},

	shim : {
		"jquery" : {
			exports : "$"
		},

		"jquery-migrate" : {
			deps : [ "jquery" ],
			exports : "$"
		}
	}
} );
