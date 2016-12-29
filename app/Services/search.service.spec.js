(function() {
    'use strict';

    describe('searchService', function() {

        var searchService, $q, $httpBackend;

        beforeEach(angular.mock.module('callAsap'));

        beforeEach(inject(function(_searchService_, _$q_, _$httpBackend_){

            searchService = _searchService_;
            $q = _$q_;
            $httpBackend = _$httpBackend_;

        }));

        it('should exist', function() {

            expect(searchService).toBeDefined();

        });

        describe('getCountry', function() {

            var API = 'http://83.212.115.201/api.php/country/';

            var RESPONSE_SUCCESS = {
                ID: '12',
                Name: 'Greece',
                Languages: 'Greek, English, French',
                Responsiveness: '9',
                LastUpdate: '2016-07-18',
                SimNeeded112: 'No',
                OnlyNumber: 'No'
            };

            var RESPONSE_ERROR = false;

            var result;

            beforeEach(function() {

                result = {};
                spyOn(searchService, 'getCountry').and.callThrough();

            });

            it('should return country\'s details when called with a valid country name (Europe only)', function() {

                var search = 'greece';
                $httpBackend.whenGET(API + search).respond(200, $q.when(RESPONSE_SUCCESS));

                expect(searchService.getCountry).not.toHaveBeenCalled();
                expect(result).toEqual({});

                searchService.getCountry(search)
                    .then(function(response) {
                        response.data.then(function(response) {
                            result = response;
                        });
                });

                $httpBackend.flush();

                expect(searchService.getCountry).toHaveBeenCalledWith(search);
                expect(result.Name).toEqual('Greece');
                expect(result.Languages).toEqual('Greek, English, French');
                expect(result.Responsiveness).toEqual('9');
                expect(result.SimNeeded112).toEqual('No');
                expect(result.OnlyNumber).toEqual('No');

            });

            it('should return false when called with an invalid country name (or a country outside Europe)', function() {

                var search = 'elladistan';
                $httpBackend.whenGET(API + search).respond(200, $q.when(RESPONSE_ERROR));

                expect(searchService.getCountry).not.toHaveBeenCalled();
                expect(result).toEqual({});

                searchService.getCountry(search)
                    .then(function(response) {
                        response.data.then(function(response) {
                            result = response;
                        });
                });

                $httpBackend.flush();

                expect(searchService.getCountry).toHaveBeenCalledWith(search);
                expect(result).toEqual(false);

            });

        });

        describe('getCountries()', function() {

            var API = 'http://83.212.115.201/api.php/country';

            var RESPONSE_SUCCESS = [
                {
                    ID: '2',
                    Name: 'Belgium',
                    Languages: 'French, Dutch, English',
                    Responsiveness: '7',
                    LastUpdate: '2016-07-18',
                    SimNeeded112: 'Yes',
                    OnlyNumber: 'No'
                },
                {
                    ID: '27',
                    Name: 'Sweden',
                    Languages: 'Swedish, English, Lulea, Finnish',
                    Responsiveness: '15',
                    LastUpdate: '2016-07-18',
                    SimNeeded112: 'Unknown',
                    OnlyNumber: 'Yes'
                }
            ];

            var result;

            beforeEach(function() {

                result = [];
                spyOn(searchService, 'getCountries').and.callThrough();

            });

            it('should return an array of all the available countries', function() {

                $httpBackend.whenGET(API).respond(200, $q.when(RESPONSE_SUCCESS));

                expect(searchService.getCountries).not.toHaveBeenCalled();
                expect(result).toEqual([]);

                searchService.getCountries()
                    .then(function(response) {
                        response.data.then(function(response) {
                            result = response;
                        });
                });

                $httpBackend.flush();

                expect(searchService.getCountries).toHaveBeenCalled();
                expect(result[0].Name).toEqual('Belgium');
                expect(result[0].Languages).toEqual('French, Dutch, English');
                expect(result[0].Responsiveness).toEqual('7');
                expect(result[0].SimNeeded112).toEqual('Yes');
                expect(result[0].OnlyNumber).toEqual('No');

                expect(result[1].Name).toEqual('Sweden');
                expect(result[1].Languages).toEqual('Swedish, English, Lulea, Finnish');
                expect(result[1].Responsiveness).toEqual('15');
                expect(result[1].SimNeeded112).toEqual('Unknown');
                expect(result[1].OnlyNumber).toEqual('Yes');

            });

        });

        describe('getEmergencyPhoneNumbers()', function() {

            var API = 'http://83.212.115.201/api.php/country/emergency/';

            var RESPONSE_SUCCESS = [
                {
                    Type: 'Police',
                    'Number': '100',
                    LastUpdate: '2016-07-18'
                },
                {
                    Type: 'Fire Brigade',
                    'Number': '199',
                    LastUpdate: '2016-07-18'
                },
                {
                    Type: 'Emergency Medical Service',
                    'Number': '166',
                    LastUpdate: '2016-07-18'
                }
            ];

            var RESPONSE_ERROR = [];

            var result;

            beforeEach(function() {

                result = [];
                spyOn(searchService, 'getEmergencyPhoneNumbers').and.callThrough();

            });

            it('should return an array of all the emergency phone numbers available in a country when called with a valid country name (Europe only)', function() {

                var search = 'greece';
                $httpBackend.whenGET(API + search).respond(200, $q.when(RESPONSE_SUCCESS));

                expect(searchService.getEmergencyPhoneNumbers).not.toHaveBeenCalled();
                expect(result).toEqual([]);

                searchService.getEmergencyPhoneNumbers(search)
                    .then(function(response) {
                        response.data.then(function(response) {
                            result = response;
                        });
                });

                $httpBackend.flush();

                expect(searchService.getEmergencyPhoneNumbers).toHaveBeenCalledWith(search);
                expect(result[0].Type).toEqual('Police');
                expect(result[0].Number).toEqual('100');

                expect(result[1].Type).toEqual('Fire Brigade');
                expect(result[1].Number).toEqual('199');

                expect(result[2].Type).toEqual('Emergency Medical Service');
                expect(result[2].Number).toEqual('166');

            });

            it('should return an empty array when called with an invalid country name (Europe only)', function() {

                var search = 'elladistanion';
                $httpBackend.whenGET(API + search).respond(200, $q.when(RESPONSE_ERROR));

                expect(searchService.getEmergencyPhoneNumbers).not.toHaveBeenCalled();
                expect(result).toEqual([]);

                searchService.getEmergencyPhoneNumbers(search)
                    .then(function(response) {
                        response.data.then(function(response) {
                            result = response;
                        });
                });

                $httpBackend.flush();

                expect(searchService.getEmergencyPhoneNumbers).toHaveBeenCalledWith(search);
                expect(result).toEqual([]);

            });

        });

    });

})();
