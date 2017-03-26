/**
 * Created by Donny on 17/3/22.
 */
(function () {
    'use strict';

    angular.module('calculator.controllers', [])
        .controller('AppController', ['$scope', function ($scope) {
            $scope.hello = 'hello';
        }])
}());