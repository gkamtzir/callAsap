(function(){

angular.module("app")
  .factory("serviceFactory", serviceFactory);

  serviceFactory.$inject = ["$scope", "$http"];

  function serviceFactory($scope, $http) {

    return {

      getCountry: function(country) {

        return $http.get("api.php/country/" + country);

      },

      getEmergencyPhoneNumbers: function(country) {

        return $http.get("api.php/country/emergency/" + country);

      }

    }

  }


})();
