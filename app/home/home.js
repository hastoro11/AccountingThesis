angular.module('myApp.home', ['ngRoute'])

    .config(function ($routeProvider) {
        $routeProvider
            .when('/home', {
                templateUrl: 'home/home.html',
                controller: 'HomeCtrl'
            })
            .otherwise({
                redirectTo: '/home'
            })
    })

    .controller('HomeCtrl', function ($scope) {

    })