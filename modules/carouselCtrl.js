var _;

_ = require('lodash');

module.exports = [
  "$scope", "$window", "$timeout", "CarouselFcty", function($scope, $window, $timeout, CarouselFcty) {
    var delay;
    $scope.itemOut = -1;
    $scope.itemIn = 0;
    $scope.itemSelected = 0;
    $scope.carousels = [];
    delay = Math.round(parseFloat(5) * 1000);
    CarouselFcty.getData().then(function(results) {
      $scope.carousels = results;
      $scope.carouselLength = $scope.carousels.length;
      if (!($scope.carousels.length < 2)) {
        return $scope.restartTimer();
      }
    }, function(e) {
      $scope.error = e;
      return alert(e);
    });
    $scope.next = function() {
      $scope.itemOut = $scope.itemSelected;
      if ($scope.itemSelected < $scope.carouselLength - 1) {
        $scope.itemSelected++;
      } else {
        $scope.itemSelected = 0;
      }
      return $scope.setSelected();
    };
    $scope.previous = function() {
      $scope.itemOut = $scope.itemSelected;
      if ($scope.itemSelected > 0) {
        $scope.itemSelected--;
      } else {
        $scope.itemSelected = $scope.carouselLength - 1;
      }
      return $scope.setSelected("previous");
    };
    $scope.setClass = function(n) {
      if ($scope.itemSelected === n) {
        return "active";
      } else {
        return "";
      }
    };
    $scope.setpos = function(w, t) {
      var inpos, outpos;
      if (t === 'previous') {
        inpos = w + "px";
        outpos = "-" + w + "px";
      } else {
        inpos = "-" + w + "px";
        outpos = w + "px";
      }
      return {
        inpos: inpos,
        outpos: outpos
      };
    };
    $scope.selectItem = function(n) {
      if (n !== $scope.itemSelected) {
        $scope.itemOut = $scope.itemSelected;
        $scope.itemSelected = n;
        return $scope.setSelected();
      }
    };
    $scope.restartTimer = function() {
      $scope.stopAutoplay();
      return $scope.timer = $timeout($scope.next, delay);
    };
    $scope.setCarousel = function(n) {
      $scope.itemOut = $scope.itemSelected;
      $scope.itemSelected = n;
      $scope.setSelected();
      return $scope.restartTimer();
    };
    $scope.showCarousel = function(n) {
      return $scope.itemSelected === n || $scope.itemOut === n;
    };
    return $scope.stopAutoplay = function() {
      if (angular.isDefined($scope.timer)) {
        $timeout.cancel($scope.timer);
      }
      return $scope.timer = void 0;
    };
  }
];
