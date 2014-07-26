define( [ "config/fixtures", "ember-data" ],
	function( Fixtures ) {
	/**
	 * @brief Implements model for a page.
	 */
	var Page = DS.Model.extend( {
		title : DS.attr( "string" ),
		slug : DS.attr( "string" ),
		content : DS.attr( "string" )
	} );

	Page.FIXTURES = Fixtures.pages;

	return Page;
} );
