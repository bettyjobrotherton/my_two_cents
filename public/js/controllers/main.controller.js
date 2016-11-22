(function() {

  angular.module('two-cents')
         .controller('main-controller', MainController);

  MainController.$inject = ['$scope', 'PostService'];

  function MainController($scope, PostService){
    $scope.testing = 'This is a test...';
  }

}());
