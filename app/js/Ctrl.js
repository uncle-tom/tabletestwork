angular
	.module('app', [])
	.controller('Ctrl', Ctrl)
	.service('get_colors', function($http) {
    return function(filename) {
      return $http.get(filename)
    }
  })

	function Ctrl($scope, $http, get_colors) {
    get_colors('../data.json').success(function(data, config, status, headers){
      $scope.data = data;
    });	
	}