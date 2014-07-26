define( [], function() {
	/**
	 * @brief Holds main application fake
	 * data.
	 */
	return {
		menu_items : [
			{
				id : 1,
				title : "Home",
				slug : "home"
			},
			{
				id : 2,
				title : "Contact",
				slug : "contact"
			},
			{
				id : 3,
				title : "About",
				slug : "about"
			}
		],
		pages : [
			{
				id : 1,
				slug : "home",
				title : "Home page",
				content : "Home page content"
			},
			{
				id : 2,
				slug : "contact",
				title : "Contact page",
				content : "Contact page content"
			},
			{
				id : 3,
				slug : "about",
				title : "About page",
				content : "About page content"
			}
		]
	};
} );
