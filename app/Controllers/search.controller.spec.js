(function() {

  describe('SearchController', function() {

    var $controller, SearchController, scope;

    beforeEach(angular.mock.module('callAsap'));

    beforeEach(inject(function(_$rootScope_, _$controller_, _searchService_) {

      $controller = _$controller_;
      scope = _$rootScope_.$new();
      SearchController = $controller('SearchController', {$scope: scope, searchService: _searchService_});

    }));

    it('should be defined', function() {

      expect(SearchController).toBeDefined();

    });

  });


})();
