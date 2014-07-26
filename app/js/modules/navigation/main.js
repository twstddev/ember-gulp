define( [ 
	"js/include/controllers/menu",
	"js/include/controllers/menu_item",
	"js/include/views/navigation",
	"js/include/models/menu_item",
	"ember"
	],
	function( 
		MenuController,
		MenuItemController,
		NavigationView,
		MenuItem
	) {
	/**
	 * @brief Responsible for navigation
	 * classes management.
	 */
	var NavigationModule = Ember.Object.extend( {
		/**
		 * @brief Constructor.
		 */
		init : function() {
			App.MenuItem = MenuItem;

			App.MenuItemController = MenuItemController;
			App.NavigationController = MenuController;
			App.NavigationView = NavigationView;
		}
	} );

	return NavigationModule;
} );
