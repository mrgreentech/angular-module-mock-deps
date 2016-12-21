# angular-module-no-deps

Include this module in your Karma tests to override `angular.module` into not loading any dependencies. Very useful for testing components in _real_ isolation!

## Usage

```
npm install --save-dev angular-module-no-deps
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

`angular-module-no-deps` now overrides `angular.module('name', [...])` to `angular.module('name', [])`.

## Background

Given an angular module that looks like this:

_user.js_

```
angular
	.module('user', [
	    'account'
	])
	.service('User', UserService)

function UserService(Account) {
	// code...
}
```

and a test that looks like this:

_user.spec.js_
```
angular.mock.module('user', function($provide) {
    $provide.value('Account', {});
});
```

the test code will still want to load the `'account'` module even though the service `'account'` provides is mocked. This is not always desirable and then you can use this override to empty the module array.
