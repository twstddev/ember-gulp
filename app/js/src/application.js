/**
 * @brief This file contains definition of the
 * main( core ) file of the application.
 * It bootstraps ember framework and loads main
 * components and modules.
 */
define( [
	"js/modules/header/main",
	"js/include/views/footer",
	"js/include/views/content",
	"js/templates/application",
	"ember-data"
	],
	function(
		HeaderModule,
		FooterView,
		ContentView
	) {

	/**
	 * @brief Creates Ember application and
	 * saves it to the global scope.
	 */
	var create_ember_application = function( config ) {
		App = Ember.Application.create();
		App.vent = Ember.Object.extend( Ember.Evented, {} ).create();
		App.Router.reopen( {
			location : "auto"
		} );

		App.Router.map( function() {
			this.resource( "page", { path : "/" } );
			this.resource( "page", { path : "/:slug" } );
		} );

		// we need to initialize global navigation controller
		// as it is accessible from any page and route
		App.ApplicationRoute = Ember.Route.extend( {
			setupController : function( controller, model ) {
				this.controllerFor( "navigation" ).set( "model", this.store.find( "menuItem" ) );
			}
		} );

		App.ApplicationAdapter = DS.FixtureAdapter;
	};

	/**
	 * @brief Creates main application elements and
	 * components.
	 */
	var bootstrap_application = function( config ) {
		var header_module = HeaderModule.create();

		App.FooterView = FooterView;
		App.ContentView = ContentView
	};
	
	/**
	 * @brief A singleton wrapper around core
	 * functionality.
	 */
	var Application = ( function() {
		return {
			/**
			 * @brief Fake constructor.
			 *
			 * @param[in] Object config is a list of
			 * configuration values.
			 */
			init : function( config ) {
				create_ember_application( config );
				bootstrap_application( config );
			}
		}
	} )();

	return Application;
} );
