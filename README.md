# node-yaml-merge ![build status](https://travis-ci.org/incuna/node-yaml-merge.svg)
Provides helper nodeJS module to merge multiple yaml files in order.

Takes an array of file paths to YAML files, and uses the lodash [deep merge](https://lodash.com/docs#merge) to merge properties from the later files into the earlier ones, returning the merged object.

## Install
* `npm install git://github.com/incuna/node-yaml-merge#0.0.2`

## Usage:
```
var yamlMerge = require('node-yaml-merge');

var mergedConfig = yamlMerge.mergeFiles([
  'config.yaml',
  'config-local.yaml'
]);
```

## Development

### Requirements
* Docker
* Docker compose

### Submitting code 
* All work to be done via pull-requests
* To run tests `docker-compose run grunt test`

## Releases
* Work out the new release version using semver
* Add changes since the last release to the `CHANGELOG.md`
* Update version in `package.json`
* Update version install instructions in `README.md`
* Tag the repository with the new version
