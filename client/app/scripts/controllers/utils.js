'use strict';

var utilsModule = angular.module('utils', []);

utilsModule.controller('modalController', function ($scope, $modal, $log) {

    // Modal handler
    $scope.items = ['item1', 'item2', 'item3'];
    $scope.open = function () {

      var modalInstance = $modal.open({
        templateUrl: 'views/subviews/auth-login-modal.html',
        controller: 'modalInstanceSubCtrl',
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

utilsModule.controller('modalInstanceSubCtrl', function ($scope, $modalInstance, items) {

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