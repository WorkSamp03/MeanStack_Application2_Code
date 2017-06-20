exports.UserMenuController = function($scope, $user) {
  $scope.user = $user;

  setTimeout(function() {
    $scope.$emit('UserMenuController');
  }, 0);
};

exports.ProductDetailsController = function($scope, $routeParams, $http) {
 
  var encoded = encodeURIComponent($routeParams.id);
   console.log('--------------------------');
  console.log($routeParams.id);
   console.log(encoded);
  console.log('-------------------------------');

  $http.
    get('/api/v1/product/id/' + encoded).
    success(function(data) {
      $scope.product = data.product;
    });

  setTimeout(function() {
    $scope.$emit('ProductDetailsController');
  }, 0);
};
