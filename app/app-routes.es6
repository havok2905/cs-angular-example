(function () {
  'use strict';

  angular
    .module('csAngularExample')
    .config(config);

  function config($urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');
  }
}());
