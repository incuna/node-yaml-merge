(function () {
    'use strict';

    var _ = require('lodash');
    var gruntFile = require('grunt/lib/grunt/file');

    /**
     * Returns a merged set of yaml files
     * @param {array} files - array of file paths to merge together into one object.
     * @return {object} Merged javascript object containing converted data from the merged yaml files
     */
    var mergeFiles = function (files) {
        if (!_.isArray(files)) {
            throw new Error('Arguments to config-helper.mergeConfig should be an array');
        }

        var appConfig = {};
        files.forEach(function (filePath) {
            if (gruntFile.exists(filePath)) {
                var fileConfig = gruntFile.readYAML(filePath);
                // Use lodash to do a 'deep merge' which only overwrites the properties
                // specified in previous config files, without wiping out their child properties.
                _.merge(appConfig, fileConfig);
            }
        });

        return appConfig;
    };

    module.exports = {
        mergeFiles: mergeFiles
    };

})();
