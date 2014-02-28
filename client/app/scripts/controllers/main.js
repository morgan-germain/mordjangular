'use strict';

var clientApp = angular.module('clientAppControllers', ['ui.bootstrap']);

clientApp.controller('ClientAppCtrl', function ($scope, $modal, $log) {
    $scope.awesomeThings = [
      {name: 'HTML5 Boilerplate', content: 'HTML5 Boilerplate is a professional front-end template for building fast, robust, and adaptable web apps or sites.'},
      {name: 'AngularJS', content: 'AngularJS is a toolset for building the framework most suited to your application development.'},
      {name: 'Karma', content: 'Spectacular Test Runner for JavaScript.'},
    ];

    // Modal handler
    $scope.items = ['item1', 'item2', 'item3'];
    $scope.open = function () {

      var modalInstance = $modal.open({
        templateUrl: 'views/subviews/login.html',
        controller: 'ModalInstanceCtrl',
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

clientApp.controller('ModalInstanceCtrl', function ($scope, $modalInstance, items) {

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

  $scope.downloadFile = function() {
    var a = document.createElement('a');
    a.href   = 'http://releases.ubuntu.com/12.04.4/ubuntu-12.04.4-desktop-amd64.iso';
    a.target   = '_blank';
    a.download = 'myGenymotion.exe';
    document.body.appendChild(a);
    a.click();

    window.location = 'https://www.google.it';
  };
});