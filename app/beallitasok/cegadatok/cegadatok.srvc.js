/**
 * Created by gaborsornyei on 27/07/15.
 */
angular.module('myApp.cegadatok')

    .factory('CegadatokSrvc', function ($http) {
        var factory = {};
        var url = "http://localhost:3000/cegadatok/";

        factory.getCegadatok = function () {
            return $http.get(url+1);
        }

        factory.setCegadatok = function (id, data) {
            return $http.put(url + id, data);
        }

        return factory;
    })


