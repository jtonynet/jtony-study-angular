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
            }).when('/customer', {
                templateUrl:"app/views/customer.html",
                controller:"CustomerCtrl"
            }).when('/addCustomer', {
                templateUrl:"app/views/newCustomer.html",
                controller:"AddCustomerCtrl"
            }).when('/addedCustomer/:customer/:city', {
                templateUrl:"app/views/addedCustomer.html",
                controller:"AddedCustomerCtrl"
            });
        
        $locationProvider.html5Mode(false).hashPrefix('!');
    }
]);