define( [ 
	"js/include/controllers/menu_item",
	"ember-data" ],
	function( MenuItemController ) {
	/**
	 * @brief Implements array controller
	 * for menu items.
	 */
	var MenuController = Ember.ArrayController.extend( {
		init : function() {
			var that = this;
			this.set( "content", [] );

			this.get( "store" ).find( "menuItem" ).then( function( items ) {
				that.set( "items", items );
			} );
		},

		itemControlller : MenuItemController,

		actions : {
			clicked : function( slug ) {
				App.vent.trigger( "pages:change", slug );
			}
		}
	} );

	return MenuController;
} );
