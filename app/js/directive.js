angular
	.module('app')
	.directive('tabletestwork', function(){
  	return {
        template:   
					  '<div class="test" ng-repeat="as in data.colorsArray">' +
    					'<table>' +
                '<tr>' +
                  '<td>{{as.colorName}}</td>' +
                  '<td style="background-color:{{as.hexValue}}">{{as.hexValue}}</td>' +
                '</tr>' +
              '</table>' +
            '</div>',
        restrict: 'E',
    };
  });