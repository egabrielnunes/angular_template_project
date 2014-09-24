(function () {
    'use strict';

    angular.module('tp.app', ['ngRoute', 'tp.main'])

    .config(['$routeProvider',
    function (routeProvider) {
            routeProvider.
            when('/', {
                templateUrl: 'app_modules/main/main.html',
                controller: 'MainCtrl'
            }).
            when('/main', {
                templateUrl: 'app_modules/main/main.html',
                controller: 'MainCtrl'
            }).
            otherwise({
                redirectTo: '/'
            });
    }]);

}());