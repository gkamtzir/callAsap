(function(){

  angular.module('callAsap')
    .controller('HomeController', HomeController);

  HomeController.$inject = ['$scope', '$state', 'homeService', 'searchService'];

  function HomeController($scope, $state, homeService, searchService){

    $scope.ip = '';
    $scope.country = '';

    $scope.error = '';
    $scope.$state = $state;

    homeService.getCountry($scope.ip)
      .then(function(response) {

        $scope.response = response.data;

        if($scope.response.status == 'fail') {

          $scope.error = 'Sorry. We could figure out the country you are currently at.';

        } else {

          searchService.getCountry($scope.response.country)
            .then(function(response) {

              $scope.country = response.data;

              if($scope.country){

                searchService.getEmergencyPhoneNumbers($scope.response.country)
                  .then(function(response) {

                    $scope.emergencies = response.data;

                  },
                    function(response){

                      $scope.error = response.data;

                    }
                );

              } else {

                $scope.error = 'Sorry. We don't have any information about your country's emergency phones.';

              }

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
