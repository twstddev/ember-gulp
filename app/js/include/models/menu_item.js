define( [ "config/fixtures", "ember-data" ],
	function( Fixtures ) {
	/**
	 * @brief Implements model for a menu item
	 * from the main navigation.
	 */
	var MenuItem = DS.Model.extend( {
		title : DS.attr( "string" ),
		slug : DS.attr( "string" )
	} );

	MenuItem.FIXTURES = Fixtures.menu_items;

	return MenuItem;
} );
