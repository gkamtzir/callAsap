(function(){

  angular.module("callAsap")
    .controller("AboutUsController", AboutUsController);

  AboutUsController.$inject = ["$scope", "$state"];

  function AboutUsController($scope, $state){

    $scope.aboutUs = "AboutUs Page";

    $scope.$state = $state;

  }

})();
