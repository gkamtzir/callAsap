describe('Users factory', function() {
  var homeFactory;

  beforeEach(angular.mock.module('callAsap'));

  beforeEach(inject(function(_homeFactory_) {
    homeFactory = _homeFactory_;
  }));

  it('should exist', function() {
    expect(homeFactory).toBeDefined();
  });

  it('getCountry', function() {
    expect(homeFactory.getCountry).toBeDefined();
  });
});
