module.exports = function( gulp ) {
	/**
	 * @brief Opens the given path
	 * is a browser.
	 */
	var open_gien_path = function( path ) {
		return gulp.src( path )
			.pipe( plugins.open( "", {
				url : [
					"http://",
					config.hostname,
					":",
					config.port
				].join( "" )
			} ) );
	};

	gulp.task( "open", function() {
		return open_gien_path( get_application_path( "index.html" ) );
	} );
};
