/**
 * Created by gaborsornyei on 05/07/15.
 */
angular.module('myApp.szallito')

    .factory('SzallitoSrvc', function ($http) {
        var factory = {};
        var url = "http://localhost:3000/";
        factory.getPartnerek = function () {
            return $http.get(url + 'partnerek');
        }

        factory.getAfak = function () {
            return $http.get(url + 'lev-afa');
        }

        return factory;
    })