(function() {

  describe('HomeController', function() {

    var $controller, HomeController, scope;

    beforeEach(angular.mock.module('callAsap'));

    beforeEach(inject(function(_$rootScope_, _$controller_) {

      $controller = _$controller_;
      scope = _$rootScope_.$new();
      HomeController = $controller('HomeController', {$scope: scope});

    }));

    it('should be defined', function() {

      expect(HomeController).toBeDefined();

    });

  });


})();
