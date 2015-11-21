app.service("burgersService", ['$http','$q', function($http, $q)
// {
// 	var deferred = $q.defer();
// 	$http.get('dir/burgers.json').then(function(data)
// 	{
// 		deferred.resolve(data);
// 	});

// 	this.getBurgers = function ()
// 	{
// 		return deferred.promise;
// 	};
// }]);
 var deferObject,
      myMethods = {
 
        getPromise: function() {
          var promise       =  $http.get('/dir/burgers.json'),
                deferObject =  deferObject || $q.defer();
 
                promise.then(
                  // OnSuccess function
                  function(answer){
                    // This code will only run if we have a successful promise.
                    deferObject.resolve(answer);
                  },
                  // OnFailure function
                  function(reason){
                    // This code will only run if we have a failed promise.
                    deferObject.reject(reason);
                  });
 
           return deferObject.promise;
          }
       };
 
       return myMethods;
 
    }]);