/**
 * Created by gaborsornyei on 06/07/15.
 */
angular.module('myApp.common', [])

    .factory('CommonSrvc', function ($http) {
        var factory = {};
        var url = 'http://localhost:3000/';
        //---------------

        factory.getFizModok = function () {
            return $http.get(url + 'fizmodok');
        }

        factory.getSzamlatukor = function () {
            return $http.get(url + 'szamlatukor');
        }

        factory.getNaplok = function () {
            return $http.get(url + naplo);
        }

        factory.getPartnerek = function () {
            return $http.get(url + 'partnerek');
        }


        factory.getAfak = function () {
            return $http.get(url + 'afakulcsok');
        }

        //---------------
        return factory;
    })