var App = angular.module('App', []);

var controllers = {};

controllers.GetNamesController = function($scope, $http) {
  $http.get('names.json')
       .then(function(res){
          $scope.names = res.data;
        });
};

controllers.GetMenuController = function($scope, $http) {
  $http.get('menu.json')
       .then(function(res){
          $scope.menu = res.data;
        });
}

App.controller(controllers);
