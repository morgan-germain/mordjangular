'use strict';

var mainModule = angular.module('mainModule', []);

mainModule.controller('mainCtrl', function ($scope, $modal, $log) {
    $scope.awesomeThings = [
      {name: 'HTML5 Boilerplate', content: 'HTML5 Boilerplate is a professional front-end template for building fast, robust, and adaptable web apps or sites.'},
      {name: 'AngularJS', content: 'AngularJS is a toolset for building the framework most suited to your application development.'},
      {name: 'Karma', content: 'Spectacular Test Runner for JavaScript.'},
    ];

    // Modal handler
    $scope.items = ['item1', 'item2', 'item3'];
    $scope.open = function () {

      var modalInstance = $modal.open({
        templateUrl: 'views/subviews/modal.html',
        controller: 'modalInstanceCtrl',
        resolve: {
          items: function () {
            return $scope.items;
          }
        }
      });

      modalInstance.result.then(function (selectedItem) {
        $scope.selected = selectedItem;
      }, function () {
        $log.info('Modal dismissed at: ' + new Date());
      });
    };
  });

// Please note that $modalInstance represents a modal window (instance) dependency.
// It is not the same as the $modal service used above.

mainModule.controller('modalInstanceCtrl', function ($scope, $modalInstance, items) {

  $scope.items = items;
  $scope.selected = {
    item: $scope.items[0]
  };

  $scope.ok = function () {
    $modalInstance.close($scope.selected.item);
  };

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };
});