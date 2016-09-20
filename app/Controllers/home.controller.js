(function(){

  angular.module("callAsap")
    .controller("HomeController", HomeController);

  HomeController.$inject = ["$scope", "$state"];

  function HomeController($scope, $state){

    $scope.state = "Home Page";

    $scope.$state = $state;

  }

})();
