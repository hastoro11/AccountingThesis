/**
 * Created by gaborsornyei on 05/07/15.
 */
angular.module('myApp.szallito')


    .controller('SzallitoCtrl', function ($scope, SzallitoSrvc, CommonSrvc) {
        // $scope
        //
        $scope.tetel = {tkjelleg: 'K'};
        $scope.szallitok = [];
        $scope.partnerek = [];
        $scope.fizmodok = [];

        //------------------

        // Functions
        $scope.open = function ($event, opened) {
            $event.preventDefault();
            $event.stopPropagation();
            console.log(opened);
            console.log($scope[opened]);

            $scope[opened] = !$scope[opened]
        }

        SzallitoSrvc.getSzallitok()
            .success(function (data) {
                $scope.szallitok = data;
            })

        SzallitoSrvc.getPartnerek()
            .success(function (data) {
                $scope.partnerek = data;
            })
        CommonSrvc.getFizModok().
            success(function (data) {
                $scope.fizmodok = data;
            })

    });