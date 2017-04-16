'use strict';

/* Directives */

angular.module('App').directive('addFade', function($timeout, $animate) {
  return {
    scope: {
      'addFade': '=',
    },
    link: function(scope, element) {
      scope.$watch('addFade', function(value, oldvalue) {
        if (value!= undefined && oldvalue!= undefined && value!=oldvalue) {
         $animate.addClass(element, 'fade-in').then(function() {
             element.removeClass('fade-in');
         });
        }
      });
    }
  }
})
