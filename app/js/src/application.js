/**
 * @brief This file contains definition of the
 * main( core ) file of the application.
 * It bootstraps ember framework and loads main
 * components and modules.
 */
define( [
	"js/include/views/body_view",
	"js/include/views/header",
	"ember"
	],
	function( BodyView, HeaderView ) {

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
		var body_view = BodyView.create( {
			header : HeaderView
		} );

		body_view.append();
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
