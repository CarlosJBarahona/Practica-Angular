var app = angular.module('angular-material', ['ngMaterial']);
app.controller('NavbarCtrl', function($scope, $mdSidenav) {
  $scope.openLeftMenu = function() {
    $mdSidenav('left').toggle();
  };
  $scope.closeLeftMenu = function() {
    $mdSidenav('left').close();
  };
  $scope.noticias = [
   {
         title:'Lorem ipsum dolor',
         image:'5',
         text:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa'
   },
   {
         title:'Lorem ipsum dolor',
         image:'6',
         text:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa'
   }
    ];
});

'use strict';

angular.module('angular-material')
  app.controller('MainCtrl', function ($scope) {

  $scope.slides = [
   {
         title:'Lorem ipsum dolor',
         image:'1',
         text:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa'
   },
   {
         title:'Lorem ipsum dolor',
         image:'2',
         text:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa'
   },
      {
         title:'Lorem ipsum dolor',
         image:'3',
         text:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa'
   },
      {
         title:'Lorem ipsum dolor',
         image:'4',
         text:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa'
   }

    ];

});

angular.module('angular-material')
  app.controller('MenuCtrl', function ($scope) {

});

  

angular.module('progressCircularDemo1', ['ngMaterial'])
  .controller('AppCtrl', ['$scope', '$interval',
    function($scope, $interval) {
      $scope.mode = 'query';
      $scope.determinateValue = 30;
      $interval(function() {
        $scope.determinateValue += 1;
        if ($scope.determinateValue > 100) {
          $scope.determinateValue = 30;
        }
      }, 100, 0, true);
    }
  ]);

