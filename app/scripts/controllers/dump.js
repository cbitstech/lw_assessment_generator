'use strict';

angular.module('assessmentGeneratorApp')
  .controller('DumpCtrl', function ($scope) {
     
     $scope.currentInterventions = JSON.parse(localStorage.interventions);


     $scope.downloadFile = function(){window.open("data:text/json;charset=utf-8," + escape(localStorage.interventions))};

});
