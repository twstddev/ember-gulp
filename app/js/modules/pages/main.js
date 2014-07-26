define( [ 
	"js/include/routes/page",
	"js/include/controllers/page",
	"js/include/models/page",
	"js/include/views/page",
	"ember"
	],
	function( PageRoute, PageController, Page, PageView ) {
	/**
	 * @brief Implements module that
	 * contains logic for pages components.
	 */
	var PagesModule = Ember.Object.extend( {
		/**
		 * @brief Constructor.
		 */
		init : function() {
			App.PageController = PageController;
			App.Page = Page;
			App.PageView = PageView.extend( {
				controller : App.PageController.create()
			} );
			App.PageRoute = PageRoute;
		}
	} );

	return PagesModule;
} );
