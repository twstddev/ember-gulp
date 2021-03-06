// Karma configuration
// Generated on Tue Jul 22 2014 22:19:27 GMT+0100 (GMT Summer Time)

module.exports = function(config) {
	config.set({

		// base path that will be used to resolve all patterns (eg. files, exclude)
		basePath: '',


	// frameworks to use
	// available frameworks: https://npmjs.org/browse/keyword/karma-adapter
	frameworks: [ "mocha", "requirejs", "chai", "sinon" ],


	// list of files / patterns to load in the browser
	files: [
		'test-main.js',
		{pattern: 'libs/jquery/dist/jquery.js', included: false},
		{pattern: 'libs/handlebars/handlebars.runtime.js', included: false},
		{pattern: 'libs/ember/ember.js', included: false},
		{pattern: 'libs/ember-data/ember-data.js', included: false},
		{pattern: 'config/**/*.js', included: false},
		{pattern: 'js/**/*.js', included: false},
		{pattern: 'test/**/*.js', included: false}
	],


	// list of files to exclude
	exclude: [
		'**/*.swp',
		"**/*.keep",
		"js/main.js"
	],


	// preprocess matching files before serving them to the browser
	// available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
	preprocessors: {
		"js/**/*.js" : [ "coverage" ]
	},


	// test results reporter to use
	// possible values: 'dots', 'progress'
	// available reporters: https://npmjs.org/browse/keyword/karma-reporter
	reporters: ['mocha'],


	// web server port
	port: 9876,


	// enable / disable colors in the output (reporters and logs)
	colors: true,


	// level of logging
	// possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
	logLevel: config.LOG_INFO,


	// enable / disable watching file and executing tests whenever any file changes
	autoWatch: true,


	// start these browsers
	// available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
	browsers: ['PhantomJS'],


	// Continuous Integration mode
	// if true, Karma captures browsers, runs the tests and exits
	singleRun: false
	});
};
