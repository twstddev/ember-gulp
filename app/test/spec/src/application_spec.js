define( [ "js/src/application" ], function( Application ) {
	describe( "Application", function() {
		beforeEach( function( done ) {
			Ember.run( function() {
				done();
			} );
		} );

		it( "should be an instance of Object", function() {
			Application.init( {} );
			expect( window.App ).to.be.an.instanceof( Object );
		} );
	} );
} );
