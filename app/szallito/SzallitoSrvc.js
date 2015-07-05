/**
 * Created by gaborsornyei on 05/07/15.
 */
angular.module('myApp.szallito')

    .factory('SzallitoSrvc', function ($http) {
        var factory = {};
        factory.getSzallitok = function () {
            return $http.get('szallitok.json');
        }

        factory.getFokSzamok = function () {
            return $http.get('foksz_szallitok.json');
        }

        return factory;
    })