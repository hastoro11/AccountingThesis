'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
    'ui.bootstrap',
    'ui.router',
    'ui.mask',
    'myApp.home',
    'myApp.szallito',
    'myApp.vevo',
    'myApp.kivonat',
    'myApp.karton',
    'myApp.common',
    'myApp.cegadatok'
]).
    config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'home/home.html',
                controller: 'HomeCtrl'
            })
            .state('dokumentacio', {
                url: '/dokumentacio',
                templateUrl: 'dokumentacio/dokumentacio.html',
                controller: function () {
                    
                }
            })

    }]);
