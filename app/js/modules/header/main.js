define( [ 
	"js/include/views/header",
	"js/modules/navigation/main",
	"ember"
	],
	function( HeaderView, NavigationModule ) {
	/**
	 * @brief Responsible for managing header
	 * components and their relations
	 * like views, controllers, models.
	 */
	var HeaderModule = Ember.Object.extend( {
		/**
		 * @brief Constructor.
		 */
		init : function() {
			var navigation_module = NavigationModule.create();

			App.HeaderView = HeaderView;
		}
	} );

	return HeaderModule;
} );
