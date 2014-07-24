module.exports = function( gulp ) {
	var template_files = get_application_path( "templates/**/*.hbs" );

	var compile_templates = function() {
		return gulp.src( template_files )
			.pipe( plugins.cached( "handlebars" ) )
			.pipe( plugins.emberHandlebars( {
				outputType : "browser"
			} ) )
			.pipe( plugins.defineModule( "amd", {
				require : {
					"" : "ember"
				}
			} ) )
			.pipe( gulp.dest( get_application_path( "js/templates" ) ) );
	};

	gulp.task( "handlebars", function() {
		compile_templates();

		gulp.watch( template_files, compile_templates );
	} );

	gulp.task( "handlebars:build", compile_templates );
};
