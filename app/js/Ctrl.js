angular
	.module('app', [])
	.controller('Ctrl', Ctrl);

	function Ctrl($scope, $http) {
		$http.get('../data.json').success(function(data, config, status, headers){
			$scope.data = data;
		});	
	}
	

