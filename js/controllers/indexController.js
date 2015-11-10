app.controller("indexController", function($scope, $http) {
	$scope.burgers = [];
    $http.get("dir/burgers.json")
	    .then(function(result) { 
		    $scope.burgers = result.burgers;
	     });
});