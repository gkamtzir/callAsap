(function() {
  "use strict";

  angular.module("callAsap")
    .factory("homeService", homeService);

  homeService.$inject = ["$http"];

  function homeService($http) {

    return {

      getCountry: function(ip) {

        return $http.get("http://ip-api.com/json/" + ip);

      }

    }

  }


})();
