define( [ "ember" ], function() {
	/**
	 * @brief Implements default route for
	 * page model and controller.
	 */
	var PageRoute = Ember.Route.extend( {
		model : function( params ) {
			var slug = params.slug ? params.slug : "home";

			return this.store.find( "page", { slug : slug } );
		},

		setupController : function( controller, model ) {
			controller.set( "model", model.get( "firstObject" ) );
		}
	} );

	return PageRoute;
} );
