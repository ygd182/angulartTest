'use strict';

/* Services */

angular.module('App').service('TestService', ['$http',
  function TestService($http){
  	this.getData = function getData () {
  		return $http.get('https://samples.openweathermap.org/data/2.5/forecast?q=London,us&appid=b1b15e88fa797225412429c1c50c122a1');
  	}

}]);
