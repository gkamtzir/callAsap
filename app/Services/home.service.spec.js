(function() {
  'use strict';

  describe('homeService', function() {

    var homeService, $q, $httpBackend;

    var API = 'http://ip-api.com/json/';

    var RESPONSE_SUCCESS = {
      as: 'AS6866 Internet Services',
      city: 'Thessaloniki',
      country: 'Greece',
      countryCode: 'GR',
      isp: 'Cyta Hellas',
      lat: 40.6403,
      lon: 22.9439,
      org: 'Cyta Hellas',
      query: '78.87.150.155',
      region: 'B',
      regionName: 'Central Macedonia',
      status: 'success',
      timezone: 'Europe/Athens',
      zip: ''
    };

    var RESPONSE_ERROR = {
      message: 'invalid query',
      query: '78.87.150.155a',
      status: 'fail'
    };

    beforeEach(angular.mock.module('callAsap'));

    beforeEach(inject(function(_homeService_, _$q_, _$httpBackend_) {

      homeService = _homeService_;
      $q = _$q_;
      $httpBackend = _$httpBackend_;

    }));

    it('should exist', function() {

      expect(homeService).toBeDefined();

    });

    describe('getCountry()', function() {

      var result;

      beforeEach(function() {

        result = {};
        spyOn(homeService, 'getCountry').and.callThrough();

      });

      it('should return a country when called with a valid ip', function() {

         var search = '78.87.150.155';
         $httpBackend.whenGET(API + search).respond(200, $q.when(RESPONSE_SUCCESS));

         expect(homeService.getCountry).not.toHaveBeenCalled();
         expect(result).toEqual({});

         homeService.getCountry(search)
           .then(function(response) {
             response.data.then(function(response) {
                 result = response;
             })
         });

         $httpBackend.flush();

         expect(homeService.getCountry).toHaveBeenCalledWith(search);
         expect(result.country).toEqual('Greece');
         expect(result.regionName).toEqual('Central Macedonia');
         expect(result.countryCode).toContain('GR');
         expect(result.timezone).toEqual('Europe/Athens');

      });

      it('should return an error message when called with invalid ip', function() {

          var search = '78.87.150.1555';
          $httpBackend.whenGET(API + search).respond(200, $q.when(RESPONSE_ERROR));

          expect(homeService.getCountry).not.toHaveBeenCalled();
          expect(result).toEqual({});

          homeService.getCountry(search)
            .then(function(response) {
                response.data.then(function(response) {
                    result = response;
                });
          });

          $httpBackend.flush();

          expect(homeService.getCountry).toHaveBeenCalledWith(search);
          expect(result.message).toEqual('invalid query');
          expect(result.status).toEqual('fail');

      });

    });

  });

})();
