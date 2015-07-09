/**
 * Created by gaborsornyei on 06/07/15.
 */
angular.module('myApp.common',[])

    .factory('CommonSrvc', function ($http) {
        var factory = {};
        //---------------

        factory.getFizModok = function () {
            return $http.get('fizmodok.json');
        }

        //---------------
        return factory;
    })