'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
    'ngRoute',
    'ngMessages',
    'ui.bootstrap',
    'ui.router',
    'myApp.home',
    'myApp.szallito',
    'myApp.common'
]).
    config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'home/home.html',
                controller: 'HomeCtrl'
            })

    }]);
