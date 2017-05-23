module.exports = function (config) {
    config.set({
        browsers: ['Chrome'],
        frameworks: ['jasmine','fixture'],

        basePath: '',
        files: [
            // dependencies
            '../lib/jquery/dist/jquery.min.js',

            //Target js
            '../scripts/*.js',      

            //Test files 
            'spec/*.spec.js',

            //Inject html 
            'html/*.html'

        ],
        preprocessors: {
            'html/*.html': ['html2js']
        },
        autoWatch: false,
        singleRun: true
    });
};