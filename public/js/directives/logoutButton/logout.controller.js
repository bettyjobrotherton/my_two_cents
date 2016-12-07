(function() {
  angular.module('two-cents')
         .controller("LogoutController", LogoutController);

  LogoutController.$inject = ['$scope', 'AuthService', '$location'];

  function LogoutController($scope, AuthService, $location){
    $scope.logout = logout;

    function logout(){
      AuthService.logout();
      $location.path('/login');
    }
  }
}());
