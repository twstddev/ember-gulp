define( [ 
	"js/include/controllers/menu",
	"js/include/views/navigation",
	"js/include/models/menu_item",
	"ember"
	],
	function( 
		MenuController,
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

			App.NavigationController = MenuController;
			App.NavigationView = NavigationView;
		}
	} );

	return NavigationModule;
} );
