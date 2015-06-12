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
    s.put("carousel-holder.html", '<div class="row content-area carousel-content" ng-hide="carousels.length <= 0"><div id="carousels"><div class="carousel-holder" ng-class="setHolderClass()"><div class="carousel-inner"><div class="item" id="item{{$index}}" ng-repeat="item in carousels" ng-show="showCarousel($index)"><section carousel-item="" carousel="item"></section></div></div><div class="list-holder"><div class="carousel-list"><ul ng-if="carousels.length > 1"><li ng-repeat="item in carousels"><a href="javascript:" ng-click="selectItem($index)" ng-class="setClass($index)"><span>{{$index}}</span></a></li></ul></div></div><ul class="carousel-nav" ng-if="carousels.length > 1"><li class="previous"><a class="previous-button" ng-click="previous()" href="javascript:"><svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 612 792" enable-background="new 0 0 612 792"><path fill="none" stroke="#a6a6a6" stroke-width="20px" d="M507.1 10L112.4 404.7l379.7 379.8"></path></svg></a></li><li class="next"><a class="next-button" ng-click="next()" href="javascript:"><svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 612 792" enable-background="new 0 0 612 792"><path fill="none" stroke="#a6a6a6" stroke-width="20px" d="M127.4 784.5l379.7-379.8L112.4 10"></path></svg></a></li></ul></div></div></div>');
    return s.put("carousel-item.html", '<a href="{{carousel.url}}" ng-if="carousel.url"><div class="img-holder"></div><div class="text-wrapper" ng-if="carousel.title"><h1 class="gg up-c"><span>{{carousel.title}}</span></h1><h2 class="gg up-c" ng-if="carousel.subtitle"><span>{{carousel.subtitle}}</span></h2></div></a> <span ng-if="!carousel.url"><div class="img-holder"></div><div class="text-wrapper" ng-if="carousel.title"><h1 class="gg up-c"><span>{{carousel.title}}</span></h1><h2 class="gg up-c" ng-if="carousel.subtitle"><span>{{carousel.subtitle}}</span></h2></div></span>');
  }
]);

