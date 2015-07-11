angular.module('myApp.szallito', [])

    .config(function ($stateProvider) {
        $stateProvider
            .state('szallito', {
                url: '/szallito',
                templateUrl: 'szallito/szallito.html',
                controller: 'SzallitoCtrl'
            })
    })