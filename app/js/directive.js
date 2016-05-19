angular
	.module('app', [])
	.directive('tabletestwork', function(){
  	return {
        template:   
					  '<div class="test" ng-repeat="as in data.colorsArray">' +
    					'<table>' +
                '<tr>' +
                  '<td>{{as.colorName}}</td>' +
                  '<td>{{as.hexValue}}</td>' +
                '</tr>' +
              '</table>' +
            '</div>',
        restrict: 'E',
    };
  });