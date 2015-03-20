_ = require('lodash')

module.exports = ["$scope", "$window", "$timeout", "CarouselFcty", ($scope, $window, $timeout, CarouselFcty)->
  $scope.itemOut      = -1
  $scope.itemIn       = 0
  $scope.itemSelected = 0
  $scope.carousels    = []
  delay = Math.round(parseFloat(5) * 1000)

  CarouselFcty.getData().then (results)->
    $scope.carousels = results
    $scope.carouselLength = $scope.carousels.length
    $scope.restartTimer() unless $scope.carousels.length < 2
  , (e)->
    $scope.error = e
    alert(e)

  $scope.next = ()->

    $scope.itemOut = $scope.itemSelected
    if ($scope.itemSelected < $scope.carouselLength - 1)
      $scope.itemSelected++
    else
      $scope.itemSelected = 0

    $scope.setSelected()

  $scope.previous = ()->
    $scope.itemOut = $scope.itemSelected
    if ($scope.itemSelected > 0)
      $scope.itemSelected--
    else
      $scope.itemSelected = $scope.carouselLength - 1

    $scope.setSelected("previous")

  $scope.setClass = (n)->
    return if $scope.itemSelected == n then "active" else ""

  $scope.setpos = (w, t)->
    if t=='previous'
      inpos = "#{w}px"
      outpos= "-#{w}px"
    else
      inpos = "-#{w}px"
      outpos= "#{w}px"

    {inpos:inpos, outpos:outpos}

  $scope.selectItem = (n)->
    $scope.itemOut = $scope.itemSelected
    $scope.itemSelected = n
    $scope.setSelected()

  $scope.restartTimer = ()->
    $scope.stopAutoplay()
    $scope.timer = $timeout($scope.next, delay)

  $scope.setCarousel = (n)->
    $scope.itemOut      = $scope.itemSelected
    $scope.itemSelected = n
    $scope.setSelected()
    $scope.restartTimer()

  $scope.showCarousel = (n)->
    $scope.itemSelected == n or $scope.itemOut == n

  $scope.stopAutoplay = ()->
    if (angular.isDefined($scope.timer))
      $timeout.cancel($scope.timer)
    $scope.timer = undefined
]