define( [ "js/templates/header", "ember" ],
	function( header_template ) {
	/**
	 * @brief Implements header view.
	 */
	var HeaderView = Ember.View.extend( {
		template : header_template,
		tagName : "header",
		classNames : [ "main" ]
	} );

	return HeaderView;
} );
