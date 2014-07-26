define( [ "ember" ],
	function() {
	/**
	 * @brief Implements controller holding
	 * data of a single menu item.
	 */
	var MenuItemController = Ember.ObjectController.extend( {
		actions : {
			clicked : function() {
				//App.vent.trigger( "pages:change", this.get( "slug" ) );
			}
		}
	} );

	return MenuItemController;
} );
