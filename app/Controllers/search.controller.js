(function(){
  "use strict";

  angular.module("callAsap")
    .controller("SearchController", SearchController);

  SearchController.$inject = ["$scope", "$state", "searchFactory"];

  function SearchController($scope, $state, searchFactory){

    $scope.$state = $state;

    $scope.country = "";
    $scope.countries = "";
    $scope.emergencies = ""
    $scope.error = "";

    searchFactory.getCountries()
      .then(function(response) {

        $scope.countries = response.data;

      },
        function(response) {

          $scope.error = response.data;

        }
      );

    $scope.$watch("country", function(newVal, oldVal){

      searchFactory.getEmergencyPhoneNumbers(newVal.Name)
        .then(function(response) {
          
          $scope.emergencies = response.data;

        },
          function(response) {

            $scope.error = response.data;

          }
      );

    });


    $scope.submit = function() {


    };

  }

})();
