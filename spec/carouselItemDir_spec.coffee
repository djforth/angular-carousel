require 'angular'
require 'angular-mocks'

require '../src/carousel.coffee'
_ = require 'lodash'

mockdata    = require("./factory/carousel_data.coffee")
directives = require('@djforth/angular-jasmine-helpers').directiveTests;

describe 'Carousel Item Directive', ->
  element = scope = isoScope = fcty = promise = deferred = spy = null

  beforeEach ->
    spy = jasmine.createSpy('spy');
    angular.mock.module('$carousel')

  describe 'with link', ->
    beforeEach ->
      angular.mock.inject(($rootScope, $httpBackend, $q, $compile)->
        scope = $rootScope.$new()
        scope.carousel = _.first(mockdata)

        carouselCtrlMock = {
          setFilters: ->
            return spy
        }

        element = directives.createNestedDirectiveHTML(
          '<div fake-dir><div carousel-item id="test" carousel="carousel"></div></div>',
          scope,
          {title:'$CarouselHolderController', mock:carouselCtrlMock}
        )

    )


    afterEach ->
      angular.element(element).remove();

    it 'should be defined', ->
      expect(element).toBeDefined()

    it 'will add content', ->

      expect(element.find('h1').text()).toEqual('Carousel 0')
      expect(element.find('h2').text()).toEqual('Sed non imperdiet neque. Quisque.')
      expect(element.find('a').attr('href')).toEqual('http://better.org.uk')

    it 'will load image', ->
      reg = /(?:\(['|"]?)(.*?)(?:['|"]?\))/
      el = angular.element(document.querySelector('.img-holder'))
      img = el.css('background-image')
      path = reg.exec(img)[1]

      expect(path).toEqual('http://fillmurray.com/g/1400/300.url')

  describe 'without link', ->
    beforeEach ->
      angular.mock.inject(($rootScope, $compile)->
        scope = $rootScope.$new()

        scope.carousel = _.first(mockdata)
        scope.carousel.url = ""

        carouselCtrlMock = {
          setFilters: ->
            return spy
        }

        element = directives.createNestedDirectiveHTML(
          '<div fake-dir><div carousel-item id="test" carousel="carousel"></div></div>',
          scope,
          {title:'$CarouselHolderController', mock:carouselCtrlMock}
        )
      )

    afterEach ->
      angular.element(element).remove();

    it 'will add content', ->

      expect(element.find('h1').text()).toEqual('Carousel 0')
      expect(element.find('h2').text()).toEqual('Sed non imperdiet neque. Quisque.')
      # expect(element.find('a')).toEqual('http://better.org.uk')

    it 'should not have link', ->
      expect(element.find('a').html()).toBeUndefined()
      expect(element.find('span').html()).toBeDefined()

    it 'will load image', ->
      reg = /(?:\(['|"]?)(.*?)(?:['|"]?\))/
      el = angular.element(document.querySelector('.img-holder'))
      img = el.css('background-image')
      path = reg.exec(img)[1]

      expect(path).toEqual('http://fillmurray.com/g/1400/300.url')