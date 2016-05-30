/* global angular */

var app = angular.module('peachApp', ['ngAnimate','angular-loading-bar','ngGeolocation','ui.router']);

app.config(['cfpLoadingBarProvider', function(cfpLoadingBarProvider) {
  cfpLoadingBarProvider.parentSelector = '#loading-bar-container';
  cfpLoadingBarProvider.spinnerTemplate = '<div class="load-text"><img src="images/peach-logo.png" alt="Peach" /><span class="text">Carregando...</span></div>';
  cfpLoadingBarProvider.includeSpinner = true;
}]);

// Definindo Rotas
app.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $stateProvider
      .state('list', {
          url: './peach-app/dist/',
          templateUrl: 'list.html',
          controller: 'listagemController'
      })
      .state('detail', {
          url: '/detail/:id',
          templateUrl: 'detail.html',
          controller: 'detailController'
      });


    $urlRouterProvider.otherwise('./peach-app/dist/');

    // Utilizando o HTML5 History API
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
});



app.controller('listagemController', ['$scope', '$http','$geolocation', function($scope, $http,$geolocation) {
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

            $scope.contents = response.data;
            console.log('Recebendo resultado');
            console.log($scope.contents[1].id);
        }, function myError(response) {
            console.log(response);
        });

    });
}]);

app.controller('detailController', ['$scope', '$http','$stateParams', function($scope, $http,$stateParams) {
//   function($scope, $http, $routeParams) {
//     $scope.detailId = $routeParams.detailId;
//     $http.get('http://peach-api.azurewebsites.net/api/Products/1').success(function(data) {
//       $scope.contents = data;
//     });
            console.log('Entrando em Detalhes');
            console.log($stateParams.id);

        var url = "https://peach-api.azurewebsites.net/api/Products/";

        $http({
            method: "GET",
            url: url + $stateParams.id,
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        }).then(function mySucces(response) {

            $scope.content = response.data;
            console.log('Recebendo resultado Detalhe');
            console.log($scope.content.id);
        }, function myError(response) {
            console.log(response);
        });
 }]);
