/**
 * Created by gaborsornyei on 05/07/15.
 */
angular.module('myApp.szallito')

    .factory('SzallitoSrvc', function ($http) {
        var factory = {};
        factory.getPartnerek = function () {
            return $http.get('szallitok.json');
        }

        factory.getSzallitok = function () {
            return $http.get('foksz_szallitok.json');
        }

        return factory;
    })