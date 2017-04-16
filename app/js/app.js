'use strict';

/* App Module */

var App = angular.module('App', [
  'ngRoute',
  'ngAnimate'
]);

App.constant('_', window._);

App.config(function ($routeProvider) {
   $routeProvider
      .when('/main', {
         templateUrl: 'partials/partial.html',
         controller: 'TestCtrl'
      }).
      otherwise({
         redirectTo: '/main'
      });
});