/**
 * Created by gaborsornyei on 05/07/15.
 */
angular.module('myApp.szallito')


    .controller('SzallitoCtrl', function ($scope, $log, SzallitoSrvc, CommonSrvc, $state) {
        $scope.teljOpened = false;
        $scope.kiallOpened = false;
        $scope.esedOpened = false;
        $scope.$state = $state;

        var tetelsor = 0;

        $scope.szallitok = [];
        $scope.fokszamok = [];
        $scope.tetel = {"tkjelleg": 'K', osszeg: 0, "kontir": []};
        $scope.fizmodok = [];
        $scope.states = [];
        $scope.sor = {};

        $scope.submit = null;
        $scope.teljOpen = null;
        $scope.kiallOpen = null;
        $scope.esedOpen = null;
        $scope.kovetkezo = null;
        $scope.addRow = null;
        //---------------------------------

        SzallitoSrvc.getSzallitok()
            .success(function (data) {
                $scope.szallitok = data;
            })
        SzallitoSrvc.getFokSzamok()
            .success(function (data) {
                $scope.fokszamok = data;
            })

        CommonSrvc.getFizModok()
            .success(function (data) {
                $scope.fizmodok = data;
            })

        $scope.teljOpen = function ($event) {
            $event.preventDefault();
            $event.stopPropagation();

            $scope.teljOpened = true;
        }
        $scope.kiallOpen = function ($event) {
            $event.preventDefault();
            $event.stopPropagation();

            $scope.kiallOpened = true;
        }
        $scope.esedOpen = function ($event) {
            $event.preventDefault();
            $event.stopPropagation();

            $scope.esedOpened = true;
        }

        $scope.kovetkezo = function () {
            $log.info($scope.tetel);
            $state.go('szallito.konyv');
        }

        $scope.addRow = function () {
            $scope.tetel.kontir[tetelsor++] = $scope.sor;
            $scope.sor = {};
            $log.info($scope.tetel.kontir);
        }


    });