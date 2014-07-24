define( [ "js/templates/body", "ember" ],
	function( body_template ) {
	/**
	 * @brief Implements a main application view.
	 */
	var ApplicationView = Ember.View.extend( {
		template : body_template
	} );

	return ApplicationView;
} );
