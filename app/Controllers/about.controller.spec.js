(function() {

  describe('AboutController', function() {

    var $controller, AboutController, scope;

    beforeEach(angular.mock.module('callAsap'));

    beforeEach(inject(function(_$rootScope_, _$controller_) {

      $controller = _$controller_;
      scope = _$rootScope_.$new();
      AboutController = $controller('AboutController', {$scope: scope});

    }));

    it('should be defined', function() {

      expect(AboutController).toBeDefined();

    });

  });


})();
