/**
 * Created by gaborsornyei on 24/07/15.
 */
angular.module('myApp')
    .factory('VevoSrvc', function ($http) {
        var factory = {};
        var url = 'http://localhost:3000/';

        factory.getPartnerek = function () {
            return $http.get(url + 'vevok');
        }

        factory.getAfak = function () {
            return $http.get(url + 'fiz-afa');
        }

        return factory;
    });