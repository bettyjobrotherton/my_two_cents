(function() {
  angular.module('two-cents')
    .factory('AuthService', AuthService);

  AuthService.$inject = [];

  function AuthService(){

    return {
      currentUser: currentUser,
      saveToken: saveToken,
      getToken: getToken,
      isLoggedIn: isLoggedIn,
      signup: signup,
      login: login,
      logout: logout
    };

    function currentUser(){}
    function saveToken(token){}
    function getToken(){}
    function isLoggedIn(){}
    function signup(user){}
    function login(user){}
    function logout(){}
  }
}());
