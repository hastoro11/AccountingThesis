/**
 * Created by gaborsornyei on 30/07/15.
 */
angular.module('myApp.szamlatukor', [])

    .config(function ($stateProvider) {
        $stateProvider
            .state('szamlatukor', {
                url: '/szamlatukor',
                templateUrl: 'beallitasok/szamlatukor/szamlatukor.html',
                controller: 'SzamlatukorCtrl'
            })
    })

    .controller('SzamlatukorCtrl', function ($scope, CommonSrvc) {
        CommonSrvc.getSzamlatukor()
            .success(function (data) {
                $scope.szamlatukor = data;
            })
    })