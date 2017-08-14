(function() {
  'use strict';

  describe('homeService', function() {

    var homeService, $q, $httpBackend;

    var API = 'http://freegeoip.net/json/';

    var RESPONSE_SUCCESS = {
        ip: '46.103.161.101',
        country_code: 'GR',
        country_name: 'Greece',
        region_code: '',
        region_name: '',
        city: '',
        zip_code: '',
        time_zone: 'Europe/Athens',
        latitude: 37.9667,
        longitude: 23.7167,
        metro_code: 0
    };

    var RESPONSE_ERROR = '404 page not found';

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
      var errorResult;

      beforeEach(function() {

        result = {};
        errorResult = '';
        spyOn(homeService, 'getCountry').and.callThrough();

      });

      it('should return a country when called with a valid ip', function() {

         $httpBackend.whenGET(API).respond(200, $q.when(RESPONSE_SUCCESS));

         expect(homeService.getCountry).not.toHaveBeenCalled();
         expect(result).toEqual({});

         homeService.getCountry()
           .then(function(response) {
             response.data.then(function(response) {
                 result = response;
             })
         });

         $httpBackend.flush();

         expect(homeService.getCountry).toHaveBeenCalledWith();
         expect(result.country_name).toEqual('Greece');
         expect(result.ip).toEqual('46.103.161.101');
         expect(result.country_code).toContain('GR');
         expect(result.time_zone).toEqual('Europe/Athens');

      });

      it('should return an error message when called with invalid ip', function() {

          $httpBackend.whenGET(API).respond(200, $q.when(RESPONSE_ERROR));

          expect(homeService.getCountry).not.toHaveBeenCalled();
          expect(errorResult).toEqual('');

          homeService.getCountry()
            .then(function(response) {
                response.data.then(function(response) {
                    result = response;
                });
          });

          $httpBackend.flush();

          expect(homeService.getCountry).toHaveBeenCalledWith();
          expect(result).toEqual('404 page not found');

      });

    });

  });

})();
