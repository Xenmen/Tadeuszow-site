'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
	'ngRoute'
]).
config(['$routeProvider', function($routeProvider) {

	$routeProvider.when('/', {
	templateUrl: '/home.html',
	controller: 'defaultCtrl'
	});

	$routeProvider.when('/:topic', {
	templateUrl: '/topic.html',
	controller: 'defaultCtrl'
	});

	$routeProvider.when('/:topic/:subject', {
	templateUrl: '/topic_subject.html',
	controller: 'defaultCtrl'
	});

	$routeProvider.otherwise({redirectTo: '/'});
}])

.controller('defaultCtrl', function($scope, $routeParams) {
	$scope.name = "defaultCtrl";
	$scope.params = $routeParams;
})

.controller('pooCtrl', [function() {

}]);
