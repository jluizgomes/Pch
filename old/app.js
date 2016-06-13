/* global angular */

var app = angular.module('peachApp', ['ngAnimate','angular-loading-bar','ngGeolocation','ui.router']);

app.config(['cfpLoadingBarProvider', function(cfpLoadingBarProvider) {
  cfpLoadingBarProvider.parentSelector = '#loading-bar-container';
  cfpLoadingBarProvider.spinnerTemplate = '<div class="load-text"><img src="images/peach-logo.png" alt="Peach" /><span class="text">Carregando...</span></div>';
  cfpLoadingBarProvider.includeSpinner = true;
}]);

app.controller('listagem', ['$scope', '$http','$geolocation', function($scope, $http,$geolocation) {
     $scope.$geolocation = $geolocation
    var url = "https://peach-api.azurewebsites.net/api/Products/";
    // basic usage
    $geolocation.getCurrentPosition().then(function (location) {
        $scope.location = location

        $http({
            method: "GET",
            url: url + location.coords.latitude + ' ' + location.coords.longitude + '/100',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        }).then(function mySucces(response) {
            console.log(response.data);
            $scope.contents = response.data;
        }, function myError(response) {
            console.log(response);
        });

    });
}]);

app.controller('detailController', ['$scope', '$http', function($scope, $http) {
//   function($scope, $http, $routeParams) {
//     $scope.detailId = $routeParams.detailId;
//     $http.get('http://peach-api.azurewebsites.net/api/Products/1').success(function(data) {
//       $scope.contents = data;
//     });
 }]);

// Definindo Rotas
app.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {   

    $stateProvider
      .state('home', {
          url: '/',
          templateUrl: 'index',
          controller: 'DemoController'
      })
       .state('detail', {
          url: '/detail',
          templateUrl: 'detail',
          controller: 'detailController'
      })
      //.state('detail', {
      //    url: '/detail/:id',
      //    templateUrl: 'detail.html',
      //    controller: 'detailController'
      //});

    $urlRouterProvider.otherwise('/');

    // Utilizando o HTML5 History API
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
});
