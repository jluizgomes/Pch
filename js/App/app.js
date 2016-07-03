/* global angular */

var app = angular.module('peachApp', ['ngAnimate', 'ngGeolocation', 'ui.router', 'angular-loading-bar']);

app.config(['cfpLoadingBarProvider', function(cfpLoadingBarProvider) {
  cfpLoadingBarProvider.parentSelector = '#loading-bar-container';
  cfpLoadingBarProvider.spinnerTemplate = '<div class="load-text"><span class="text">Carregando...</span></div>';
  cfpLoadingBarProvider.includeSpinner = true;
}]);

// Definindo Rotas
app.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
   $urlRouterProvider.otherwise('/'); 
   
    $stateProvider
      .state('Home', {
          url: '/',
          templateUrl: 'Agree.html',
          controller:  'AgreeController'
      })
        .state('List', {
            url: '/List',
            templateUrl: 'List.html',
            controller: 'ListController'
        })
      
      .state('detail', {
          url: '/detail/:id',
          templateUrl: 'detail.html',
          controller: 'detailController'
      });
      

    

    //Utilizando o HTML5 History API

});

app.run(function ($rootScope, $templateCache) {
    $rootScope.$on('$viewContentLoaded', function () {
        $templateCache.removeAll();
    });
});

app.controller('AgreeController', ['$scope', '$geolocation', '$state', '$rootScope', '$http', function ($scope, $geolocation, $state, $rootScope, $http) {
    $rootScope.lat = '-23.5459462';
    $rootScope.long = '-46.6910489';    
    $rootScope.LocationOK = false;
    $scope.LocationText = "Me Encontre";
    $scope.GetMyLocation = function () {
        console.log("GotoHome");
        //$geolocation.getCurrentPosition().then(function (location) {
        //    $rootScope.lat = location.coords.latitude;
        //    $rootScope.long = location.coords.longitude;
        //    console.log('Peguei a Localizacao Home');
        //    console.log(JSON.stringify($rootScope.lat));
        //    console.log(JSON.stringify($rootScope.long));
        //    $rootScope.LocationOK = true;
        //    $scope.LocationText = "Encontrado";
        //    //$state.go('List');
        //});

        if (navigator.geolocation) navigator.geolocation.getCurrentPosition(onPositionUpdate);

        function onPositionUpdate(position) {
            $rootScope.lat = position.coords.latitude;
            $rootScope.long = position.coords.longitude;

            var url = "https://maps.googleapis.com/maps/api/geocode/json?latlng=" + $rootScope.lat + "," + $rootScope.long + "&sensor=true";
            $http.get(url)
                .then(function (result) {
                    var address = result.data.results[2].formatted_address;
                    console.log(result.data.results[8].formatted_address);
                    console.log(result.data.results);

                    $rootScope.LocationOK = true;
                    $scope.LocationText = result.data.results[11].address_components[0].long_name;
                    //$scope.address = address;
                });
        }
        
    };

    $scope.GoToList = function () {
        if ($scope.LocationOK == true) {
            console.log($scope.LocationOK);
            $state.go('List');
        }
             
    };

    //$scope.FnLocationOK = function () {
    //    return $scope.LocationOK;
    //};

}]);


app.controller('detailController', ['$scope', '$http','$stateParams', function($scope, $http,$stateParams) {

            console.log('Entrando em Detalhes');
            console.log($stateParams.id);
            $scope.content = [];

        var url = "https://peach-api-dev.azurewebsites.net/api/Products/";
        
        $http({
            method: "GET",
            url: url + $stateParams.id,
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        }).then(function mySucces(response) {
            
            $scope.content = response.data;
            console.log('Recebendo resultado Detalhe teste');
            console.log($scope.content);
        }, function myError(response) {
            console.log(response);
        });
 }]);


app.controller('ListController', function ($scope, $http, $rootScope, $state) {
    //$scope.$geolocation = $geolocation;
    //var lat = '-23.5459462';
    //var long = '-46.6910489';
    var url = "https://peach-api-dev.azurewebsites.net/api/Products/";
    var num = 0;
    $scope.contents = [];  

    
    $scope.loadMore = function () {
        $http({
            method: "GET",
            url: url + $rootScope.lat + ' ' + $rootScope.long + '/' + num,
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            cache: false
        }).then(function mySucces(response) {
            //console.log(url + lat + ' ' + long + '/' + num);
            if (response.data.length > 0) {
                $scope.contents = $scope.contents.concat(response.data);
                num = $scope.contents.length;
            }

        }, function myError(response) {
            console.log(response);            
        });
    };

    if ($rootScope.LocationOK == true)
    {
        $scope.loadMore();
    }
    else
    {
        $state.go('Home');
    }

    
});
