describe('Users factory', function() {
  var homeService;

  beforeEach(angular.mock.module('callAsap'));

  beforeEach(inject(function(_homeService_) {
    homeService = _homeService_;
  }));

  it('should exist', function() {
    expect(homeService).toBeDefined();
  });

  it('getCountry', function() {
    expect(homeService.getCountry).toBeDefined();
  });
});
