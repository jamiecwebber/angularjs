var appX = angular.module('mainApp', [])

appX.controller('app', function($scope) {
	$scope.searchEnter = function() {
		if (event.which == 13) {
			$scope.addTask();
		}
	};
	$scope.addTask = function() {
		console.log("yea");
	}
})