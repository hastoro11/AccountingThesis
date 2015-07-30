/**
 * Created by gaborsornyei on 27/07/15.
 */
angular.module('myApp.cegadatok')

    .controller('CegadatokCtrl', function ($scope, $state, $window, CegadatokSrvc) {
        $scope.cegadatok = {};
        CegadatokSrvc.getCegadatok()
            .success(function (data) {
                $scope.cegadatok = data;
            })

        $scope.save = function () {
            CegadatokSrvc.setCegadatok($scope.cegadatok.id, $scope.cegadatok)
                .success(function (data, header, config) {
                    console.log(data);
                    console.log(header);
                    console.log(config);
                    toastr.success('Mentés sikerült', '', {"timeOut": 1000});
                })
                .error(function (data, header, config) {
                    console.log(data);
                    console.log(header);
                    console.log(config);
                    toastr.error('A mentés nem sikerült', '', {"timeOut": 1000});
                });
        }

        $scope.cancel = function () {
            $state.go('home');
        }
    })