'use strict';

describe('Controller: EditinterventionCtrl', function () {

  // load the controller's module
  beforeEach(module('assessmentGeneratorApp'));

  var EditinterventionCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EditinterventionCtrl = $controller('EditinterventionCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
