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
  app.controller('PublicacionCtrl', function ($scope) {

  $scope.posts = [
   {
         title:'Post 1 Lorem ipsum dolor',
         image:'1',
         text:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa'
   },
   {
         title:'Post 2 Lorem ipsum dolor',
         image:'2',
         text:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa'
   },
      {
         title:'Post 3 Lorem ipsum dolor',
         image:'3',
         text:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa'
   },
      {
         title:'Post 4 Lorem ipsum dolor',
         image:'4',
         text:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa'
   }

    ];

      $scope.news = [
   {
         title:'New 1 Lorem ipsum dolor',
         image:'1',
         text:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa'
   },
   {
         title:'New 2 Lorem ipsum dolor',
         image:'2',
         text:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa'
   },
      {
         title:'New 3 Lorem ipsum dolor',
         image:'3',
         text:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa'
   },
      {
         title:'New 4 Lorem ipsum dolor',
         image:'4',
         text:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa'
   }

    ];

      $scope.events = [
   {
         title:'Event 1 Lorem ipsum dolor',
         image:'1',
         text:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa'
   },
   {
         title:'Event 2 Lorem ipsum dolor',
         image:'2',
         text:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa'
   },
      {
         title:'Event 3 Lorem ipsum dolor',
         image:'3',
         text:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa'
   },
      {
         title:'Event 4 Lorem ipsum dolor',
         image:'4',
         text:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa'
   }

    ];

      $scope.series = [
   {
         title:'Series 1 Lorem ipsum dolor',
         image:'1',
         text:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa'
   },
   {
         title:'Series 2 Lorem ipsum dolor',
         image:'2',
         text:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa'
   },
      {
         title:'Series 3 Lorem ipsum dolor',
         image:'3',
         text:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa'
   },
      {
         title:'Series 4 Lorem ipsum dolor',
         image:'4',
         text:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa'
   }

    ];


});

angular.module('angular-material')
  app.controller('MenuCtrl', function ($scope) {

});

