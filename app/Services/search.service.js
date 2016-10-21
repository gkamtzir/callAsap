(function(){
  "use strict";

  angular.module("callAsap")
    .factory("searchFactory", searchFactory);

    searchFactory.$inject = ["$http"];

    function searchFactory($http) {

      return {

        getCountries: function() {

          return $http.get("http://83.212.115.201/api.php/country");

        },

        getCountry: function(country) {

          return $http.get("http://83.212.115.201/api.php/country/" + country);

        },

        getEmergencyPhoneNumbers: function(country) {

          return $http.get("http://83.212.115.201/api.php/country/emergency/" + country);

        }

      }

    }


})();
