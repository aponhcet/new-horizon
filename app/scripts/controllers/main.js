'use strict';

/**
 * @ngdoc function
 * @name sheepApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sheepApp
 */
angular.module('sheepApp')
  .controller('MainCtrl', function () {
    this.todos = [
      'Item 1',
      'Item 2',
      'Item 3'
    ];
  });
