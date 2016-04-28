/* global angular */

var app = angular.module('peachApp', []);

app.controller('listagem', ['$scope', '$http', function ($scope, $http) {
	$http.get('http://peach-api.azurewebsites.net/api/Products/-23.84564988765934%20-47.434844970703125/100').success(function (data) {
		$scope.contents = data;
	});

    $scope.limit = 100;
    $scope.setLimit = function (lim) {
        $scope.limit = (lim <= 0) ? $scope.contents.length : lim;
    };
}]);
