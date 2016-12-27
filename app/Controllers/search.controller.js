(function(){
  "use strict";

  angular.module("callAsap")
    .controller("SearchController", SearchController);

  SearchController.$inject = ["$scope", "$state", "searchService"];

  function SearchController($scope, $state, searchService){

    $scope.$state = $state;

    $scope.country = "";
    $scope.countries = "";
    $scope.emergencies = ""
    $scope.error = "";

    searchService.getCountries()
      .then(function(response) {

        $scope.countries = response.data;

      },
        function(response) {

          $scope.error = response.data;

        }
      );

    $scope.$watch("country", function(newVal, oldVal){

      searchService.getEmergencyPhoneNumbers(newVal.Name)
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
