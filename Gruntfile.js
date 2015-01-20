var stylish = require("jshint-stylish");

module.exports = function (grunt) {
    'use strict';

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks("grunt-contrib-watch");

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        jshint: {
            extensions:  "*.js",
            options: {
                reporter: stylish
            }
        },
        watch: { 
            files:  '*.js',
            tasks: 'jshint'
        }
    });

    // Default task(s).
    grunt.registerTask('default', ['jshint', 'watch']);

};