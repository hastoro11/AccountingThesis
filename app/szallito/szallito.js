angular.module('myApp.szallito', [])

    .config(function ($stateProvider) {
        $stateProvider
            .state('szallito.alap', {
                url: '/alap',
                templateUrl: 'szallito/alap.html',
            })
            .state('szallito.konyv', {
                url: '/konyv',
                templateUrl: 'szallito/konyv.html'
            })
    })