define( [ "ember" ],
	function() {
	/**
	 * @brief Implements the main content
	 * view. This view will contain other pages views.
	 */
	var ContentView = Ember.View.extend( {
		tagName : "section",
		classNames : [ "main" ]
	} );

	return ContentView;
} );
