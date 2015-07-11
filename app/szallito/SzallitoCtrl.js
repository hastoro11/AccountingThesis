/**
 * Created by gaborsornyei on 05/07/15.
 */
angular.module('myApp.szallito')


    .controller('SzallitoCtrl', function ($scope) {
        $scope.tetel = {}


        $scope.open = function ($event, opened) {
            $event.preventDefault();
            $event.stopPropagation();
            console.log(opened);
            console.log($scope[opened]);

            $scope[opened] = !$scope[opened]
        }

    });