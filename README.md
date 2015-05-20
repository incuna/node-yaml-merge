# node-yaml-merge
Provides helper nodeJS module to merge multiple yaml files in order.

Takes an array of file paths to YAML files, and uses the lodash [deep merge](https://lodash.com/docs#merge) to merge properties from the later files into the earlier ones, returning the merged object.

## Install
* `npm install git://github.com/incuna/node-yaml-merge#0.0.1`

## Usage:
```
var yamlMerge = require('node-yaml-merge');

var mergedConfig = yamlMerge.mergeFiles([
  'config.yaml',
  'config-local.yaml'
]);
```

## Development
* All work to be done via pull-requests

## Releases
* Assign the release number. Use semver for versioning.
* Add changes since the last release to the `CHANGELOG.md`
* Tag the repository with the new version
