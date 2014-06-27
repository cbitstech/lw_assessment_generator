'use strict';

angular.module('assessmentGeneratorApp')
  .controller('EditCtrl', function ($scope,$routeParams) {


    $scope.currentInterventions = JSON.parse(localStorage.interventions);
  });
