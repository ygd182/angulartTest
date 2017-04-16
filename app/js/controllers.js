'use strict';

/* Controllers */

angular.module('App').controller('TestCtrl', ['$scope','TestService','$filter', '_',
  function TestCtrl($scope, TestService, $filter, _) {

  	//tuve que parsear weather porque venia en un arreglo de un solo elemento nada mas
  	function parseWeather(data) {
  		var parsedArray = [];
  		var auxObj = {};
  		angular.forEach(data, function iterateValues(value, key) {
  			auxObj = value;
  			auxObj.weather = angular.isArray(value.weather) && value.weather.length > 0 ? value.weather[0] : {};
  			auxObj.day = $filter('customDateFormat') (auxObj.dt_txt);
  			parsedArray.push(auxObj);
  		});
  		return	parsedArray;
  	}

  	TestService.getData().then(function success(data) {
  		$scope.items = parseWeather(data.data.list);
  		$scope.items = _.uniqBy($scope.items, 'day'); //filtrar dias distintos
  		$scope.selected = $scope.items[0];
  		$scope.selected.index = 0;
  	});

  	$scope.selectDay = function selectDay(index){
  		$scope.selected = $scope.items[index];
  		$scope.selected.index = index;
  	}

}]);

