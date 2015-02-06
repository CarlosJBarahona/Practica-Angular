/**
 * HomeController
 *
 * @description :: Server-side logic for managing homes
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

 module.exports = {
 	index : function(req,res){
 		res.view({
 			meta : {
 				controller : 'index.ejs',
 			},
 		});
 	}
};

(function(){
	"use strict";

 var app = angular.module('angular-material', ['ngMaterial'])
  .controller('AppCtrl', function($scope, $timeout, $mdSidenav, $log) {
    $scope.toggleLeft = function() {
      $mdSidenav('left').toggle()
                        .then(function(){
                            $log.debug("toggle left is done");
                        });
    };
    $scope.toggleRight = function() {
      $mdSidenav('right').toggle()
                          .then(function(){
                            $log.debug("toggle RIGHT is done");
                          });
    };
  })
  .controller('LeftCtrl', function($scope, $timeout, $mdSidenav, $log) {
    $scope.close = function() {
      $mdSidenav('left').close()
                        .then(function(){
                          $log.debug("close LEFT is done");
                        });
    };
  })
  .controller('RightCtrl', function($scope, $timeout, $mdSidenav, $log) {
    $scope.close = function() {
      $mdSidenav('right').close()
                          .then(function(){
                            $log.debug("close RIGHT is done");
                          });
    };
  });
})();