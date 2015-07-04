angular.module('myApp.szallito', ['ngRoute'])

    .config(function ($routeProvider) {
        $routeProvider
            .when('/szallito', {
                templateUrl: 'szallito/szallito.html',
                controller: 'SzallitoCtrl'
            })
    })

    .controller('SzallitoCtrl', function ($scope) {

    })