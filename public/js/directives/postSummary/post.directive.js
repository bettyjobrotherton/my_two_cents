(function() {
  angular.module('two-cents')
      .directive('postSummary', PostSummaryDirective);

  PostSummaryDirective.$inject = [];

  function PostSummaryDirective(){
    return {
      restrict: 'EA',
      controller: 'PostController',
      templateUrl: 'js/directives/postSummary/post.view.html',
      scope: {
        data: '<'  //defines what information we want to be piped in, but not out
      }
    };
  }
}());
