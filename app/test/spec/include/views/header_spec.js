describe( "HeaderView", function() {
	var header_view = null;
	var $he;

	beforeEach( function( done ) {
		require( [ "js/include/views/header" ],
			function( HeaderView ) {

			header_view = HeaderView.create();
			Ember.run( function() {
				header_view.appendTo( "#tests" );
				done();
			} );
		} );
	} );

	it( "contains h1 title", function() {
		//expect( header_view.$( "h1" ).length ).to.eq( 1 );
	} );


	afterEach( function( done ) {
		Ember.run( function() {
			if ( header_view ) {
				header_view.remove();
			}

			header_view = null

			done();
		} );
	} );
} );