module.exports = carousel;



},{"./carouselCtrl.coffee":"/Volumes/1TB_Drive/Modules/angular-carousel/lib/carouselCtrl.coffee","./carouselFcty.coffee":"/Volumes/1TB_Drive/Modules/angular-carousel/lib/carouselFcty.coffee","./carouselHolderDir.coffee":"/Volumes/1TB_Drive/Modules/angular-carousel/lib/carouselHolderDir.coffee","./carouselItemDir.coffee":"/Volumes/1TB_Drive/Modules/angular-carousel/lib/carouselItemDir.coffee","angular":"angular","lodash":"lodash","viewport-detection":"viewport-detection"}],"/Volumes/1TB_Drive/Modules/angular-carousel/lib/carouselCtrl.coffee":[function(require,module,exports){
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



},{"lodash":"lodash"}],"/Volumes/1TB_Drive/Modules/angular-carousel/lib/carouselFcty.coffee":[function(require,module,exports){
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



},{"lodash":"lodash"}],"/Volumes/1TB_Drive/Modules/angular-carousel/lib/carouselHolderDir.coffee":[function(require,module,exports){
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



},{"css-plugin":"css-plugin","lodash":"lodash","tween-lite":"tween-lite"}],"/Volumes/1TB_Drive/Modules/angular-carousel/lib/carouselItemDir.coffee":[function(require,module,exports){
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVm9sdW1lcy8xVEJfRHJpdmUvTW9kdWxlcy9hbmd1bGFyLWNhcm91c2VsL2xpYi9jYXJvdXNlbC5jb2ZmZWUiLCIvVm9sdW1lcy8xVEJfRHJpdmUvTW9kdWxlcy9hbmd1bGFyLWNhcm91c2VsL2xpYi9jYXJvdXNlbEN0cmwuY29mZmVlIiwiL1ZvbHVtZXMvMVRCX0RyaXZlL01vZHVsZXMvYW5ndWxhci1jYXJvdXNlbC9saWIvY2Fyb3VzZWxGY3R5LmNvZmZlZSIsIi9Wb2x1bWVzLzFUQl9Ecml2ZS9Nb2R1bGVzL2FuZ3VsYXItY2Fyb3VzZWwvbGliL2Nhcm91c2VsSG9sZGVyRGlyLmNvZmZlZSIsIi9Wb2x1bWVzLzFUQl9Ecml2ZS9Nb2R1bGVzL2FuZ3VsYXItY2Fyb3VzZWwvbGliL2Nhcm91c2VsSXRlbURpci5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUFBLElBQUE7O0FBRUEsT0FBQSxDQUFRLFNBQVI7O0FBQ0EsQ0FBQSxHQUFLLE9BQUEsQ0FBUSxRQUFSOztBQUdMLGFBQUEsR0FBZ0IsT0FBQSxDQUFRLG9CQUFSOztBQUdoQixZQUFBLEdBQW9CLE9BQUEsQ0FBUSx1QkFBUjs7QUFDcEIsWUFBQSxHQUFvQixPQUFBLENBQVEsdUJBQVI7O0FBQ3BCLGlCQUFBLEdBQW9CLE9BQUEsQ0FBUSw0QkFBUjs7QUFDcEIsZUFBQSxHQUFvQixPQUFBLENBQVEsMEJBQVI7O0FBRXBCLFFBQUEsR0FBWSxPQUFPLENBQUMsTUFBUixDQUFlLFdBQWYsRUFBNEIsQ0FDcEMsb0JBRG9DLENBQTVCLENBR1YsQ0FBQyxPQUhTLENBR0QsY0FIQyxFQUdlLFlBSGYsQ0FJVixDQUFDLFFBSlMsQ0FJQSxnQkFKQSxFQUlrQixTQUFBO0FBQzFCLE1BQUE7RUFBQSxHQUFBLEdBQU07QUFDTixTQUFPO0lBQ0wsTUFBQSxFQUFPLFNB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QSxDQUFBLEdBQUksT0FBQSxDQUFRLFFBQVI7O0FBRUosTUFBTSxDQUFDLE9BQVAsR0FBaUI7RUFBQyxTQUFBO0FBQ2hCLFdBQU87TUFDTCxRQUFBLEVBQVUsR0FETDtNQUdMLFVBQUEsRUFBWSxJQUhQO01BSUwsV0FBQSxFQUFhLG9CQUpSO01BS0wsS0FBQSxFQUFNO1FBQ0osUUFBQSxFQUFTLFdBREw7T0FMRDtNQVFMLElBQUEsRUFBSyxTQUFDLE1BQUQsRUFBUyxLQUFULEVBQWdCLE1BQWhCO2VBQ0gsTUFBTSxDQUFDLE1BQVAsQ0FBYyxVQUFkLEVBQTBCLFNBQUMsR0FBRDtBQUN4QixjQUFBO1VBQUEsSUFBQSxDQUFPLENBQUMsQ0FBQyxXQUFGLENBQWMsR0FBZCxDQUFQO1lBQ0UsR0FBQSxHQUFNLEdBQUcsQ0FBQyxJQUFJLENBQUM7WUFDZixHQUFBLEdBQU0sT0FBTyxDQUFDLE9BQVIsQ0FBZ0IsS0FBSyxDQUFDLFFBQU4sQ0FBQSxDQUFnQixDQUFDLFFBQWpCLENBQUEsQ0FBNEIsQ0FBQSxDQUFBLENBQTVDO21CQUNOLEdBQUcsQ0FBQyxHQUFKLENBQVE7Y0FBQyxrQkFBQSxFQUFtQixPQUFBLEdBQVEsR0FBUixHQUFZLElBQWhDO2NBQXFDLGlCQUFBLEVBQWtCLE9BQXZEO2FBQVIsRUFIRjs7UUFEd0IsQ0FBMUI7TUFERyxDQVJBOztFQURTLENBQUQiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiJ3VzZSBzdHJpY3QnXG5cbnJlcXVpcmUoJ2FuZ3VsYXInKVxuXyAgPSByZXF1aXJlKCdsb2Rhc2gnKVxuXG4jIFV0aWxpdGllc1xudmlld0RldGVjdGlvbiA9IHJlcXVpcmUoJ3ZpZXdwb3J0LWRldGVjdGlvbicpXG4jIHBhZ2VQYXRoICAgICAgPSByZXF1aXJlKCcuLi91dGlscy9wYWdlX3BhdGguY29mZmVlJylcblxuY2Fyb3VzZWxGY3R5ICAgICAgPSByZXF1aXJlKCcuL2Nhcm91c2VsRmN0eS5jb2ZmZWUnKVxuY2Fyb3VzZWxDdHJsICAgICAgPSByZXF1aXJlKCcuL2Nhcm91c2VsQ3RybC5jb2ZmZWUnKVxuY2Fyb3VzZWxIb2xkZXJEaXIgPSByZXF1aXJlKCcuL2Nhcm91c2VsSG9sZGVyRGlyLmNvZmZlZScpXG5jYXJvdXNlbEl0ZW1EaXIgICA9IHJlcXVpcmUoJy4vY2Fyb3VzZWxJdGVtRGlyLmNvZmZlZScpXG5cbmNhcm91c2VsID0gIGFuZ3VsYXIubW9kdWxlKCckY2Fyb3VzZWwnLCBbXG4gICAgJyR2aWV3cG9ydERldGVjdGlvbidcbiAgXSlcbiAgLmZhY3RvcnkoJ0Nhcm91c2VsRmN0eScsIGNhcm91c2VsRmN0eSlcbiAgLnByb3ZpZGVyKCdzZXRDYXJvdXNlbFVybCcsICgpLT5cbiAgICB1cmwgPSBudWxsO1xuICAgIHJldHVybiB7XG4gICAgICBzZXRVcmw6KHBhdGgpLT5cbiAgICAgICAgdXJsID0gcGF0aFxuXG4gICAgICAkZ2V0OigpLT5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB1cmw6dXJsXG4gICAgICAgIH1cbiAgICB9XG4gIClcbiAgLmNvbnRyb2xsZXIoJ0Nhcm91c2VsQ3RybCcsIGNhcm91c2VsQ3RybClcbiAgLmRpcmVjdGl2ZSgnY2Fyb3VzZWxIb2xkZXInLCBjYXJvdXNlbEhvbGRlckRpcilcbiAgLmRpcmVjdGl2ZSgnY2Fyb3VzZWxJdGVtJywgY2Fyb3VzZWxJdGVtRGlyKVxuICAucnVuKFtcIiR0ZW1wbGF0ZUNhY2hlXCIsKHMpLT5cbiAgICBzLnB1dChcImNhcm91c2VsLWhvbGRlci5odG1sXCIsJzxkaXYgY2xhc3M9XCJyb3cgY29udGVudC1hcmVhIGNhcm91c2VsLWNvbnRlbnRcIiBuZy1oaWRlPVwiY2Fyb3VzZWxzLmxlbmd0aCA8PSAwXCI+PGRpdiBpZD1cImNhcm91c2Vsc1wiPjxkaXYgY2xhc3M9XCJjYXJvdXNlbC1ob2xkZXJcIiBuZy1jbGFzcz1cInNldEhvbGRlckNsYXNzKClcIj48ZGl2IGNsYXNzPVwiY2Fyb3VzZWwtaW5uZXJcIj48ZGl2IGNsYXNzPVwiaXRlbVwiIGlkPVwiaXRlbXt7JGluZGV4fX1cIiBuZy1yZXBlYXQ9XCJpdGVtIGluIGNhcm91c2Vsc1wiIG5nLXNob3c9XCJzaG93Q2Fyb3VzZWwoJGluZGV4KVwiPjxzZWN0aW9uIGNhcm91c2VsLWl0ZW09XCJcIiBjYXJvdXNlbD1cIml0ZW1cIj48L3NlY3Rpb24+PC9kaXY+PC9kaXY+PGRpdiBjbGFzcz1cImxpc3QtaG9sZGVyXCI+PGRpdiBjbGFzcz1cImNhcm91c2VsLWxpc3RcIj48dWwgbmctaWY9XCJjYXJvdXNlbHMubGVuZ3RoID4gMVwiPjxsaSBuZy1yZXBlYXQ9XCJpdGVtIGluIGNhcm91c2Vsc1wiPjxhIGhyZWY9XCJqYXZhc2NyaXB0OlwiIG5nLWNsaWNrPVwic2VsZWN0SXRlbSgkaW5kZXgpXCIgbmctY2xhc3M9XCJzZXRDbGFzcygkaW5kZXgpXCI+PHNwYW4+e3skaW5kZXh9fTwvc3Bhbj48L2E+PC9saT48L3VsPjwvZGl2PjwvZGl2Pjx1bCBjbGFzcz1cImNhcm91c2VsLW5hdlwiIG5nLWlmPVwiY2Fyb3VzZWxzLmxlbmd0aCA+IDFcIj48bGkgY2xhc3M9XCJwcmV2aW91c1wiPjxhIGNsYXNzPVwicHJldmlvdXMtYnV0dG9uXCIgbmctY2xpY2s9XCJwcmV2aW91cygpXCIgaHJlZj1cImphdmFzY3JpcHQ6XCI+PHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld2JveD1cIjAgMCA2MTIgNzkyXCIgZW5hYmxlLWJhY2tncm91bmQ9XCJuZXcgMCAwIDYxMiA3OTJcIj48cGF0aCBmaWxsPVwibm9uZVwiIHN0cm9rZT1cIiNhNmE2YTZcIiBzdHJva2Utd2lkdGg9XCIyMHB4XCIgZD1cIk01MDcuMSAxMEwxMTIuNCA0MDQuN2wzNzkuNyAzNzkuOFwiPjwvcGF0aD48L3N2Zz48L2E+PC9saT48bGkgY2xhc3M9XCJuZXh0XCI+PGEgY2xhc3M9XCJuZXh0LWJ1dHRvblwiIG5nLWNsaWNrPVwibmV4dCgpXCIgaHJlZj1cImphdmFzY3JpcHQ6XCI+PHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld2JveD1cIjAgMCA2MTIgNzkyXCIgZW5hYmxlLWJhY2tncm91bmQ9XCJuZXcgMCAwIDYxMiA3OTJcIj48cGF0aCBmaWxsPVwibm9uZVwiIHN0cm9rZT1cIiNhNmE2YTZcIiBzdHJva2Utd2lkdGg9XCIyMHB4XCIgZD1cIk0xMjcuNCA3ODQuNWwzNzkuNy0zNzkuOEwxMTIuNCAxMFwiPjwvcGF0aD48L3N2Zz48L2E+PC9saT48L3VsPjwvZGl2PjwvZGl2PjwvZGl2PicpXG5cbiAgICBzLnB1dChcImNhcm91c2VsLWl0ZW0uaHRtbFwiLCc8YSBocmVmPVwie3tjYXJvdXNlbC51cmx9fVwiIG5nLWlmPVwiY2Fyb3VzZWwudXJsXCI+PGRpdiBjbGFzcz1cImltZy1ob2xkZXJcIj48L2Rpdj48ZGl2IGNsYXNzPVwidGV4dC13cmFwcGVyXCIgbmctaWY9XCJjYXJvdXNlbC50aXRsZVwiPjxoMSBjbGFzcz1cImdnIHVwLWNcIj48c3Bhbj57e2Nhcm91c2VsLnRpdGxlfX08L3NwYW4+PC9oMT48aDIgY2xhc3M9XCJnZyB1cC1jXCIgbmctaWY9XCJjYXJvdXNlbC5zdWJ0aXRsZVwiPjxzcGFuPnt7Y2Fyb3VzZWwuc3VidGl0bGV9fTwvc3Bhbj48L2gyPjwvZGl2PjwvYT4gPHNwYW4gbmctaWY9XCIhY2Fyb3VzZWwudXJsXCI+PGRpdiBjbGFzcz1cImltZy1ob2xkZXJcIj48L2Rpdj48ZGl2IGNsYXNzPVwidGV4dC13cmFwcGVyXCIgbmctaWY9XCJjYXJvdXNlbC50aXRsZVwiPjxoMSBjbGFzcz1cImdnIHVwLWNcIj48c3Bhbj57e2Nhcm91c2VsLnRpdGxlfX08L3NwYW4+PC9oMT48aDIgY2xhc3M9XCJnZyB1cC1jXCIgbmctaWY9XCJjYXJvdXNlbC5zdWJ0aXRsZVwiPjxzcGFuPnt7Y2Fyb3VzZWwuc3VidGl0bGV9fTwvc3Bhbj48L2gyPjwvZGl2Pjwvc3Bhbj4nKVxuICAgIF0pXG5cbm1vZHVsZS5leHBvcnRzID0gY2Fyb3VzZWwiLCJfID0gcmVxdWlyZSgnbG9kYXNoJylcblxubW9kdWxlLmV4cG9ydHMgPSBbXCIkc2NvcGVcIiwgXCIkd2luZG93XCIsIFwiJHRpbWVvdXRcIiwgXCJDYXJvdXNlbEZjdHlcIiwgKCRzY29wZSwgJHdpbmRvdywgJHRpbWVvdXQsIENhcm91c2VsRmN0eSktPlxuICAkc2NvcGUuaXRlbU91dCAgICAgID0gLTFcbiAgJHNjb3BlLml0ZW1JbiAgICAgICA9IDBcbiAgJHNjb3BlLml0ZW1TZWxlY3RlZCA9IDBcbiAgJHNjb3BlLmNhcm91c2VscyAgICA9IFtdXG4gIGRlbGF5ID0gTWF0aC5yb3VuZChwYXJzZUZsb2F0KDUpICogMTAwMClcblxuICBDYXJvdXNlbEZjdHkuZ2V0RGF0YSgpLnRoZW4gKHJlc3VsdHMpLT5cbiAgICAkc2NvcGUuY2Fyb3VzZWxzID0gcmVzdWx0c1xuICAgICRzY29wZS5jYXJvdXNlbExlbmd0aCA9ICRzY29wZS5jYXJvdXNlbHMubGVuZ3RoXG4gICAgJHNjb3BlLnJlc3RhcnRUaW1lcigpIHVubGVzcyAkc2NvcGUuY2Fyb3VzZWxzLmxlbmd0aCA8IDJcbiAgLCAoZSktPlxuICAgICRzY29wZS5lcnJvciA9IGVcbiAgICBhbGVydChlKVxuXG4gICRzY29wZS5uZXh0ID0gKCktPlxuXG4gICAgJHNjb3BlLml0ZW1PdXQgPSAkc2NvcGUuaXRlbVNlbGVjdGVkXG4gICAgaWYgKCRzY29wZS5pdGVtU2VsZWN0ZWQgPCAkc2NvcGUuY2Fyb3VzZWxMZW5ndGggLSAxKVxuICAgICAgJHNjb3BlLml0ZW1TZWxlY3RlZCsrXG4gICAgZWxzZVxuICAgICAgJHNjb3BlLml0ZW1TZWxlY3RlZCA9IDBcblxuICAgICRzY29wZS5zZXRTZWxlY3RlZCgpXG5cbiAgJHNjb3BlLnByZXZpb3VzID0gKCktPlxuICAgICRzY29wZS5pdGVtT3V0ID0gJHNjb3BlLml0ZW1TZWxlY3RlZFxuICAgIGlmICgkc2NvcGUuaXRlbVNlbGVjdGVkID4gMClcbiAgICAgICRzY29wZS5pdGVtU2VsZWN0ZWQtLVxuICAgIGVsc2VcbiAgICAgICRzY29wZS5pdGVtU2VsZWN0ZWQgPSAkc2NvcGUuY2Fyb3VzZWxMZW5ndGggLSAxXG5cbiAgICAkc2NvcGUuc2V0U2VsZWN0ZWQoXCJwcmV2aW91c1wiKVxuXG4gICRzY29wZS5zZXRDbGFzcyA9IChuKS0+XG4gICAgcmV0dXJuIGlmICRzY29wZS5pdGVtU2VsZWN0ZWQgPT0gbiB0aGVuIFwiYWN0aXZlXCIgZWxzZSBcIlwiXG5cbiAgJHNjb3BlLnNldHBvcyA9ICh3LCB0KS0+XG4gICAgaWYgdD09J3ByZXZpb3VzJ1xuICAgICAgaW5wb3MgPSBcIiN7d31weFwiXG4gICAgICBvdXRwb3M9IFwiLSN7d31weFwiXG4gICAgZWxzZVxuICAgICAgaW5wb3MgPSBcIi0je3d9cHhcIlxuICAgICAgb3V0cG9zPSBcIiN7d31weFwiXG5cbiAgICB7aW5wb3M6aW5wb3MsIG91dHBvczpvdXRwb3N9XG5cbiAgJHNjb3BlLnNlbGVjdEl0ZW0gPSAobiktPlxuICAgIGlmIG4gIT0gJHNjb3BlLml0ZW1TZWxlY3RlZFxuICAgICAgJHNjb3BlLml0ZW1PdXQgPSAkc2NvcGUuaXRlbVNlbGVjdGVkXG4gICAgICAkc2NvcGUuaXRlbVNlbGVjdGVkID0gblxuICAgICAgJHNjb3BlLnNldFNlbGVjdGVkKClcblxuICAkc2NvcGUucmVzdGFydFRpbWVyID0gKCktPlxuICAgICRzY29wZS5zdG9wQXV0b3BsYXkoKVxuICAgICRzY29wZS50aW1lciA9ICR0aW1lb3V0KCRzY29wZS5uZXh0LCBkZWxheSlcblxuICAkc2NvcGUuc2V0Q2Fyb3VzZWwgPSAobiktPlxuICAgICRzY29wZS5pdGVtT3V0ICAgICAgPSAkc2NvcGUuaXRlbVNlbGVjdGVkXG4gICAgJHNjb3BlLml0ZW1TZWxlY3RlZCA9IG5cbiAgICAkc2NvcGUuc2V0U2VsZWN0ZWQoKVxuICAgICRzY29wZS5yZXN0YXJ0VGltZXIoKVxuXG4gICRzY29wZS5zaG93Q2Fyb3VzZWwgPSAobiktPlxuICAgICRzY29wZS5pdGVtU2VsZWN0ZWQgPT0gbiBvciAkc2NvcGUuaXRlbU91dCA9PSBuXG5cbiAgJHNjb3BlLnN0b3BBdXRvcGxheSA9ICgpLT5cbiAgICBpZiAoYW5ndWxhci5pc0RlZmluZWQoJHNjb3BlLnRpbWVyKSlcbiAgICAgICR0aW1lb3V0LmNhbmNlbCgkc2NvcGUudGltZXIpXG4gICAgJHNjb3BlLnRpbWVyID0gdW5kZWZpbmVkXG5dIiwiXyA9IHJlcXVpcmUgJ2xvZGFzaCdcblxuXG5tb2R1bGUuZXhwb3J0cyA9ICgkaHR0cCwgJHEsIHNldENhcm91c2VsVXJsKS0+XG4gIGNhcm91c2VsRGF0YSA9IFtdXG5cbiAgcmV0dXJuIHtcbiAgICBkYXRhOigpLT5cbiAgICAgIGNhcm91c2VsRGF0YVxuICAgIGZsdXNoOigpLT5cbiAgICAgIGNhcm91c2VsRGF0YSA9IFtdXG4gICAgZ2V0RGF0YTooKS0+XG4gICAgICBkZWZlcnJlZCA9ICRxLmRlZmVyKClcblxuICAgICAgaWYgXy5pc0VtcHR5KGNhcm91c2VsRGF0YSlcbiAgICAgICAgcGFnZSA9IGlmIHBhZ2UgPT0gXCJcIiB0aGVuIFwiaG9tZVwiIGVsc2UgcGFnZVxuICAgICAgICAkaHR0cC5nZXQoc2V0Q2Fyb3VzZWxVcmwudXJsKVxuICAgICAgICAuc3VjY2VzcyggKGRhdGEpLT5cbiAgICAgICAgICBjYXJvdXNlbERhdGEgPSBkYXRhXG4gICAgICAgICAgZGVmZXJyZWQucmVzb2x2ZShkYXRhKTtcbiAgICAgICAgKVxuICAgICAgICAuZXJyb3IgKCktPlxuICAgICAgICAgIGRlZmVycmVkLnJlamVjdChcIkFuIGVycm9yIG9jY3VycmVkIHdoaWxlIGZldGNoaW5nIGl0ZW1zLCB3ZSBoYXZlIGJlZW4gbm90aWZpZWQgYW5kIGFyZSBpbnZlc3RpZ2F0aW5nLiAgUGxlYXNlIHRyeSBhZ2FpbiBsYXRlclwiKVxuICAgICAgZWxzZVxuICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKGNhcm91c2VsRGF0YSk7XG5cbiAgICAgIGRlZmVycmVkLnByb21pc2VcblxuICAgIHNldERhdGE6KGQpLT5cbiAgICAgIGNhcm91c2VsRGF0YSA9IGRcbiAgfSIsInJlcXVpcmUgJ3R3ZWVuLWxpdGUnXG5yZXF1aXJlICdjc3MtcGx1Z2luJ1xuXG5fID0gcmVxdWlyZSgnbG9kYXNoJylcblxubW9kdWxlLmV4cG9ydHMgPSBbJyR0aW1lb3V0JywgXCJDYXJvdXNlbEZjdHlcIiwgKCR0aW1lb3V0KS0+XG5cbiAgcmV0dXJuIHtcbiAgICByZXN0cmljdDogJ0EnLFxuICAgICMgdHJhbnNjbHVkZTogdHJ1ZSxcbiAgICB0ZW1wbGF0ZVVybDogJ2Nhcm91c2VsLWhvbGRlci5odG1sJyxcbiAgICBjb250cm9sbGVyOlwiQ2Fyb3VzZWxDdHJsXCIsXG4gICAgbGluazooJHNjb3BlLCAkZWxlbSwgJGF0dHJzKS0+XG5cbiAgICAgICRzY29wZS5Ud2VlbkxpdGUgPSBUd2VlbkxpdGVcbiAgICAgIGxvYWRlZENvdW50ID0gMFxuICAgICAgJHNjb3BlLmFuaW1hdGluZyA9IGZhbHNlXG5cbiAgICAgICRlbGVtLm9uICdtb3VzZWVudGVyJywgKCktPlxuICAgICAgICAkc2NvcGUuc3RvcEF1dG9wbGF5KCkgdW5sZXNzICRzY29wZS5hbmltYXRpbmdcblxuICAgICAgJGVsZW0ub24gJ21vdXNlbGVhdmUnLCAoKS0+XG4gICAgICAgICRzY29wZS5yZXN0YXJ0VGltZXIoKSB1bmxlc3MgJHNjb3BlLmFuaW1hdGluZyBvciAkc2NvcGUuY2Fyb3VzZWxzLmxlbmd0aCA8IDJcblxuICAgICAgIyBDaGVja3MgaW1hZ2VzIGFyZSBsb2FkZWRcbiAgICAgICMgJHNjb3BlLmxvYWRlZCA9ICgpLT5cbiAgICAgICMgICBsb2FkZWRDb3VudCsrXG5cbiAgICAgICMgICBpZiBsb2FkZWRDb3VudCA9PSAkc2NvcGUuY2Fyb3VzZWxMZW5ndGggYW5kICRzY29wZS5jYXJvdXNlbExlbmd0aCAgPiAwXG5cbiAgICAgICMgICAgICRzY29wZS5yZXN0YXJ0VGltZXIoKVxuICAgICAgIyAgICAgbG9hZGVkID0gdHJ1ZVxuICAgICAgJHNjb3BlLm9uQ29tcGxldGUgPSAoKS0+XG4gICAgICAgICRzY29wZS5hbmltYXRpbmcgPSBmYWxzZVxuICAgICAgICAkc2NvcGUucmVzdGFydFRpbWVyKClcblxuICAgICAgJHNjb3BlLmdldEVsZW1lbnRzPSAoKS0+XG4gICAgICAgIGl0ZW1JbiAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIml0ZW0jeyRzY29wZS5pdGVtU2VsZWN0ZWR9XCIpXG4gICAgICAgIGl0ZW1PdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIml0ZW0jeyRzY29wZS5pdGVtT3V0fVwiKVxuXG4gICAgICAgIHtpdGVtSW46aXRlbUluLCBpdGVtT3V0Oml0ZW1PdXR9XG5cbiAgICAgICRzY29wZS5zZXRIb2xkZXJDbGFzcyA9ICgpIC0+XG4gICAgICAgIGFjdGl2ZUl0ZW0gPSAkc2NvcGUuY2Fyb3VzZWxzWyRzY29wZS5pdGVtU2VsZWN0ZWRdXG5cbiAgICAgICAgaWYgXy5pc1VuZGVmaW5lZChhY3RpdmVJdGVtKVxuICAgICAgICAgIHJldHVybiBcIlwiXG5cbiAgICAgICAgaWYgIV8uaXNOdWxsKGFjdGl2ZUl0ZW0udGl0bGUpIG9yICFfLmlzTnVsbChhY3RpdmVJdGVtLnN1YnRpdGxlKVxuICAgICAgICAgIHJldHVybiBcIndpdGgtdGV4dFwiXG5cbiAgICAgICAgcmV0dXJuIFwiXCJcblxuICAgICAgI0FuaW1hdGVzIG9sZCBpdGVtIG9mZiBhbmQgbmV3IGl0ZW0gb25cbiAgICAgICRzY29wZS5zZXRTZWxlY3RlZCA9ICh0eXBlPVwibmV4dFwiKS0+XG4gICAgICAgICRzY29wZS5hbmltYXRpbmcgPSB0cnVlXG4gICAgICAgIHdpZHRoID0gJGVsZW1bMF0uY2xpZW50V2lkdGhcbiAgICAgICAgaXRlbXMgPSAkc2NvcGUuZ2V0RWxlbWVudHMoKVxuXG4gICAgICAgIGlmIGl0ZW1zLml0ZW1JbiBvciBpdGVtcy5pdGVtT3V0XG4gICAgICAgICAgcG9zID0gJHNjb3BlLnNldHBvcyh3aWR0aCwgdHlwZSlcblxuICAgICAgICAgICRzY29wZS5Ud2VlbkxpdGUuc2V0KGl0ZW1zLml0ZW1Jbiwge2Nzczp7bGVmdDpwb3MuaW5wb3N9fSlcblxuICAgICAgICAgIGFuaW1hdGlvbkluICAgPSBuZXcgJHNjb3BlLlR3ZWVuTGl0ZShpdGVtcy5pdGVtSW4sIDAuNSwge2Nzczp7bGVmdDpcIjBcIn19LCAkc2NvcGUub25Db21wbGV0ZSlcbiAgICAgICAgICBhbmltYXRpb25PdXQgID0gbmV3ICRzY29wZS5Ud2VlbkxpdGUoaXRlbXMuaXRlbU91dCwgMC41LCB7Y3NzOntsZWZ0OnBvcy5vdXRwb3N9fSlcblxuICAgICAgICAgIGFuaW1hdGlvbkluLmV2ZW50Q2FsbGJhY2sgXCJvbkNvbXBsZXRlXCIsICRzY29wZS5vbkNvbXBsZXRlXG5cbiAgfVxuXSIsIl8gPSByZXF1aXJlKCdsb2Rhc2gnKVxuXG5tb2R1bGUuZXhwb3J0cyA9IFsoKSAtPlxuICByZXR1cm4ge1xuICAgIHJlc3RyaWN0OiAnQScsXG5cbiAgICB0cmFuc2NsdWRlOiB0cnVlLFxuICAgIHRlbXBsYXRlVXJsOiBcImNhcm91c2VsLWl0ZW0uaHRtbFwiXG4gICAgc2NvcGU6e1xuICAgICAgY2Fyb3VzZWw6XCI9Y2Fyb3VzZWxcIlxuICAgIH0sXG4gICAgbGluazooJHNjb3BlLCAkZWxlbSwgJGF0dHJzKS0+XG4gICAgICAkc2NvcGUuJHdhdGNoIFwiY2Fyb3VzZWxcIiwgKGNhciktPlxuICAgICAgICB1bmxlc3MgXy5pc1VuZGVmaW5lZCBjYXJcbiAgICAgICAgICB1cmwgPSBjYXIubWFpbi5zcmNcbiAgICAgICAgICBpbWcgPSBhbmd1bGFyLmVsZW1lbnQoJGVsZW0uY2hpbGRyZW4oKS5jaGlsZHJlbigpWzBdKVxuICAgICAgICAgIGltZy5jc3MoeydiYWNrZ3JvdW5kLWltYWdlJzpcInVybCgnI3t1cmx9JylcIiwgJ2JhY2tncm91bmQtc2l6ZSc6J2NvdmVyJ30pXG4gIH1dIl19
