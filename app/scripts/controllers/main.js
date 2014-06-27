'use strict';

angular.module('assessmentGeneratorApp')
  .controller('MainCtrl', function ($scope) {
    
  	if (localStorage.interventions == undefined){

  		localStorage.interventions = JSON.stringify([]);

  	}

    $scope.contentAreas = ['Well','At Risk - Routine','At Risk - Sleep','At Risk - Medication'];
  	$scope.currentselectedArea = "";

  	$scope.levelNames = [{order:0,label:'Initial Feedback'},{order:1,label:"First Assessment"},{order:2,label:"Second Assessment"},{order:3,label:"Psychoeducation"},{order:4,label:"Suggestions"},{order:5,label:"Final Feedback"}];
  	// $scope.maxAllowedResponses = 5;
  	$scope.allowedResponses = [{order:1,label:'Response 1'},{order:2,label:'Response 2'},{order:3,label:'Response 3'},{order:4,label:'Response 4'},{order:5,label:'Response 5'}];

  	$scope.addTextField = function(name){
  			var formFieldTemplate = '<input type="text" name="' + name +'">';
  			angular.element('#' + name).append(formFieldTemplate);
  	}

  	$scope.responseLevels = [1,2,3,4,5];

		$.fn.serializeObject = function()
		{
		    var o = {};
		    var a = this.serializeArray();
		    $.each(a, function() {
		        if (o[this.name] !== undefined) {
		            if (!o[this.name].push) {
		                o[this.name] = [o[this.name]];
		            }
		            o[this.name].push(this.value || '');
		        } else {
		            o[this.name] = this.value || '';
		        }
		    });
		    return o;
		};

	var guid = (function() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
               .toString(16)
               .substring(1);
  }
  return function() {
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
           s4() + '-' + s4() + s4() + s4();
  };
})();

		$scope.addIntervention = function(formId){

			var interventionToAdd = $('#'+formId).serializeObject();
			interventionToAdd.guid = guid();

			var currentLocalInterventions = JSON.parse(localStorage.interventions);
			currentLocalInterventions.push(interventionToAdd);

			localStorage.interventions = JSON.stringify(currentLocalInterventions);
			window.location.href="#/edit";
		}




  });
