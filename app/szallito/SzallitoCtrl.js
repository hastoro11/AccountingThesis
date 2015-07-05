/**
 * Created by gaborsornyei on 05/07/15.
 */
angular.module('myApp.szallito')

    .controller('SzallitoCtrl', function ($scope, $log, SzallitoSrvc) {
        SzallitoSrvc.getSzallitok()
            .success(function (data) {
                $scope.szallitok = data;
                $log.info(data);
            })
        SzallitoSrvc.getFokSzamok()
            .success(function (data) {
                $scope.fokszamok = data;
            })

        $scope.submit = function () {
            $log.info($scope.szamla)
        }
    });