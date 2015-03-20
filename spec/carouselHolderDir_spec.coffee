require 'angular'
require 'angular-mocks'

require '../lib/carousel.coffee'
_ = require 'lodash'

mockdata    = require("./factory/carousel_data.coffee")


directives = require('directives-tests')


describe 'Carousel Holder Directive', ->
  element = scope = isoScope = fcty = promise = deferred = spy = null
  beforeEach ->
    spy = jasmine.createSpy('spy');
    angular.mock.module('$carousel')
    angular.mock.inject(($q, $sce, $rootScope, $controller, CarouselFcty)->
        scope = $rootScope.$new()
        #Setup promise stubbing
        deferred  = $q.defer()
        promise   = deferred.promise
        spyOn(CarouselFcty, 'getData').and.returnValue(promise)
        fcty = CarouselFcty

        element = directives.createDirectiveHTML('<div carousel-holder></div>', scope)

        isoScope = element.isolateScope();
      )

  afterEach ->
    angular.element(element).remove();

  it 'should exist', ->
    expect(element).toBeDefined()

  describe 'should check that controls are not shown if no items', ->


    it 'should not show next or previous button', ->
      prev = document.querySelector(".previous")
      expect(prev).toBeNull()

      next = document.querySelector(".next")
      expect(next).toBeNull()

    it 'should not show control icons', ->
      list = document.querySelector(".carousel-list>ul")
      expect(list).toBeNull()

  describe 'if data is there but less then 1', ->

    beforeEach ->

      deferred.resolve([mockdata[0]])
      scope.$apply()

    it 'should not show next or previous button', ->
      prev = document.querySelector(".previous")
      expect(prev).toBeNull()

      next = document.querySelector(".next")
      expect(next).toBeNull()

    it 'should not show control icons', ->
      list = document.querySelector(".carousel-list>ul")
      expect(list).toBeNull()


  describe 'if data is more then 1', ->

    beforeEach ->

      deferred.resolve(mockdata)
      scope.$apply()

    describe 'button functions', ->
      prev = next = list = null

      beforeEach ->
        prev = document.querySelector(".previous")
        next = document.querySelector(".next")
        list = document.querySelector(".carousel-list>ul")

      it 'should not show next or previous button', ->
        expect(_.isElement(prev)).toBeTruthy()
        expect(_.isElement(next)).toBeTruthy()

      it 'should not show control icons', ->
        expect(_.isElement(list)).toBeTruthy()
        li = list.querySelectorAll("li")
        expect(li.length).toEqual(2)

      it 'should call previous when previous button clicked', ->
        spyOn(scope, "previous")
        prev = angular.element(document.querySelector(".previous-button"))
        prev.triggerHandler('click')
        expect(scope.previous).toHaveBeenCalled()

      it 'should call next when next button clicked', ->
        spyOn(scope, "next")
        next = angular.element(document.querySelector(".next-button"))
        next.triggerHandler('click')
        expect(scope.next).toHaveBeenCalled()

      it 'should call selectItem when item buttons are clicked', ->
        spyOn(scope, "selectItem")
        list = document.querySelectorAll(".carousel-list>ul>li>a")
        _.forEach(list, (li, i)->
          btn = angular.element(li)
          btn.triggerHandler('click')
          expect(scope.selectItem).toHaveBeenCalled()
          expect(scope.selectItem).toHaveBeenCalledWith(i)
        )


      it 'should only add active to the correct button', ->
        list = document.querySelectorAll(".carousel-list>ul>li>a")
        _.forEach(list, (li, i)->
          btn = angular.element(li)
          if i == 0
            expect(btn.hasClass('active')).toBeTruthy()
          else
            expect(btn.hasClass('active')).toBeFalsy()
        )

        scope.itemSelected = 1
        scope.$apply()

        _.forEach(list, (li, i)->
          btn = angular.element(li)
          if i == 1
            expect(btn.hasClass('active')).toBeTruthy()
          else
            expect(btn.hasClass('active')).toBeFalsy()
        )

    describe 'carousel items holder', ->
      citems = null

      beforeEach ->
        citems = document.querySelectorAll(".carousel-inner>.item")

      it 'should have 3 items', ->
        expect(citems.length).toEqual(2)

      it 'should have th correct IDs', ->
        _.forEach citems, (ci, i)->
          expect(ci.id).toEqual("item#{i}")

      it 'should only set show', ->
        scope.itemSelected = 0
        scope.itemOut      = 2
        scope.$apply()

        selected   = angular.element(_.first(citems))
        unselected = angular.element(_.last(citems))

        expect(selected.hasClass('ng-hide')).toBeFalsy()
        expect(unselected.hasClass('ng-hide')).toBeTruthy()

    describe 'rollover functions', ->

      beforeEach ->
        spyOn(scope, "stopAutoplay")
        spyOn(scope, "restartTimer")

      it 'should trigger stopAutoPlay on mouseenter if not animating', ->
        element.triggerHandler('mouseenter')
        expect(scope.stopAutoplay).toHaveBeenCalled()

      it 'should not trigger stopAutoPlay on mouseenter if not animating', ->
        scope.animating = true
        element.triggerHandler('mouseenter')
        expect(scope.stopAutoplay).not.toHaveBeenCalled()

      it 'should trigger restartTimer on mouseleave if not animating', ->
        element.triggerHandler('mouseleave')
        expect(scope.restartTimer).toHaveBeenCalled()

      it 'should not trigger restartTimer on mouseleave if not animating', ->
        scope.animating = true
        element.triggerHandler('mouseleave')
        expect(scope.restartTimer).not.toHaveBeenCalled()


    describe 'link functions', ->
      citems = null

      beforeEach ->
        citems = document.querySelectorAll(".carousel-inner>.item")


      it 'onComplete', ->
        scope.animating = true
        spyOn(scope, "restartTimer")
        scope.onComplete()

        expect(scope.animating).toBeFalsy()
        expect(scope.restartTimer).toHaveBeenCalled()

      it 'getElements', ->
        scope.itemSelected = 0
        scope.itemOut      = 1
        # itemIn  = angular.element(_.first(citems))
        # itemOut = angular.element(_.last(citems))

        elems = scope.getElements()

        expect(elems.itemIn).toEqual(_.first(citems))
        expect(elems.itemOut).toEqual(_.last(citems))

      describe 'setSelected', ->

        beforeEach ->
          scope.animating = false
          spyOn(scope, "getElements").and.returnValue({itemIn:_.first(citems), itemOut:_.last(citems)})

          # scope.TweenLite = jasmine.createSpyObj('Tweenlite', "set")

        it 'should set for next ', ->
          spyOn(scope, "setpos").and.returnValue({inpos:"-20px", outpos:"40px"})
          scope.setSelected('next')
          expect(scope.animating).toBeTruthy()
          # expect(scope.TweenLite.set).toHaveBeenCalled()



























