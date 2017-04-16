'use strict';

/* Filters */

angular.module('App').filter('customDateFormat', function customDateFormat($filter){
  return function filterDate(text){
    var  tempdate = new Date(text.replace(/-/g,"/"));
    return $filter('date')(tempdate, "MMM-dd");
  }
});

