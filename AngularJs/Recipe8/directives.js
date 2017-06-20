exports.categoryProducts = function() {
  return {
    controller: 'CategoryProductsController',
    templateUrl: '/Recipe8/templates/category_products.html'
  }
};

exports.categoryTree = function() {
  return {
    controller: 'CategoryTreeController',
    templateUrl: '/Recipe8/templates/category_tree.html'
  }
};

exports.navBar = function() {
  return {
    controller: 'NavBarController',
    templateUrl: '/Recipe8/templates/nav_bar.html'
  };
};

exports.productDetails = function() {
  return {
    controller: 'ProductDetailsController',
    templateUrl: '/Recipe8/templates/product_details.html'
  };
};
