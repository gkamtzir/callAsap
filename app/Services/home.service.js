(function() {
  "use strict";

  angular.module("callAsap")
    .factory("homeFactory", homeFactory);

  homeFactory.$inject = ["$http"];

  function homeFactory($http) {

    return {

      getCountry: function(ip) {

        return $http.get("http://ip-api.com/json/" + ip);

      }

    }

  }


})();
