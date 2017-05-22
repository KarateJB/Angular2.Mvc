module.exports = function (config) {
    config.set({
        browsers: ['Chrome'],
        frameworks: ['jasmine'],
        
        files: [
            // dependencies
            '../lib/jquery/dist/jquery.min.js',

            //Target js
            '../scripts/*.js',      

            //Test files 
            './**/*.spec.js'

        ]
    });
};