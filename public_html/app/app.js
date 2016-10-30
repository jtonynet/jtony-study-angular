'use strict'

var helloWorldApp = angular.module('helloWorldApp', [
    'ngRoute',
    'helloWorldControllers'
]);

helloWorldApp.config(['$routeProvider', '$locationProvider', 
    function($routeProvider, $locationProvider) {
        $routeProvider.
            when('/', {
               templateUrl:"app/views/main.html",
               controller: 'MainCtrl'
            })
            .when('/show', {
               templateUrl:"app/views/show.html",
               controller: 'ShowCtrl'
            });
        
        $locationProvider.html5Mode(false).hashPrefix('!');
    }
]);