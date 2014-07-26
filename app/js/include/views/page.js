define( [ "js/templates/page", "ember" ],
	function( page_template ) {
	/**
	 * @brief Implements page view.
	 */
	var PageView = Ember.View.extend( {
		template : page_template,
		tagName : "section",
		classNames : [ "main" ]
	} );

	return PageView;
} );
