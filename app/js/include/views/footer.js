define( [ "js/templates/footer", "ember" ],
	function( footer_template ) {
	/**
	 * @brief Implements footer view.
	 */
	var FooterView = Ember.View.extend( {
		template : footer_template,
		tagName : "footer",
		classNames : [ "main" ]
	} );

	return FooterView;
} );
