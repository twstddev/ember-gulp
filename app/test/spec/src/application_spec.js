define( [ "js/src/application" ], function( Application ) {
	describe( "Application", function() {
		it( "should be an instance of Object", function() {
			Application.init( {} );
			expect( window.App ).to.be.an.instanceof( Object );
		} );
	} );
} );
