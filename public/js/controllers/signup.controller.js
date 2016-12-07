(function() {
  angular.module('two-cents')
    .controller('SignUpController', SignUpController);

  SignUpController.$inject = ['$scope', 'AuthService'];

  function SignUpController($scope, AuthService){
    $scope.signup = signup;

    function signup(newUser){
      AuthService.signup(newUser)
                 .then(function(){
                   alert('Yayyy!!! Signing up!');
                 })
                 .catch(function(){
                   $scope.newUser = {};
                   alert('Yo stuff be broke!');
                 });
    }
  }
}());
