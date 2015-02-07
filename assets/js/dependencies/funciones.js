
(function(){
  "use strict";

 var app = angular.module('angular-material', ['ngMaterial'])
  .controller('AppCtrl', function($scope, $timeout, $mdSidenav, $log) {
    $scope.close = function() {
      $mdSidenav('left').toggle()
                          .then(function(){
                            $log.debug("Mostrar");
                          });
    };
  })
  .controller('BarraCtrl', function($scope, $timeout, $mdSidenav, $log) {
    $scope.ocultar = function() {
      $mdSidenav('left').close()
                          .then(function(){
                            $log.debug("close RIGHT is done");
                          });
    };
  });
})();