
var clickevent = angular.module('clickevent', ['ngMaterial' , 'ngTouch']);
/*clickevent.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
	$locationProvider.html5Mode(true);
	$stateProvider.state('clickevent', {
		url : '/',
		views : {
			'header' : {
				templateUrl : 'templates/header.html',
			},
			'content' : {
				templateUrl : 'templates/clickevent.html',
			},
		}
	})
	$urlRouterProvider.otherwise('/');
});*/

clickevent.controller('clickevent', function($scope, $http) {

	 $scope.onSwipeLeft = function(ev) {
	    $http({
			method : "GET",
			url : '/invoke/click?leftSwipe=true'
		}).success(function(data) {
			alert(data.js);
		}).error(function(error) {
			alert("An error occurred! Please try again later!");
		});
	 };
	 $scope.onSwipeRight = function(ev) {
	    $http({
			method : "GET",
			url : '/invoke/click?rightSwipe=true'
		}).success(function(data) {
			alert(data.js);
		}).error(function(error) {
			alert("An error occurred! Please try again later!");
		});
	 };
	 $scope.onSwipeUp = function(ev) {
	    $http({
			method : "GET",
			url : '/invoke/click?upSwipe=true'
		}).success(function(data) {
			alert(data.js);
		}).error(function(error) {
			alert("An error occurred! Please try again later!");
		});
	 };
	 $scope.onSwipeDown = function(ev) {
	    $http({
			method : "GET",
			url : '/invoke/click?downSwipe=true'
		}).success(function(data) {
			alert(data.js);
		}).error(function(error) {
			alert("An error occurred! Please try again later!");
		});
	 };
})