# angular-module-no-deps

Include this module in your Karma tests to override `angular.module` into not loading any dependencies. Very useful for testing components in isolation!

## Installation

```
npm install --save-dev git+ssh://git@stash.mrgreen.zone:7999/gar/angular-module-no-deps.git#v1.0.0
```

Then include it in your `karma.conf.js`:
```
module.exports = function (config) {
    'use strict';
    config.set({

        ...
        files: [
            './node_modules/angular-module-no-deps/index.js',
            ...
        ],
        ...
    });
};
```
