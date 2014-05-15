var App = angular.module('App', []);

var controllers = {};

controllers.GetNamesController = function($scope, $http) {
  $http.get('C:/Users/owner/Documents/GitHub/learningangular/names.json/')
       .then(function(res){
          $scope.names = res.data;
        });
};

controllers.GetMenuController = function($scope, $http) {
  $scope.selectedIndex = 0;
  $http.get('menu.json')
       .then(function(res){
          $scope.menu = res.data;
        });

  $scope.itemClicked = function ($index) {
      console.log($index);
      $scope.selectedIndex = $index;
  }

}

// controllers.GetStuffFromServer = function($scop,$http){
//   $http.get('http://msu2u.net/~travis/getData.php')
//        .then(function(res){
//           $scope.
//        });
// }

App.controller(controllers);
