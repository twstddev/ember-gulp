define( [ "js/templates/navigation", "ember" ],
	function( navigation_template ) {
	/**
	 * @brief Implements main navigation view.
	 */
	var NavigationView = Ember.View.extend( {
		template : navigation_template,
		tagName : "nav"
	} );

	return NavigationView;
} );
