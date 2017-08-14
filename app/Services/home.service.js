(function() {
  'use strict';

  angular.module('callAsap')
    .factory('homeService', homeService);

  homeService.$inject = ['$http'];

  function homeService($http) {

    return {

      getCountry: function() {

        return $http.get('http://freegeoip.net/json/');

      }

    }

  }


})();
