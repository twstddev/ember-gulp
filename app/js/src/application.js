/**
 * @brief This file contains definition of the
 * main( core ) file of the application.
 * It bootstraps ember framework and loads main
 * components and modules.
 */
define( [
	"js/modules/header/main",
	"js/modules/pages/main",
	"js/include/views/footer",
	"js/templates/application",
	"ember-data"
	],
	function(
		HeaderModule,
		PagesModule,
		FooterView
	) {

	/**
	 * @brief Creates Ember application and
	 * saves it to the global scope.
	 */
	var create_ember_application = function( config ) {
		App = Ember.Application.create();
	};

	/**
	 * @brief Creates main application elements and
	 * components.
	 */
	var bootstrap_application = function( config ) {
		// register global event system
		App.vent = Ember.Object.extend( Ember.Evented, {} ).create();

		// make sure that we use pushstate by default with fallback
		// on older browsers
		App.Router.reopen( {
			location : "auto"
		} );

		// add main routes for pages
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

		// for this example boilerplate use hard-coded fixtures
		App.ApplicationAdapter = DS.FixtureAdapter.extend( {
			queryFixtures : function( fixtures, query, type ) {
				// I trust myself at this point, so no validation needed
				var query_key = Ember.keys( query )[ 0 ];

				return fixtures.filterBy( query_key, query[ query_key ] );
			}
		} );

		// define main components of the application
		var header_module = HeaderModule.create();
		var pages_module = PagesModule.create();

		App.FooterView = FooterView;
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
