/* global angular */
var oldModule = angular.module;

var debug = false;

angular.module = function(moduleName, deps) {
    'use strict';

    if (typeof deps === 'object' && typeof deps.length === 'number') {

        if (debug) {
            console.log('calling angular.module(' + moduleName + ', []);');
        }

        return oldModule(moduleName, []);
    }

    if (debug) {
        console.log('calling angular.module(' + moduleName + ');');
    }

    return oldModule(moduleName);

};
