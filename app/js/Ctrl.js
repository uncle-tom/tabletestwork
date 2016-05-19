angular
	.module('app', [])
	.controller('Ctrl', Ctrl);

	$http.get('data.json').success(data, config, status, headers) {
		$scope.data = data;
	}

