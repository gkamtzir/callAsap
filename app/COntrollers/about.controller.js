(function(){

  angular.module('callAsap')
    .controller('AboutController', AboutController);

  AboutController.$inject = ['$scope', '$state'];

  function AboutController($scope, $state){

    $scope.$state = $state;

  }

})();
