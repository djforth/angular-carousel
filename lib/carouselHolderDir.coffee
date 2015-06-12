require 'tween-lite'
require 'css-plugin'

_ = require('lodash')

module.exports = ['$timeout', "CarouselFcty", ($timeout)->

  return {
    restrict: 'A',
    # transclude: true,
    templateUrl: 'carousel-holder.html',
    controller:"CarouselCtrl",
    link:($scope, $elem, $attrs)->

      $scope.TweenLite = TweenLite
      loadedCount = 0
      $scope.animating = false

      $elem.on 'mouseenter', ()->
        $scope.stopAutoplay() unless $scope.animating

      $elem.on 'mouseleave', ()->
        $scope.restartTimer() unless $scope.animating or $scope.carousels.length < 2

      # Checks images are loaded
      # $scope.loaded = ()->
      #   loadedCount++

      #   if loadedCount == $scope.carouselLength and $scope.carouselLength  > 0

      #     $scope.restartTimer()
      #     loaded = true
      $scope.onComplete = ()->
        $scope.animating = false
        $scope.restartTimer()

      $scope.getElements= ()->
        itemIn  = document.getElementById("item#{$scope.itemSelected}")
        itemOut = document.getElementById("item#{$scope.itemOut}")

        {itemIn:itemIn, itemOut:itemOut}

      $scope.setHolderClass = () ->
        activeItem = $scope.carousels[$scope.itemSelected]

        if _.isUndefined(activeItem)
          return ""

        unless _.isNull(activeItem.title) and _.isNull(activeItem.subtitle)
          return "with-text"

        return ""

      #Animates old item off and new item on
      $scope.setSelected = (type="next")->
        $scope.animating = true
        width = $elem[0].clientWidth
        items = $scope.getElements()

        if items.itemIn or items.itemOut
          pos = $scope.setpos(width, type)

          $scope.TweenLite.set(items.itemIn, {css:{left:pos.inpos}})

          animationIn   = new $scope.TweenLite(items.itemIn, 0.5, {css:{left:"0"}}, $scope.onComplete)
          animationOut  = new $scope.TweenLite(items.itemOut, 0.5, {css:{left:pos.outpos}})

          animationIn.eventCallback "onComplete", $scope.onComplete

  }
]