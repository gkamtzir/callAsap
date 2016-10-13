(function(){

  angular.module("callAsap")
    .controller("HomeController", HomeController);

  HomeController.$inject = ["$scope", "$state", "homeFactory", "searchFactory"];

  function HomeController($scope, $state, homeFactory, searchFactory){

    $scope.state = "Home Page";

    $scope.ip = "";
    $scope.country = "";

    $scope.error = "";
    $scope.$state = $state;

    homeFactory.getCountry($scope.ip)
      .then(function(response) {

        $scope.response = response.data;

        if($scope.response.status == "fail") {

          $scope.error = "Sorry. We could figure out the country you are currently at.";

        } else {

          searchFactory.getCountry($scope.response.country)
            .then(function(response) {

              $scope.country = response.data;

            },
              function(response){

                $scope.error = response.data;

              }
          );

        }

      },
        function(response) {

          $scope.error = response.data;

      }
    );

  }

})();
