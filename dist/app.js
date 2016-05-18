/* global angular */

var app = angular.module('peachApp', ['ngRoute','ngAnimate','angular-loading-bar']);

app.config(['cfpLoadingBarProvider', function(cfpLoadingBarProvider) {
  cfpLoadingBarProvider.parentSelector = '#loading-bar-container';
  cfpLoadingBarProvider.spinnerTemplate = '<div class="load-text"><img src="images/peach-logo.png" alt="Peach" /><span class="text">Carregando...</span></div>';
  cfpLoadingBarProvider.includeSpinner = true;
}]);

app.controller('listagem', ['$scope', '$http', function($scope, $http) {
  $http.get('http://peach-api.azurewebsites.net/api/Products/-23.84564988765934%20-47.434844970703125/100').success(function(data) {
    $scope.contents = data;
  });
}]);

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
  when('/list', {
    templateUrl: 'index.html'
  }).
  otherwise({
    redirectTo: '/'
  });
}]);
