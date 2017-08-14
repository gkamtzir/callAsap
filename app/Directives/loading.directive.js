(function() {

  angular.module('callAsap')
    .directive('loading', loading);

    loading.$inject = ['$http'];

    function loading($http) {

      return {
          restrict: 'E',
          template: '<h3><img src=\'http://www.nasa.gov/multimedia/videogallery/ajax-loader.gif\' width=\'20\' height=\'20\' />LOADING...</h3>',
          link: function (scope, elm, attrs)
          {
              scope.isLoading = function () {
                  return $http.pendingRequests.length > 0;
              };

              scope.$watch(scope.isLoading, function (v)
              {
                  if(v){
                      elm.show();
                  }else{
                      elm.hide();
                  }
              });
          }
      };

    }

})();
