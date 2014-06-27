'use strict';

    if (localStorage.interventions == undefined){

      localStorage.interventions = JSON.stringify([]);

    }

angular.module('assessmentGeneratorApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/edit', {
        templateUrl: 'views/edit.html',
        controller: 'EditCtrl'
      })
      .when('/dump', {
        templateUrl: 'views/dump.html',
        controller: 'DumpCtrl'
      })
      .when('/editIntervention/:guid', {
        templateUrl: 'views/editintervention.html',
        controller: 'EditinterventionCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
