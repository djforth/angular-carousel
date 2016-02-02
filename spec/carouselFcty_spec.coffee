require 'angular'
require 'angular-mocks'
require '../lib/carousel.coffee'
fctyTests   = require('@djforth/angular-jasmine-helpers').factoryTests

mockdata    = require("./factory/carousel_data.coffee")

describe 'CarouselFcty', ->
  ctrl = rootScope = httpBackend = fcty = promise = deferred = srv =  null
  beforeEach ->
    angular.mock.module('$carousel')
    # .config(["setCarouselUrlProvider", (setCarouselUrlProvider)->
    #     setCarouselUrlProvider.setUrl('/api/carousels/some-page.json')
    # ])

  beforeEach ->

    angular.mock.inject ($q, $rootScope, $httpBackend, CarouselFcty, setCarouselUrl)->
      httpBackend = $httpBackend;
      fcty      = CarouselFcty
      setCarouselUrl.url = '/api/carousels/some-page.json'
      deferred  = $q.defer()
      promise   = deferred.promise
      rootScope = $rootScope

      # spyOn(srv, "getVenue").and.returnValue('test-venue')
      # spyOn(srv, "getUrl").and.returnValue('/api/carousels/some-page.json')


  it 'should start with empty request', ->
    expect(fcty.data().length).toEqual(0)

  fctyTests.setFlushData(()->
    return fcty
  , mockdata
  )

  fctyTests.testPromises(()->
      return fcty # Passes Fcty to test - Work around
    # Data being sent
    , mockdata
    # Error msg
    , "An error occurred while fetching items, we have been notified and are investigating.  Please try again later"
    # , processData
    )

  #See support/utils/factory_test.coffee - Test HTTP Request
  fctyTests.testHTTPRequest(()->
    return fcty # Passes Fcty to test - Work around
  #URL Request
  , "/api/carousels/some-page.json"
  # Data being sent
  , mockdata
  # Error msg
  , "An error occurred while fetching items, we have been notified and are investigating.  Please try again later"
  )




