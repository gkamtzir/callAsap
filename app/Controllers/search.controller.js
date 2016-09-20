(function(){

  angular.module("callAsap")
    .controller("SearchController", SearchController);

  SearchController.$inject = ["$scope", "$state"];

  function SearchController($scope, $state){

    $scope.contact = "Contact Page";

    $scope.$state = $state;

  }

})();
