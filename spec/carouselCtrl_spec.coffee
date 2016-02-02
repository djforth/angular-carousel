require 'angular'
require 'angular-mocks'
require '../lib/carousel.coffee'
ctrlTests   = require('@djforth/angular-jasmine-helpers').controllerTests
mockdata    = require("./factory/carousel_data.coffee")


describe 'CarouselCtrl', ->
  ctrl = rootScope = scope = resizeSrv = null
  service = fcty = promise = deferred = null
  timeout = null

  beforeEach ->
    angular.mock.module('$carousel')

  beforeEach ->
    angular.mock.inject(($rootScope, $httpBackend, $q, $controller, CarouselFcty)->
      scope = $rootScope.$new()

      #Setup promise stubbing
      deferred  = $q.defer()
      promise   = deferred.promise
      spyOn(CarouselFcty, 'getData').and.returnValue(promise)
      fcty = CarouselFcty

      ctrl = $controller("CarouselCtrl", { $scope: scope })


    )

  afterEach ->
    angular.mock.inject(($timeout)->
      $timeout.cancel(scope.timer)
    )

  describe 'setup', ->
    it 'should exsist', ->
      expect(ctrl).toBeDefined()

    it "should set initial values", ->
      expect(scope.carousels).toEqual([])
      expect(scope.carouselLength).not.toBeDefined()
      expect(scope.itemOut).toEqual(-1)
      expect(scope.itemIn).toEqual(0)
      expect(scope.itemSelected).toEqual(0)

  describe "getData Functionality", ->

    setUp = ()->
      {scope:scope, deferred:deferred}

    defaults = {carousels:mockdata, carouselLength:mockdata.length}

    # Tests if promise success
    ctrlTests.promiseData(setUp, mockdata, defaults)

    #Tests if promise failure
    ctrlTests.promiseError(setUp, "An error occurred while fetching items, we have been notified and are investigating.  Please try again later", {error:"An error occurred while fetching items, we have been notified and are investigating.  Please try again later"} )

  describe 'next and previous or select functions', ->
    beforeEach ->
      deferred.resolve(mockdata)
      spyOn(scope, "restartTimer").and.callThrough()
      scope.setSelected = jasmine.createSpy('setSelected')
      scope.$apply()

    it 'next function incrementing', ->
      scope.next()
      expect(scope.itemOut).toEqual(0)
      expect(scope.itemSelected).toEqual(1)
      expect(scope.setSelected).toHaveBeenCalled()

    it 'next function looping back to beginning', ->
      scope.itemSelected = 1
      scope.next()
      expect(scope.itemOut).toEqual(1)
      expect(scope.itemSelected).toEqual(0)
      expect(scope.setSelected).toHaveBeenCalled()

    it 'previous function decreasing', ->
      scope.itemSelected = 1
      scope.previous()
      expect(scope.itemOut).toEqual(1)
      expect(scope.itemSelected).toEqual(0)
      expect(scope.setSelected).toHaveBeenCalled()

    it 'previous function looping back to end', ->
      scope.itemSelected = 0
      scope.previous()
      expect(scope.itemOut).toEqual(0)
      expect(scope.itemSelected).toEqual(1)
      expect(scope.setSelected).toHaveBeenCalled()

    it 'should set the itemSelected to specific item', ->
      scope.itemSelected = 0
      scope.selectItem(3)
      expect(scope.itemOut).toEqual(0)
      expect(scope.itemSelected).toEqual(3)
      expect(scope.setSelected).toHaveBeenCalled()

  describe 'utility functions', ->
    beforeEach ->
      deferred.resolve(mockdata)
      spyOn(scope, "restartTimer").and.callThrough()
      scope.setSelected = jasmine.createSpy('setSelected')
      scope.$apply()

    it 'should set class', ->
      scope.itemSelected = 1
      expect(scope.setClass(1)).toEqual("active")
      expect(scope.setClass(2)).toEqual("")


    it 'showCarousel', ->
      scope.itemSelected = 3
      scope.itemOut      = 2

      expect(scope.showCarousel(0)).toBeFalsy()
      expect(scope.showCarousel(1)).toBeFalsy()

      expect(scope.showCarousel(2)).toBeTruthy()
      expect(scope.showCarousel(3)).toBeTruthy()

    it 'setpos', ->
      obj = scope.setpos(1, "previous")

      expect(obj.inpos).toEqual('1px')
      expect(obj.outpos).toEqual('-1px')

      obj = scope.setpos(1, "next")

      expect(obj.inpos).toEqual('-1px')
      expect(obj.outpos).toEqual('1px')

    describe 'timeout functions', ->

      beforeEach ->
        angular.mock.inject ($rootScope, $injector)->
          timeout = $injector.get('$timeout')

        deferred.resolve(mockdata)
        jasmine.clock().install()
        spyOn(scope, "next")
        scope.$apply()

      afterEach ->
        jasmine.clock().uninstall()


      it 'restartTimer', ->
        spyOn(scope, "stopAutoplay")

        scope.restartTimer()
        expect(scope.stopAutoplay).toHaveBeenCalled()
        expect(scope.next).not.toHaveBeenCalled()

        delay =  Math.round(parseFloat(5) * 1000)
        timeout.flush(delay)

        expect(scope.next).toHaveBeenCalled()


      it 'stopAutoplay', ->
        scope.timer = timeout(jasmine.createSpy('setSelected', 1))

        spyOn(timeout, "cancel").and.callThrough()

        expect(scope.timer).toBeDefined()

        scope.stopAutoplay()

        expect(scope.timer).not.toBeDefined()
        expect(timeout.cancel).toHaveBeenCalled()














