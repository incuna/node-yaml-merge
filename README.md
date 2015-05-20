# node-yaml-merge
Provides helper nodeJS module to merge multiple yaml files in order.

Takes an array of file paths to YAML files, and uses the lodash [deep merge](https://lodash.com/docs#merge) to merge properties from the later files into the earlier ones, returning the merged object.


Usage:

```
var yamlMerge = require('node-yaml-merge');

var mergedConfig = yamlMerge.mergeFiles([
  'config.yaml',
  'config-local.yaml'
]);
```
