(function() {

  angular.module('two-cents')
         .controller('main-controller', MainController);

  MainController.$inject = ['$scope'];

  function MainController($scope){
    $scope.testing = 'This is a test...';
  }

}());
