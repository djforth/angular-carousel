var _;

require('tween-lite');

require('css-plugin');

_ = require('lodash');

module.exports = [
  '$timeout', "CarouselFcty", function($timeout) {
    return {
      restrict: 'A',
      templateUrl: 'carousel-holder.html',
      controller: "CarouselCtrl",
      link: function($scope, $elem, $attrs) {
        var loadedCount;
        $scope.TweenLite = TweenLite;
        loadedCount = 0;
        $scope.animating = false;
        $elem.on('mouseenter', function() {
          if (!$scope.animating) {
            return $scope.stopAutoplay();
          }
        });
        $elem.on('mouseleave', function() {
          if (!($scope.animating || $scope.carousels.length < 2)) {
            return $scope.restartTimer();
          }
        });
        $scope.onComplete = function() {
          $scope.animating = false;
          return $scope.restartTimer();
        };
        $scope.getElements = function() {
          var itemIn, itemOut;
          itemIn = document.getElementById("item" + $scope.itemSelected);
          itemOut = document.getElementById("item" + $scope.itemOut);
          return {
            itemIn: itemIn,
            itemOut: itemOut
          };
        };
        $scope.setHolderClass = function() {
          var activeItem;
          activeItem = $scope.carousels[$scope.itemSelected];
          if (_.isUndefined(activeItem)) {
            return "";
          }
          if (!_.isNull(activeItem.title) || !_.isNull(activeItem.subtitle)) {
            return "with-text";
          }
          return "";
        };
        return $scope.setSelected = function(type) {
          var animationIn, animationOut, items, pos, width;
          if (type == null) {
            type = "next";
          }
          $scope.animating = true;
          width = $elem[0].clientWidth;
          items = $scope.getElements();
          if (items.itemIn || items.itemOut) {
            pos = $scope.setpos(width, type);
            $scope.TweenLite.set(items.itemIn, {
              css: {
                left: pos.inpos
              }
            });
            animationIn = new $scope.TweenLite(items.itemIn, 0.5, {
              css: {
                left: "0"
              }
            }, $scope.onComplete);
            animationOut = new $scope.TweenLite(items.itemOut, 0.5, {
              css: {
                left: pos.outpos
              }
            });
            return animationIn.eventCallback("onComplete", $scope.onComplete);
          }
        };
      }
    };
  }
];
