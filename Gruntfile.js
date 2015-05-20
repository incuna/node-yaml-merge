module.exports = function (grunt) {
    'use strict';

    // Use jit-grunt to only load necessary tasks for each invocation of grunt.
    require('jit-grunt')(grunt);

    grunt.initConfig({
        // Configurable paths
        config: {
            lintFiles: [
                '**/*.js'
            ]
        },
        jshint: {
            options: {
                jshintrc: '.jshintrc'
            },
            all: [
                '<%= config.lintFiles %>'
            ]
        },
        jscs: {
            options: {
                config: '.jscsrc'
            },
            src: '<%= config.lintFiles %>'
        }
    });

    grunt.registerTask('lint', [
        'jshint',
        'jscs'
    ]);

    grunt.registerTask('test', [
        'lint'
    ]);

};
