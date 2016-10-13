(function() {
  'use strict';

  var app = angular.module('cameraApp', []);

  $('select').material_select();

  app.filter('orderStars', () => {
    return (number) => {
      let stars = '';
      for (var i = 0; i < number; i++) {
        stars += '🌟';
      }
      return stars;
    }
  });

})();
