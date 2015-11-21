app.controller("IndexController", function($scope, $http) {
$http.get('dir/burgers.json').success(function(result){
	    $scope.burgers = result.burgers;
	});
});
   // $scope.numbers = [];
 //    $scope.counter = 0;
 //    $scope.loadMore = function () {
 //      for (var i = 0; i < 2; i++) {
 //          $scope.numbers.push(++$scope.counter);
 //      };
 //    };
    // $scope.loadMore();
    

// app.controller("IndexController", fuction IndexController($scope,burgersService){
// $scope.burgers = burgersService.loadMore();
// $scope.burgersService = burgersService;
// });
// attempt2
// app.controller("IndexController",['$scope','burgersService', function ($scope, burgersService) {
// 	var $scope.success = false,
// 	    $scope.error = false;
 
//       var askForPromise = myService.getPromise();
 
//       askForPromise.then(
//         // OnSuccess function
//         function(answer) {
//           $scope.somethingRight = answer;
//           $scope.success = true;
//         },
//         // OnFailure function
//         function(reason) {
//           $scope.somethingWrong = reason;
//           $scope.error = true;
//         }
//       )
//     }]);

// attempt1
// 	$scope.burgers = [];
// 	var promise = burgersService.getBurgers();
// 		promise.then(function(data){
// 		$scope.burgers = data;
// 	});
// }]);
// app.controller("indexController", function($scope, $http) {
// 	$scope.burgers = [];
//     $http.get("dir/burgers.json")
// 	    .then(function(result) { 
// 		    $scope.burgers = result.burgers;
// 	     });
// });