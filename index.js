/* global angular */
var oldModule = angular.module;

angular.module = function (moduleName) {
    'use strict';
    return oldModule(moduleName, []);
};
