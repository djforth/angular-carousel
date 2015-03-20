(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"./lib/carousel.coffee":[function(require,module,exports){
'use strict';
var _, carousel, carouselCtrl, carouselFcty, carouselHolderDir, carouselItemDir, viewDetection;

require('angular');

_ = require('lodash');

viewDetection = require('viewport-detection');

carouselFcty = require('./carouselFcty.coffee');

carouselCtrl = require('./carouselCtrl.coffee');

carouselHolderDir = require('./carouselHolderDir.coffee');

carouselItemDir = require('./carouselItemDir.coffee');

carousel = angular.module('$carousel', ['$viewportDetection']).factory('CarouselFcty', carouselFcty).provider('setCarouselUrl', function() {
  var url;
  url = null;
  return {
    setUrl: function(path) {
      return url = path;
    },
    $get: function() {
      return {
        url: url
      };
    }
  };
}).controller('CarouselCtrl', carouselCtrl).directive('carouselHolder', carouselHolderDir).directive('carouselItem', carouselItemDir).run([
  "$templateCache", function(s) {
    s.put("carousel-holder.html", '<div class="row content-area carousel-content" ng-hide="carousels.length <= 0"><div id="carousels"><div class="carousel-holder"><div class="carousel-inner"><div class="item" id="item{{$index}}" ng-repeat="item in carousels" ng-show="showCarousel($index)"><section carousel-item="" carousel="item"></section></div></div><div class="list-holder"><div class="carousel-list"><ul ng-if="carousels.length > 1"><li ng-repeat="item in carousels"><a href="javascript:" ng-click="selectItem($index)" ng-class="setClass($index)"><span>{{$index}}</span></a></li></ul></div></div><ul class="carousel-nav" ng-if="carousels.length > 1"><li class="previous"><a class="previous-button" ng-click="previous()" href="javascript:"><svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 612 792" enable-background="new 0 0 612 792"><path fill="none" stroke="#a6a6a6" stroke-width="20px" d="M507.1 10L112.4 404.7l379.7 379.8"></path></svg></a></li><li class="next"><a class="next-button" ng-click="next()" href="javascript:"><svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 612 792" enable-background="new 0 0 612 792"><path fill="none" stroke="#a6a6a6" stroke-width="20px" d="M127.4 784.5l379.7-379.8L112.4 10"></path></svg></a></li></ul></div></div></div>');
    return s.put("carousel-item.html", '<a href="{{carousel.url}}" ng-if="carousel.url"><div class="img-holder"></div><div class="text-wrapper" ng-if="carousel.title"><h1 class="gg up-c"><span>{{carousel.title}}</span></h1><h2 class="gg up-c" ng-if="carousel.subtitle"><span>{{carousel.subtitle}}</span></h2></div></a> <span ng-if="!carousel.url"><div class="img-holder"></div><div class="text-wrapper" ng-if="carousel.title"><h1 class="gg up-c"><span>{{carousel.title}}</span></h1><h2 class="gg up-c" ng-if="carousel.subtitle"><span>{{carousel.subtitle}}</span></h2></div></span>');
  }
]);

module.exports = carousel;



},{"./carouselCtrl.coffee":"/Users/djforth/websites/modules/carousel/lib/carouselCtrl.coffee","./carouselFcty.coffee":"/Users/djforth/websites/modules/carousel/lib/carouselFcty.coffee","./carouselHolderDir.coffee":"/Users/djforth/websites/modules/carousel/lib/carouselHolderDir.coffee","./carouselItemDir.coffee":"/Users/djforth/websites/modules/carousel/lib/carouselItemDir.coffee","angular":"angular","lodash":"lodash","viewport-detection":"viewport-detection"}],"/Users/djforth/websites/modules/carousel/lib/carouselCtrl.coffee":[function(require,module,exports){
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
      $scope.itemOut = $scope.itemSelected;
      $scope.itemSelected = n;
      return $scope.setSelected();
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



},{"lodash":"lodash"}],"/Users/djforth/websites/modules/carousel/lib/carouselFcty.coffee":[function(require,module,exports){
var _;

_ = require('lodash');

module.exports = function($http, $q, setCarouselUrl) {
  var carouselData;
  carouselData = [];
  return {
    data: function() {
      return carouselData;
    },
    flush: function() {
      return carouselData = [];
    },
    getData: function() {
      var deferred, page;
      deferred = $q.defer();
      if (_.isEmpty(carouselData)) {
        page = page === "" ? "home" : page;
        $http.get(setCarouselUrl.url).success(function(data) {
          carouselData = data;
          return deferred.resolve(data);
        }).error(function() {
          return deferred.reject("An error occurred while fetching items, we have been notified and are investigating.  Please try again later");
        });
      } else {
        deferred.resolve(carouselData);
      }
      return deferred.promise;
    },
    setData: function(d) {
      return carouselData = d;
    }
  };
};



},{"lodash":"lodash"}],"/Users/djforth/websites/modules/carousel/lib/carouselHolderDir.coffee":[function(require,module,exports){
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



},{"css-plugin":"css-plugin","lodash":"lodash","tween-lite":"tween-lite"}],"/Users/djforth/websites/modules/carousel/lib/carouselItemDir.coffee":[function(require,module,exports){
var _;

_ = require('lodash');

module.exports = [
  function() {
    return {
      restrict: 'A',
      transclude: true,
      templateUrl: "carousel-item.html",
      scope: {
        carousel: "=carousel"
      },
      link: function($scope, $elem, $attrs) {
        return $scope.$watch("carousel", function(car) {
          var img, url;
          if (!_.isUndefined(car)) {
            url = car.main.src;
            img = angular.element($elem.children().children()[0]);
            return img.css({
              'background-image': "url('" + url + "')",
              'background-size': 'cover'
            });
          }
        });
      }
    };
  }
];



},{"lodash":"lodash"}]},{},["./lib/carousel.coffee"])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvZGpmb3J0aC93ZWJzaXRlcy9tb2R1bGVzL2Nhcm91c2VsL2xpYi9jYXJvdXNlbC5jb2ZmZWUiLCIvVXNlcnMvZGpmb3J0aC93ZWJzaXRlcy9tb2R1bGVzL2Nhcm91c2VsL2xpYi9jYXJvdXNlbEN0cmwuY29mZmVlIiwiL1VzZXJzL2RqZm9ydGgvd2Vic2l0ZXMvbW9kdWxlcy9jYXJvdXNlbC9saWIvY2Fyb3VzZWxGY3R5LmNvZmZlZSIsIi9Vc2Vycy9kamZvcnRoL3dlYnNpdGVzL21vZHVsZXMvY2Fyb3VzZWwvbGliL2Nhcm91c2VsSG9sZGVyRGlyLmNvZmZlZSIsIi9Vc2Vycy9kamZvcnRoL3dlYnNpdGVzL21vZHVsZXMvY2Fyb3VzZWwvbGliL2Nhcm91c2VsSXRlbURpci5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQSxZQUFBLENBQUE7QUFBQSxJQUFBLDBGQUFBOztBQUFBLE9BRUEsQ0FBUSxTQUFSLENBRkEsQ0FBQTs7QUFBQSxDQUdBLEdBQUssT0FBQSxDQUFRLFFBQVIsQ0FITCxDQUFBOztBQUFBLGFBTUEsR0FBZ0IsT0FBQSxDQUFRLG9CQUFSLENBTmhCLENBQUE7O0FBQUEsWUFTQSxHQUFvQixPQUFBLENBQVEsdUJBQVIsQ0FUcEIsQ0FBQTs7QUFBQSxZQVVBLEdBQW9CLE9BQUEsQ0FBUSx1QkFBUixDQVZwQixDQUFBOztBQUFBLGlCQVdBLEdBQW9CLE9BQUEsQ0FBUSw0QkFBUixDQVhwQixDQUFBOztBQUFBLGVBWUEsR0FBb0IsT0FBQSxDQUFRLDBCQUFSLENBWnBCLENBQUE7O0FBQUEsUUFjQSxHQUFZLE9BQU8sQ0FBQyxNQUFSLENBQWUsV0FBZixFQUE0QixDQUNwQyxvQkFEb0MsQ0FBNUIsQ0FHVixDQUFDLE9BSFMsQ0FHRCxjQUhDLEVBR2UsWUFIZixDQUlWLENBQUMsUUFKUyxDQUlBLGdCQUpBLEVBSWtCLFNBQUEsR0FBQTtBQUMxQixNQUFBLEdBQUE7QUFBQSxFQUFBLEdBQUEsR0FBTSxJQUFOLENBQUE7QUFDQSxTQUFPO0FBQUEsSUFDTCxNQUFBLEVBQU8sU0FBQyxJQUFELEdBQUE7YUFDTCxHQUFBLEdBQU0sS0FERDtJQUFBLENBREY7QUFBQSxJQUlMLElBQUEsRUFBSyxTQUFBLEdBQUE7QUFDSCxhQUFPO0FBQUEsUUFDTCxHQUFBLEVBQUksR0FEQztPQUFQLENBREc7SUFBQSxDQUpBO0dBQVAsQ0FGMEI7QUFBQSxDQUpsQixDQWdCVixDQUFDLFVBaEJTLENBZ0JFLGNBaEJGLEVBZ0JrQixZQWhCbEIsQ0FpQlYsQ0FBQyxTQWpCUyxDQWlCQyxnQkFqQkQsRUFpQm1CLGlCQWpCbkIsQ0FrQlYsQ0FBQyxTQWxCUyxDQWtCQyxjQWxCRCxFQWtCaUIsZUFsQmpCLENBbUJWLENBQUMsR0FuQlMsQ0FtQkw7RUFBQyxnQkFBRCxFQUFrQixTQUFDLENBQUQsR0FBQTtBQUNyQixJQUFBLENBQUMsQ0FBQyxHQUFGLENBQU0sc0JBQU4sRUFBNkIsc3RDQUE3QixDQUFBLENBQUE7V0FFQSxDQUFDLENBQUMsR0FBRixDQUFNLG9CQUFOLEVBQTJCLDhoQkFBM0IsRUFIcUI7RUFBQSxDQUFsQjtDQW5CSyxDQWRaLENBQUE7O0FBQUEsTUF1Q00sQ0FBQyxPQUFQLEdBQWlCLFFBdkNqQixDQUFBOzs7OztBQ0FBLElBQUEsQ0FBQTs7QUFBQSxDQUFBLEdBQUksT0FBQSxDQUFRLFFBQVIsQ0FBSixDQUFBOztBQUFBLE1BRU0sQ0FBQyxPQUFQLEdBQWlCO0VBQUMsUUFBRCxFQUFXLFNBQVgsRUFBc0IsVUFBdEIsRUFBa0MsY0FBbEMsRUFBa0QsU0FBQyxNQUFELEVBQVMsT0FBVCxFQUFrQixRQUFsQixFQUE0QixZQUE1QixHQUFBO0FBQ2pFLFFBQUEsS0FBQTtBQUFBLElBQUEsTUFBTSxDQUFDLE9BQVAsR0FBc0IsQ0FBQSxDQUF0QixDQUFBO0FBQUEsSUFDQSxNQUFNLENBQUMsTUFBUCxHQUFzQixDQUR0QixDQUFBO0FBQUEsSUFFQSxNQUFNLENBQUMsWUFBUCxHQUFzQixDQUZ0QixDQUFBO0FBQUEsSUFHQSxNQUFNLENBQUMsU0FBUCxHQUFzQixFQUh0QixDQUFBO0FBQUEsSUFJQSxLQUFBLEdBQVEsSUFBSSxDQUFDLEtBQUwsQ0FBVyxVQUFBLENBQVcsQ0FBWCxDQUFBLEdBQWdCLElBQTNCLENBSlIsQ0FBQTtBQUFBLElBTUEsWUFBWSxDQUFDLE9BQWIsQ0FBQSxDQUFzQixDQUFDLElBQXZCLENBQTRCLFNBQUMsT0FBRCxHQUFBO0FBQzFCLE1BQUEsTUFBTSxDQUFDLFNBQVAsR0FBbUIsT0FBbkIsQ0FBQTtBQUFBLE1BQ0EsTUFBTSxDQUFDLGNBQVAsR0FBd0IsTUFBTSxDQUFDLFNBQVMsQ0FBQyxNQUR6QyxDQUFBO0FBRUEsTUFBQSxJQUFBLENBQUEsQ0FBNkIsTUFBTSxDQUFDLFNBQVMsQ0FBQyxNQUFqQixHQUEwQixDQUF2RCxDQUFBO2VBQUEsTUFBTSxDQUFDLFlBQVAsQ0FBQSxFQUFBO09BSDBCO0lBQUEsQ0FBNUIsRUFJRSxTQUFDLENBQUQsR0FBQTtBQUNBLE1BQUEsTUFBTSxDQUFDLEtBQVAsR0FBZSxDQUFmLENBQUE7YUFDQSxLQUFBLENBQU0sQ0FBTixFQUZBO0lBQUEsQ0FKRixDQU5BLENBQUE7QUFBQSxJQWNBLE1BQU0sQ0FBQyxJQUFQLEdBQWMsU0FBQSxHQUFBO0FBRVosTUFBQSxNQUFNLENBQUMsT0FBUCxHQUFpQixNQUFNLENBQUMsWUFBeEIsQ0FBQTtBQUNBLE1BQUEsSUFBSSxNQUFNLENBQUMsWUFBUCxHQUFzQixNQUFNLENBQUMsY0FBUCxHQUF3QixDQUFsRDtBQUNFLFFBQUEsTUFBTSxDQUFDLFlBQVAsRUFBQSxDQURGO09BQUEsTUFBQTtBQUdFLFFBQUEsTUFBTSxDQUFDLFlBQVAsR0FBc0IsQ0FBdEIsQ0FIRjtPQURBO2FBTUEsTUFBTSxDQUFDLFdBQVAsQ0FBQSxFQVJZO0lBQUEsQ0FkZCxDQUFBO0FBQUEsSUF3QkEsTUFBTSxDQUFDLFFBQVAsR0FBa0IsU0FBQSxHQUFBO0FBQ2hCLE1BQUEsTUFBTSxDQUFDLE9BQVAsR0FBaUIsTUFBTSxDQUFDLFlBQXhCLENBQUE7QUFDQSxNQUFBLElBQUksTUFBTSxDQUFDLFlBQVAsR0FBc0IsQ0FBMUI7QUFDRSxRQUFBLE1BQU0sQ0FBQyxZQUFQLEVBQUEsQ0FERjtPQUFBLE1BQUE7QUFHRSxRQUFBLE1BQU0sQ0FBQyxZQUFQLEdBQXNCLE1BQU0sQ0FBQyxjQUFQLEdBQXdCLENBQTlDLENBSEY7T0FEQTthQU1BLE1BQU0sQ0FBQyxXQUFQLENBQW1CLFVBQW5CLEVBUGdCO0lBQUEsQ0F4QmxCLENBQUE7QUFBQSxJQWlDQSxNQUFNLENBQUMsUUFBUCxHQUFrQixTQUFDLENBQUQsR0FBQTtBQUNULE1BQUEsSUFBRyxNQUFNLENBQUMsWUFBUCxLQUF1QixDQUExQjtlQUFpQyxTQUFqQztPQUFBLE1BQUE7ZUFBK0MsR0FBL0M7T0FEUztJQUFBLENBakNsQixDQUFBO0FBQUEsSUFvQ0EsTUFBTSxDQUFDLE1BQVAsR0FBZ0IsU0FBQyxDQUFELEVBQUksQ0FBSixHQUFBO0FBQ2QsVUFBQSxhQUFBO0FBQUEsTUFBQSxJQUFHLENBQUEsS0FBRyxVQUFOO0FBQ0UsUUFBQSxLQUFBLEdBQVcsQ0FBRCxHQUFHLElBQWIsQ0FBQTtBQUFBLFFBQ0EsTUFBQSxHQUFRLEdBQUEsR0FBSSxDQUFKLEdBQU0sSUFEZCxDQURGO09BQUEsTUFBQTtBQUlFLFFBQUEsS0FBQSxHQUFRLEdBQUEsR0FBSSxDQUFKLEdBQU0sSUFBZCxDQUFBO0FBQUEsUUFDQSxNQUFBLEdBQVcsQ0FBRCxHQUFHLElBRGIsQ0FKRjtPQUFBO2FBT0E7QUFBQSxRQUFDLEtBQUEsRUFBTSxLQUFQO0FBQUEsUUFBYyxNQUFBLEVBQU8sTUFBckI7UUFSYztJQUFBLENBcENoQixDQUFBO0FBQUEsSUE4Q0EsTUFBTSxDQUFDLFVBQVAsR0FBb0IsU0FBQyxDQUFELEdBQUE7QUFDbEIsTUFBQSxNQUFNLENBQUMsT0FBUCxHQUFpQixNQUFNLENBQUMsWUFBeEIsQ0FBQTtBQUFBLE1BQ0EsTUFBTSxDQUFDLFlBQVAsR0FBc0IsQ0FEdEIsQ0FBQTthQUVBLE1BQU0sQ0FBQyxXQUFQLENBQUEsRUFIa0I7SUFBQSxDQTlDcEIsQ0FBQTtBQUFBLElBbURBLE1BQU0sQ0FBQyxZQUFQLEdBQXNCLFNBQUEsR0FBQTtBQUNwQixNQUFBLE1BQU0sQ0FBQyxZQUFQLENBQUEsQ0FBQSxDQUFBO2FBQ0EsTUFBTSxDQUFDLEtBQVAsR0FBZSxRQUFBLENBQVMsTUFBTSxDQUFDLElBQWhCLEVBQXNCLEtBQXRCLEVBRks7SUFBQSxDQW5EdEIsQ0FBQTtBQUFBLElBdURBLE1BQU0sQ0FBQyxXQUFQLEdBQXFCLFNBQUMsQ0FBRCxHQUFBO0FBQ25CLE1BQUEsTUFBTSxDQUFDLE9BQVAsR0FBc0IsTUFBTSxDQUFDLFlBQTdCLENBQUE7QUFBQSxNQUNBLE1BQU0sQ0FBQyxZQUFQLEdBQXNCLENBRHRCLENBQUE7QUFBQSxNQUVBLE1BQU0sQ0FBQyxXQUFQLENBQUEsQ0FGQSxDQUFBO2FBR0EsTUFBTSxDQUFDLFlBQVAsQ0FBQSxFQUptQjtJQUFBLENBdkRyQixDQUFBO0FBQUEsSUE2REEsTUFBTSxDQUFDLFlBQVAsR0FBc0IsU0FBQyxDQUFELEdBQUE7YUFDcEIsTUFBTSxDQUFDLFlBQVAsS0FBdUIsQ0FBdkIsSUFBNEIsTUFBTSxDQUFDLE9BQVAsS0FBa0IsRUFEMUI7SUFBQSxDQTdEdEIsQ0FBQTtXQWdFQSxNQUFNLENBQUMsWUFBUCxHQUFzQixTQUFBLEdBQUE7QUFDcEIsTUFBQSxJQUFJLE9BQU8sQ0FBQyxTQUFSLENBQWtCLE1BQU0sQ0FBQyxLQUF6QixDQUFKO0FBQ0UsUUFBQSxRQUFRLENBQUMsTUFBVCxDQUFnQixNQUFNLENBQUMsS0FBdkIsQ0FBQSxDQURGO09BQUE7YUFFQSxNQUFNLENBQUMsS0FBUCxHQUFlLE9BSEs7SUFBQSxFQWpFMkM7RUFBQSxDQUFsRDtDQUZqQixDQUFBOzs7OztBQ0FBLElBQUEsQ0FBQTs7QUFBQSxDQUFBLEdBQUksT0FBQSxDQUFRLFFBQVIsQ0FBSixDQUFBOztBQUFBLE1BR00sQ0FBQyxPQUFQLEdBQWlCLFNBQUMsS0FBRCxFQUFRLEVBQVIsRUFBWSxjQUFaLEdBQUE7QUFDZixNQUFBLFlBQUE7QUFBQSxFQUFBLFlBQUEsR0FBZSxFQUFmLENBQUE7QUFFQSxTQUFPO0FBQUEsSUFDTCxJQUFBLEVBQUssU0FBQSxHQUFBO2FBQ0gsYUFERztJQUFBLENBREE7QUFBQSxJQUdMLEtBQUEsRUFBTSxTQUFBLEdBQUE7YUFDSixZQUFBLEdBQWUsR0FEWDtJQUFBLENBSEQ7QUFBQSxJQUtMLE9BQUEsRUFBUSxTQUFBLEdBQUE7QUFDTixVQUFBLGNBQUE7QUFBQSxNQUFBLFFBQUEsR0FBVyxFQUFFLENBQUMsS0FBSCxDQUFBLENBQVgsQ0FBQTtBQUVBLE1BQUEsSUFBRyxDQUFDLENBQUMsT0FBRixDQUFVLFlBQVYsQ0FBSDtBQUNFLFFBQUEsSUFBQSxHQUFVLElBQUEsS0FBUSxFQUFYLEdBQW1CLE1BQW5CLEdBQStCLElBQXRDLENBQUE7QUFBQSxRQUNBLEtBQUssQ0FBQyxHQUFOLENBQVUsY0FBYyxDQUFDLEdBQXpCLENBQ0EsQ0FBQyxPQURELENBQ1UsU0FBQyxJQUFELEdBQUE7QUFDUixVQUFBLFlBQUEsR0FBZSxJQUFmLENBQUE7aUJBQ0EsUUFBUSxDQUFDLE9BQVQsQ0FBaUIsSUFBakIsRUFGUTtRQUFBLENBRFYsQ0FLQSxDQUFDLEtBTEQsQ0FLTyxTQUFBLEdBQUE7aUJBQ0wsUUFBUSxDQUFDLE1BQVQsQ0FBZ0IsOEdBQWhCLEVBREs7UUFBQSxDQUxQLENBREEsQ0FERjtPQUFBLE1BQUE7QUFVRSxRQUFBLFFBQVEsQ0FBQyxPQUFULENBQWlCLFlBQWpCLENBQUEsQ0FWRjtPQUZBO2FBY0EsUUFBUSxDQUFDLFFBZkg7SUFBQSxDQUxIO0FBQUEsSUFzQkwsT0FBQSxFQUFRLFNBQUMsQ0FBRCxHQUFBO2FBQ04sWUFBQSxHQUFlLEVBRFQ7SUFBQSxDQXRCSDtHQUFQLENBSGU7QUFBQSxDQUhqQixDQUFBOzs7OztBQ0FBLElBQUEsQ0FBQTs7QUFBQSxPQUFBLENBQVEsWUFBUixDQUFBLENBQUE7O0FBQUEsT0FDQSxDQUFRLFlBQVIsQ0FEQSxDQUFBOztBQUFBLENBR0EsR0FBSSxPQUFBLENBQVEsUUFBUixDQUhKLENBQUE7O0FBQUEsTUFLTSxDQUFDLE9BQVAsR0FBaUI7RUFBQyxVQUFELEVBQWEsY0FBYixFQUE2QixTQUFDLFFBQUQsR0FBQTtBQUU1QyxXQUFPO0FBQUEsTUFDTCxRQUFBLEVBQVUsR0FETDtBQUFBLE1BR0wsV0FBQSxFQUFhLHNCQUhSO0FBQUEsTUFJTCxVQUFBLEVBQVcsY0FKTjtBQUFBLE1BS0wsSUFBQSxFQUFLLFNBQUMsTUFBRCxFQUFTLEtBQVQsRUFBZ0IsTUFBaEIsR0FBQTtBQUVILFlBQUEsV0FBQTtBQUFBLFFBQUEsTUFBTSxDQUFDLFNBQVAsR0FBbUIsU0FBbkIsQ0FBQTtBQUFBLFFBQ0EsV0FBQSxHQUFjLENBRGQsQ0FBQTtBQUFBLFFBRUEsTUFBTSxDQUFDLFNBQVAsR0FBbUIsS0FGbkIsQ0FBQTtBQUFBLFFBSUEsS0FBSyxDQUFDLEVBQU4sQ0FBUyxZQUFULEVBQXVCLFNBQUEsR0FBQTtBQUNyQixVQUFBLElBQUEsQ0FBQSxNQUFtQyxDQUFDLFNBQXBDO21CQUFBLE1BQU0sQ0FBQyxZQUFQLENBQUEsRUFBQTtXQURxQjtRQUFBLENBQXZCLENBSkEsQ0FBQTtBQUFBLFFBT0EsS0FBSyxDQUFDLEVBQU4sQ0FBUyxZQUFULEVBQXVCLFNBQUEsR0FBQTtBQUNyQixVQUFBLElBQUEsQ0FBQSxDQUE2QixNQUFNLENBQUMsU0FBUCxJQUFvQixNQUFNLENBQUMsU0FBUyxDQUFDLE1BQWpCLEdBQTBCLENBQTNFLENBQUE7bUJBQUEsTUFBTSxDQUFDLFlBQVAsQ0FBQSxFQUFBO1dBRHFCO1FBQUEsQ0FBdkIsQ0FQQSxDQUFBO0FBQUEsUUFrQkEsTUFBTSxDQUFDLFVBQVAsR0FBb0IsU0FBQSxHQUFBO0FBQ2xCLFVBQUEsTUFBTSxDQUFDLFNBQVAsR0FBbUIsS0FBbkIsQ0FBQTtpQkFDQSxNQUFNLENBQUMsWUFBUCxDQUFBLEVBRmtCO1FBQUEsQ0FsQnBCLENBQUE7QUFBQSxRQXNCQSxNQUFNLENBQUMsV0FBUCxHQUFvQixTQUFBLEdBQUE7QUFDbEIsY0FBQSxlQUFBO0FBQUEsVUFBQSxNQUFBLEdBQVUsUUFBUSxDQUFDLGNBQVQsQ0FBd0IsTUFBQSxHQUFPLE1BQU0sQ0FBQyxZQUF0QyxDQUFWLENBQUE7QUFBQSxVQUNBLE9BQUEsR0FBVSxRQUFRLENBQUMsY0FBVCxDQUF3QixNQUFBLEdBQU8sTUFBTSxDQUFDLE9BQXRDLENBRFYsQ0FBQTtpQkFHQTtBQUFBLFlBQUMsTUFBQSxFQUFPLE1BQVI7QUFBQSxZQUFnQixPQUFBLEVBQVEsT0FBeEI7WUFKa0I7UUFBQSxDQXRCcEIsQ0FBQTtlQTZCQSxNQUFNLENBQUMsV0FBUCxHQUFxQixTQUFDLElBQUQsR0FBQTtBQUNuQixjQUFBLDRDQUFBOztZQURvQixPQUFLO1dBQ3pCO0FBQUEsVUFBQSxNQUFNLENBQUMsU0FBUCxHQUFtQixJQUFuQixDQUFBO0FBQUEsVUFDQSxLQUFBLEdBQVEsS0FBTSxDQUFBLENBQUEsQ0FBRSxDQUFDLFdBRGpCLENBQUE7QUFBQSxVQUVBLEtBQUEsR0FBUSxNQUFNLENBQUMsV0FBUCxDQUFBLENBRlIsQ0FBQTtBQUlBLFVBQUEsSUFBRyxLQUFLLENBQUMsTUFBTixJQUFnQixLQUFLLENBQUMsT0FBekI7QUFDRSxZQUFBLEdBQUEsR0FBTSxNQUFNLENBQUMsTUFBUCxDQUFjLEtBQWQsRUFBcUIsSUFBckIsQ0FBTixDQUFBO0FBQUEsWUFFQSxNQUFNLENBQUMsU0FBUyxDQUFDLEdBQWpCLENBQXFCLEtBQUssQ0FBQyxNQUEzQixFQUFtQztBQUFBLGNBQUMsR0FBQSxFQUFJO0FBQUEsZ0JBQUMsSUFBQSxFQUFLLEdBQUcsQ0FBQyxLQUFWO2VBQUw7YUFBbkMsQ0FGQSxDQUFBO0FBQUEsWUFJQSxXQUFBLEdBQW9CLElBQUEsTUFBTSxDQUFDLFNBQVAsQ0FBaUIsS0FBSyxDQUFDLE1BQXZCLEVBQStCLEdBQS9CLEVBQW9DO0FBQUEsY0FBQyxHQUFBLEVBQUk7QUFBQSxnQkFBQyxJQUFBLEVBQUssR0FBTjtlQUFMO2FBQXBDLEVBQXNELE1BQU0sQ0FBQyxVQUE3RCxDQUpwQixDQUFBO0FBQUEsWUFLQSxZQUFBLEdBQW9CLElBQUEsTUFBTSxDQUFDLFNBQVAsQ0FBaUIsS0FBSyxDQUFDLE9BQXZCLEVBQWdDLEdBQWhDLEVBQXFDO0FBQUEsY0FBQyxHQUFBLEVBQUk7QUFBQSxnQkFBQyxJQUFBLEVBQUssR0FBRyxDQUFDLE1BQVY7ZUFBTDthQUFyQyxDQUxwQixDQUFBO21CQU9BLFdBQVcsQ0FBQyxhQUFaLENBQTBCLFlBQTFCLEVBQXdDLE1BQU0sQ0FBQyxVQUEvQyxFQVJGO1dBTG1CO1FBQUEsRUEvQmxCO01BQUEsQ0FMQTtLQUFQLENBRjRDO0VBQUEsQ0FBN0I7Q0FMakIsQ0FBQTs7Ozs7QUNBQSxJQUFBLENBQUE7O0FBQUEsQ0FBQSxHQUFJLE9BQUEsQ0FBUSxRQUFSLENBQUosQ0FBQTs7QUFBQSxNQUVNLENBQUMsT0FBUCxHQUFpQjtFQUFDLFNBQUEsR0FBQTtBQUNoQixXQUFPO0FBQUEsTUFDTCxRQUFBLEVBQVUsR0FETDtBQUFBLE1BR0wsVUFBQSxFQUFZLElBSFA7QUFBQSxNQUlMLFdBQUEsRUFBYSxvQkFKUjtBQUFBLE1BS0wsS0FBQSxFQUFNO0FBQUEsUUFDSixRQUFBLEVBQVMsV0FETDtPQUxEO0FBQUEsTUFRTCxJQUFBLEVBQUssU0FBQyxNQUFELEVBQVMsS0FBVCxFQUFnQixNQUFoQixHQUFBO2VBQ0gsTUFBTSxDQUFDLE1BQVAsQ0FBYyxVQUFkLEVBQTBCLFNBQUMsR0FBRCxHQUFBO0FBQ3hCLGNBQUEsUUFBQTtBQUFBLFVBQUEsSUFBQSxDQUFBLENBQVEsQ0FBQyxXQUFGLENBQWMsR0FBZCxDQUFQO0FBQ0UsWUFBQSxHQUFBLEdBQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFmLENBQUE7QUFBQSxZQUNBLEdBQUEsR0FBTSxPQUFPLENBQUMsT0FBUixDQUFnQixLQUFLLENBQUMsUUFBTixDQUFBLENBQWdCLENBQUMsUUFBakIsQ0FBQSxDQUE0QixDQUFBLENBQUEsQ0FBNUMsQ0FETixDQUFBO21CQUVBLEdBQUcsQ0FBQyxHQUFKLENBQVE7QUFBQSxjQUFDLGtCQUFBLEVBQW1CLE9BQUEsR0FBUSxHQUFSLEdBQVksSUFBaEM7QUFBQSxjQUFxQyxpQkFBQSxFQUFrQixPQUF2RDthQUFSLEVBSEY7V0FEd0I7UUFBQSxDQUExQixFQURHO01BQUEsQ0FSQTtLQUFQLENBRGdCO0VBQUEsQ0FBRDtDQUZqQixDQUFBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIid1c2Ugc3RyaWN0J1xuXG5yZXF1aXJlKCdhbmd1bGFyJylcbl8gID0gcmVxdWlyZSgnbG9kYXNoJylcblxuIyBVdGlsaXRpZXNcbnZpZXdEZXRlY3Rpb24gPSByZXF1aXJlKCd2aWV3cG9ydC1kZXRlY3Rpb24nKVxuIyBwYWdlUGF0aCAgICAgID0gcmVxdWlyZSgnLi4vdXRpbHMvcGFnZV9wYXRoLmNvZmZlZScpXG5cbmNhcm91c2VsRmN0eSAgICAgID0gcmVxdWlyZSgnLi9jYXJvdXNlbEZjdHkuY29mZmVlJylcbmNhcm91c2VsQ3RybCAgICAgID0gcmVxdWlyZSgnLi9jYXJvdXNlbEN0cmwuY29mZmVlJylcbmNhcm91c2VsSG9sZGVyRGlyID0gcmVxdWlyZSgnLi9jYXJvdXNlbEhvbGRlckRpci5jb2ZmZWUnKVxuY2Fyb3VzZWxJdGVtRGlyICAgPSByZXF1aXJlKCcuL2Nhcm91c2VsSXRlbURpci5jb2ZmZWUnKVxuXG5jYXJvdXNlbCA9ICBhbmd1bGFyLm1vZHVsZSgnJGNhcm91c2VsJywgW1xuICAgICckdmlld3BvcnREZXRlY3Rpb24nXG4gIF0pXG4gIC5mYWN0b3J5KCdDYXJvdXNlbEZjdHknLCBjYXJvdXNlbEZjdHkpXG4gIC5wcm92aWRlcignc2V0Q2Fyb3VzZWxVcmwnLCAoKS0+XG4gICAgdXJsID0gbnVsbDtcbiAgICByZXR1cm4ge1xuICAgICAgc2V0VXJsOihwYXRoKS0+XG4gICAgICAgIHVybCA9IHBhdGhcblxuICAgICAgJGdldDooKS0+XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgdXJsOnVybFxuICAgICAgICB9XG4gICAgfVxuICApXG4gIC5jb250cm9sbGVyKCdDYXJvdXNlbEN0cmwnLCBjYXJvdXNlbEN0cmwpXG4gIC5kaXJlY3RpdmUoJ2Nhcm91c2VsSG9sZGVyJywgY2Fyb3VzZWxIb2xkZXJEaXIpXG4gIC5kaXJlY3RpdmUoJ2Nhcm91c2VsSXRlbScsIGNhcm91c2VsSXRlbURpcilcbiAgLnJ1bihbXCIkdGVtcGxhdGVDYWNoZVwiLChzKS0+XG4gICAgcy5wdXQoXCJjYXJvdXNlbC1ob2xkZXIuaHRtbFwiLCc8ZGl2IGNsYXNzPVwicm93IGNvbnRlbnQtYXJlYSBjYXJvdXNlbC1jb250ZW50XCIgbmctaGlkZT1cImNhcm91c2Vscy5sZW5ndGggPD0gMFwiPjxkaXYgaWQ9XCJjYXJvdXNlbHNcIj48ZGl2IGNsYXNzPVwiY2Fyb3VzZWwtaG9sZGVyXCI+PGRpdiBjbGFzcz1cImNhcm91c2VsLWlubmVyXCI+PGRpdiBjbGFzcz1cIml0ZW1cIiBpZD1cIml0ZW17eyRpbmRleH19XCIgbmctcmVwZWF0PVwiaXRlbSBpbiBjYXJvdXNlbHNcIiBuZy1zaG93PVwic2hvd0Nhcm91c2VsKCRpbmRleClcIj48c2VjdGlvbiBjYXJvdXNlbC1pdGVtPVwiXCIgY2Fyb3VzZWw9XCJpdGVtXCI+PC9zZWN0aW9uPjwvZGl2PjwvZGl2PjxkaXYgY2xhc3M9XCJsaXN0LWhvbGRlclwiPjxkaXYgY2xhc3M9XCJjYXJvdXNlbC1saXN0XCI+PHVsIG5nLWlmPVwiY2Fyb3VzZWxzLmxlbmd0aCA+IDFcIj48bGkgbmctcmVwZWF0PVwiaXRlbSBpbiBjYXJvdXNlbHNcIj48YSBocmVmPVwiamF2YXNjcmlwdDpcIiBuZy1jbGljaz1cInNlbGVjdEl0ZW0oJGluZGV4KVwiIG5nLWNsYXNzPVwic2V0Q2xhc3MoJGluZGV4KVwiPjxzcGFuPnt7JGluZGV4fX08L3NwYW4+PC9hPjwvbGk+PC91bD48L2Rpdj48L2Rpdj48dWwgY2xhc3M9XCJjYXJvdXNlbC1uYXZcIiBuZy1pZj1cImNhcm91c2Vscy5sZW5ndGggPiAxXCI+PGxpIGNsYXNzPVwicHJldmlvdXNcIj48YSBjbGFzcz1cInByZXZpb3VzLWJ1dHRvblwiIG5nLWNsaWNrPVwicHJldmlvdXMoKVwiIGhyZWY9XCJqYXZhc2NyaXB0OlwiPjxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdib3g9XCIwIDAgNjEyIDc5MlwiIGVuYWJsZS1iYWNrZ3JvdW5kPVwibmV3IDAgMCA2MTIgNzkyXCI+PHBhdGggZmlsbD1cIm5vbmVcIiBzdHJva2U9XCIjYTZhNmE2XCIgc3Ryb2tlLXdpZHRoPVwiMjBweFwiIGQ9XCJNNTA3LjEgMTBMMTEyLjQgNDA0LjdsMzc5LjcgMzc5LjhcIj48L3BhdGg+PC9zdmc+PC9hPjwvbGk+PGxpIGNsYXNzPVwibmV4dFwiPjxhIGNsYXNzPVwibmV4dC1idXR0b25cIiBuZy1jbGljaz1cIm5leHQoKVwiIGhyZWY9XCJqYXZhc2NyaXB0OlwiPjxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdib3g9XCIwIDAgNjEyIDc5MlwiIGVuYWJsZS1iYWNrZ3JvdW5kPVwibmV3IDAgMCA2MTIgNzkyXCI+PHBhdGggZmlsbD1cIm5vbmVcIiBzdHJva2U9XCIjYTZhNmE2XCIgc3Ryb2tlLXdpZHRoPVwiMjBweFwiIGQ9XCJNMTI3LjQgNzg0LjVsMzc5LjctMzc5LjhMMTEyLjQgMTBcIj48L3BhdGg+PC9zdmc+PC9hPjwvbGk+PC91bD48L2Rpdj48L2Rpdj48L2Rpdj4nKVxuXG4gICAgcy5wdXQoXCJjYXJvdXNlbC1pdGVtLmh0bWxcIiwnPGEgaHJlZj1cInt7Y2Fyb3VzZWwudXJsfX1cIiBuZy1pZj1cImNhcm91c2VsLnVybFwiPjxkaXYgY2xhc3M9XCJpbWctaG9sZGVyXCI+PC9kaXY+PGRpdiBjbGFzcz1cInRleHQtd3JhcHBlclwiIG5nLWlmPVwiY2Fyb3VzZWwudGl0bGVcIj48aDEgY2xhc3M9XCJnZyB1cC1jXCI+PHNwYW4+e3tjYXJvdXNlbC50aXRsZX19PC9zcGFuPjwvaDE+PGgyIGNsYXNzPVwiZ2cgdXAtY1wiIG5nLWlmPVwiY2Fyb3VzZWwuc3VidGl0bGVcIj48c3Bhbj57e2Nhcm91c2VsLnN1YnRpdGxlfX08L3NwYW4+PC9oMj48L2Rpdj48L2E+IDxzcGFuIG5nLWlmPVwiIWNhcm91c2VsLnVybFwiPjxkaXYgY2xhc3M9XCJpbWctaG9sZGVyXCI+PC9kaXY+PGRpdiBjbGFzcz1cInRleHQtd3JhcHBlclwiIG5nLWlmPVwiY2Fyb3VzZWwudGl0bGVcIj48aDEgY2xhc3M9XCJnZyB1cC1jXCI+PHNwYW4+e3tjYXJvdXNlbC50aXRsZX19PC9zcGFuPjwvaDE+PGgyIGNsYXNzPVwiZ2cgdXAtY1wiIG5nLWlmPVwiY2Fyb3VzZWwuc3VidGl0bGVcIj48c3Bhbj57e2Nhcm91c2VsLnN1YnRpdGxlfX08L3NwYW4+PC9oMj48L2Rpdj48L3NwYW4+JylcbiAgICBdKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNhcm91c2VsIiwiXyA9IHJlcXVpcmUoJ2xvZGFzaCcpXG5cbm1vZHVsZS5leHBvcnRzID0gW1wiJHNjb3BlXCIsIFwiJHdpbmRvd1wiLCBcIiR0aW1lb3V0XCIsIFwiQ2Fyb3VzZWxGY3R5XCIsICgkc2NvcGUsICR3aW5kb3csICR0aW1lb3V0LCBDYXJvdXNlbEZjdHkpLT5cbiAgJHNjb3BlLml0ZW1PdXQgICAgICA9IC0xXG4gICRzY29wZS5pdGVtSW4gICAgICAgPSAwXG4gICRzY29wZS5pdGVtU2VsZWN0ZWQgPSAwXG4gICRzY29wZS5jYXJvdXNlbHMgICAgPSBbXVxuICBkZWxheSA9IE1hdGgucm91bmQocGFyc2VGbG9hdCg1KSAqIDEwMDApXG5cbiAgQ2Fyb3VzZWxGY3R5LmdldERhdGEoKS50aGVuIChyZXN1bHRzKS0+XG4gICAgJHNjb3BlLmNhcm91c2VscyA9IHJlc3VsdHNcbiAgICAkc2NvcGUuY2Fyb3VzZWxMZW5ndGggPSAkc2NvcGUuY2Fyb3VzZWxzLmxlbmd0aFxuICAgICRzY29wZS5yZXN0YXJ0VGltZXIoKSB1bmxlc3MgJHNjb3BlLmNhcm91c2Vscy5sZW5ndGggPCAyXG4gICwgKGUpLT5cbiAgICAkc2NvcGUuZXJyb3IgPSBlXG4gICAgYWxlcnQoZSlcblxuICAkc2NvcGUubmV4dCA9ICgpLT5cblxuICAgICRzY29wZS5pdGVtT3V0ID0gJHNjb3BlLml0ZW1TZWxlY3RlZFxuICAgIGlmICgkc2NvcGUuaXRlbVNlbGVjdGVkIDwgJHNjb3BlLmNhcm91c2VsTGVuZ3RoIC0gMSlcbiAgICAgICRzY29wZS5pdGVtU2VsZWN0ZWQrK1xuICAgIGVsc2VcbiAgICAgICRzY29wZS5pdGVtU2VsZWN0ZWQgPSAwXG5cbiAgICAkc2NvcGUuc2V0U2VsZWN0ZWQoKVxuXG4gICRzY29wZS5wcmV2aW91cyA9ICgpLT5cbiAgICAkc2NvcGUuaXRlbU91dCA9ICRzY29wZS5pdGVtU2VsZWN0ZWRcbiAgICBpZiAoJHNjb3BlLml0ZW1TZWxlY3RlZCA+IDApXG4gICAgICAkc2NvcGUuaXRlbVNlbGVjdGVkLS1cbiAgICBlbHNlXG4gICAgICAkc2NvcGUuaXRlbVNlbGVjdGVkID0gJHNjb3BlLmNhcm91c2VsTGVuZ3RoIC0gMVxuXG4gICAgJHNjb3BlLnNldFNlbGVjdGVkKFwicHJldmlvdXNcIilcblxuICAkc2NvcGUuc2V0Q2xhc3MgPSAobiktPlxuICAgIHJldHVybiBpZiAkc2NvcGUuaXRlbVNlbGVjdGVkID09IG4gdGhlbiBcImFjdGl2ZVwiIGVsc2UgXCJcIlxuXG4gICRzY29wZS5zZXRwb3MgPSAodywgdCktPlxuICAgIGlmIHQ9PSdwcmV2aW91cydcbiAgICAgIGlucG9zID0gXCIje3d9cHhcIlxuICAgICAgb3V0cG9zPSBcIi0je3d9cHhcIlxuICAgIGVsc2VcbiAgICAgIGlucG9zID0gXCItI3t3fXB4XCJcbiAgICAgIG91dHBvcz0gXCIje3d9cHhcIlxuXG4gICAge2lucG9zOmlucG9zLCBvdXRwb3M6b3V0cG9zfVxuXG4gICRzY29wZS5zZWxlY3RJdGVtID0gKG4pLT5cbiAgICAkc2NvcGUuaXRlbU91dCA9ICRzY29wZS5pdGVtU2VsZWN0ZWRcbiAgICAkc2NvcGUuaXRlbVNlbGVjdGVkID0gblxuICAgICRzY29wZS5zZXRTZWxlY3RlZCgpXG5cbiAgJHNjb3BlLnJlc3RhcnRUaW1lciA9ICgpLT5cbiAgICAkc2NvcGUuc3RvcEF1dG9wbGF5KClcbiAgICAkc2NvcGUudGltZXIgPSAkdGltZW91dCgkc2NvcGUubmV4dCwgZGVsYXkpXG5cbiAgJHNjb3BlLnNldENhcm91c2VsID0gKG4pLT5cbiAgICAkc2NvcGUuaXRlbU91dCAgICAgID0gJHNjb3BlLml0ZW1TZWxlY3RlZFxuICAgICRzY29wZS5pdGVtU2VsZWN0ZWQgPSBuXG4gICAgJHNjb3BlLnNldFNlbGVjdGVkKClcbiAgICAkc2NvcGUucmVzdGFydFRpbWVyKClcblxuICAkc2NvcGUuc2hvd0Nhcm91c2VsID0gKG4pLT5cbiAgICAkc2NvcGUuaXRlbVNlbGVjdGVkID09IG4gb3IgJHNjb3BlLml0ZW1PdXQgPT0gblxuXG4gICRzY29wZS5zdG9wQXV0b3BsYXkgPSAoKS0+XG4gICAgaWYgKGFuZ3VsYXIuaXNEZWZpbmVkKCRzY29wZS50aW1lcikpXG4gICAgICAkdGltZW91dC5jYW5jZWwoJHNjb3BlLnRpbWVyKVxuICAgICRzY29wZS50aW1lciA9IHVuZGVmaW5lZFxuXSIsIl8gPSByZXF1aXJlICdsb2Rhc2gnXG5cblxubW9kdWxlLmV4cG9ydHMgPSAoJGh0dHAsICRxLCBzZXRDYXJvdXNlbFVybCktPlxuICBjYXJvdXNlbERhdGEgPSBbXVxuXG4gIHJldHVybiB7XG4gICAgZGF0YTooKS0+XG4gICAgICBjYXJvdXNlbERhdGFcbiAgICBmbHVzaDooKS0+XG4gICAgICBjYXJvdXNlbERhdGEgPSBbXVxuICAgIGdldERhdGE6KCktPlxuICAgICAgZGVmZXJyZWQgPSAkcS5kZWZlcigpXG5cbiAgICAgIGlmIF8uaXNFbXB0eShjYXJvdXNlbERhdGEpXG4gICAgICAgIHBhZ2UgPSBpZiBwYWdlID09IFwiXCIgdGhlbiBcImhvbWVcIiBlbHNlIHBhZ2VcbiAgICAgICAgJGh0dHAuZ2V0KHNldENhcm91c2VsVXJsLnVybClcbiAgICAgICAgLnN1Y2Nlc3MoIChkYXRhKS0+XG4gICAgICAgICAgY2Fyb3VzZWxEYXRhID0gZGF0YVxuICAgICAgICAgIGRlZmVycmVkLnJlc29sdmUoZGF0YSk7XG4gICAgICAgIClcbiAgICAgICAgLmVycm9yICgpLT5cbiAgICAgICAgICBkZWZlcnJlZC5yZWplY3QoXCJBbiBlcnJvciBvY2N1cnJlZCB3aGlsZSBmZXRjaGluZyBpdGVtcywgd2UgaGF2ZSBiZWVuIG5vdGlmaWVkIGFuZCBhcmUgaW52ZXN0aWdhdGluZy4gIFBsZWFzZSB0cnkgYWdhaW4gbGF0ZXJcIilcbiAgICAgIGVsc2VcbiAgICAgICAgZGVmZXJyZWQucmVzb2x2ZShjYXJvdXNlbERhdGEpO1xuXG4gICAgICBkZWZlcnJlZC5wcm9taXNlXG5cbiAgICBzZXREYXRhOihkKS0+XG4gICAgICBjYXJvdXNlbERhdGEgPSBkXG4gIH0iLCJyZXF1aXJlICd0d2Vlbi1saXRlJ1xucmVxdWlyZSAnY3NzLXBsdWdpbidcblxuXyA9IHJlcXVpcmUoJ2xvZGFzaCcpXG5cbm1vZHVsZS5leHBvcnRzID0gWyckdGltZW91dCcsIFwiQ2Fyb3VzZWxGY3R5XCIsICgkdGltZW91dCktPlxuXG4gIHJldHVybiB7XG4gICAgcmVzdHJpY3Q6ICdBJyxcbiAgICAjIHRyYW5zY2x1ZGU6IHRydWUsXG4gICAgdGVtcGxhdGVVcmw6ICdjYXJvdXNlbC1ob2xkZXIuaHRtbCcsXG4gICAgY29udHJvbGxlcjpcIkNhcm91c2VsQ3RybFwiLFxuICAgIGxpbms6KCRzY29wZSwgJGVsZW0sICRhdHRycyktPlxuXG4gICAgICAkc2NvcGUuVHdlZW5MaXRlID0gVHdlZW5MaXRlXG4gICAgICBsb2FkZWRDb3VudCA9IDBcbiAgICAgICRzY29wZS5hbmltYXRpbmcgPSBmYWxzZVxuXG4gICAgICAkZWxlbS5vbiAnbW91c2VlbnRlcicsICgpLT5cbiAgICAgICAgJHNjb3BlLnN0b3BBdXRvcGxheSgpIHVubGVzcyAkc2NvcGUuYW5pbWF0aW5nXG5cbiAgICAgICRlbGVtLm9uICdtb3VzZWxlYXZlJywgKCktPlxuICAgICAgICAkc2NvcGUucmVzdGFydFRpbWVyKCkgdW5sZXNzICRzY29wZS5hbmltYXRpbmcgb3IgJHNjb3BlLmNhcm91c2Vscy5sZW5ndGggPCAyXG5cbiAgICAgICMgQ2hlY2tzIGltYWdlcyBhcmUgbG9hZGVkXG4gICAgICAjICRzY29wZS5sb2FkZWQgPSAoKS0+XG4gICAgICAjICAgbG9hZGVkQ291bnQrK1xuXG4gICAgICAjICAgaWYgbG9hZGVkQ291bnQgPT0gJHNjb3BlLmNhcm91c2VsTGVuZ3RoIGFuZCAkc2NvcGUuY2Fyb3VzZWxMZW5ndGggID4gMFxuXG4gICAgICAjICAgICAkc2NvcGUucmVzdGFydFRpbWVyKClcbiAgICAgICMgICAgIGxvYWRlZCA9IHRydWVcbiAgICAgICRzY29wZS5vbkNvbXBsZXRlID0gKCktPlxuICAgICAgICAkc2NvcGUuYW5pbWF0aW5nID0gZmFsc2VcbiAgICAgICAgJHNjb3BlLnJlc3RhcnRUaW1lcigpXG5cbiAgICAgICRzY29wZS5nZXRFbGVtZW50cz0gKCktPlxuICAgICAgICBpdGVtSW4gID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpdGVtI3skc2NvcGUuaXRlbVNlbGVjdGVkfVwiKVxuICAgICAgICBpdGVtT3V0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpdGVtI3skc2NvcGUuaXRlbU91dH1cIilcblxuICAgICAgICB7aXRlbUluOml0ZW1JbiwgaXRlbU91dDppdGVtT3V0fVxuXG4gICAgICAjQW5pbWF0ZXMgb2xkIGl0ZW0gb2ZmIGFuZCBuZXcgaXRlbSBvblxuICAgICAgJHNjb3BlLnNldFNlbGVjdGVkID0gKHR5cGU9XCJuZXh0XCIpLT5cbiAgICAgICAgJHNjb3BlLmFuaW1hdGluZyA9IHRydWVcbiAgICAgICAgd2lkdGggPSAkZWxlbVswXS5jbGllbnRXaWR0aFxuICAgICAgICBpdGVtcyA9ICRzY29wZS5nZXRFbGVtZW50cygpXG5cbiAgICAgICAgaWYgaXRlbXMuaXRlbUluIG9yIGl0ZW1zLml0ZW1PdXRcbiAgICAgICAgICBwb3MgPSAkc2NvcGUuc2V0cG9zKHdpZHRoLCB0eXBlKVxuXG4gICAgICAgICAgJHNjb3BlLlR3ZWVuTGl0ZS5zZXQoaXRlbXMuaXRlbUluLCB7Y3NzOntsZWZ0OnBvcy5pbnBvc319KVxuXG4gICAgICAgICAgYW5pbWF0aW9uSW4gICA9IG5ldyAkc2NvcGUuVHdlZW5MaXRlKGl0ZW1zLml0ZW1JbiwgMC41LCB7Y3NzOntsZWZ0OlwiMFwifX0sICRzY29wZS5vbkNvbXBsZXRlKVxuICAgICAgICAgIGFuaW1hdGlvbk91dCAgPSBuZXcgJHNjb3BlLlR3ZWVuTGl0ZShpdGVtcy5pdGVtT3V0LCAwLjUsIHtjc3M6e2xlZnQ6cG9zLm91dHBvc319KVxuXG4gICAgICAgICAgYW5pbWF0aW9uSW4uZXZlbnRDYWxsYmFjayBcIm9uQ29tcGxldGVcIiwgJHNjb3BlLm9uQ29tcGxldGVcblxuICB9XG5dIiwiXyA9IHJlcXVpcmUoJ2xvZGFzaCcpXG5cbm1vZHVsZS5leHBvcnRzID0gWygpIC0+XG4gIHJldHVybiB7XG4gICAgcmVzdHJpY3Q6ICdBJyxcblxuICAgIHRyYW5zY2x1ZGU6IHRydWUsXG4gICAgdGVtcGxhdGVVcmw6IFwiY2Fyb3VzZWwtaXRlbS5odG1sXCJcbiAgICBzY29wZTp7XG4gICAgICBjYXJvdXNlbDpcIj1jYXJvdXNlbFwiXG4gICAgfSxcbiAgICBsaW5rOigkc2NvcGUsICRlbGVtLCAkYXR0cnMpLT5cbiAgICAgICRzY29wZS4kd2F0Y2ggXCJjYXJvdXNlbFwiLCAoY2FyKS0+XG4gICAgICAgIHVubGVzcyBfLmlzVW5kZWZpbmVkIGNhclxuICAgICAgICAgIHVybCA9IGNhci5tYWluLnNyY1xuICAgICAgICAgIGltZyA9IGFuZ3VsYXIuZWxlbWVudCgkZWxlbS5jaGlsZHJlbigpLmNoaWxkcmVuKClbMF0pXG4gICAgICAgICAgaW1nLmNzcyh7J2JhY2tncm91bmQtaW1hZ2UnOlwidXJsKCcje3VybH0nKVwiLCAnYmFja2dyb3VuZC1zaXplJzonY292ZXInfSlcbiAgfV0iXX0=
