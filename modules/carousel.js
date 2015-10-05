'use strict';
var _, carousel, carouselCtrl, carouselFcty, carouselHolderDir, carouselItemDir, viewDetection;

require('angular');

_ = require('lodash');

viewDetection = require('viewport-detection');

carouselFcty = require('./carouselFcty');

carouselCtrl = require('./carouselCtrl');

carouselHolderDir = require('./carouselHolderDir');

carouselItemDir = require('./carouselItemDir');

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
    s.put("carousel-holder.html", '<div class="row content-area carousel-content" ng-hide="carousels.length <= 0"><div id="carousels"><div class="carousel-holder" ng-class="setHolderClass()"><div class="carousel-inner"><div class="item" id="item{{$index}}" ng-repeat="item in carousels" ng-show="showCarousel($index)"><section carousel-item="" background="setBackground(item)" subtitle="item.subtitle" title="item.title" url="item.url"></section></div></div><div class="list-holder"><div class="carousel-list"><ul ng-if="carousels.length > 1"><li ng-repeat="item in carousels"><a href="javascript:" ng-click="selectItem($index)" ng-class="setClass($index)"><span>{{$index}}</span></a></li></ul></div></div><ul class="carousel-nav" ng-if="carousels.length > 1"><li class="previous"><a class="previous-button" ng-click="previous()" href="javascript:"><svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 612 792" enable-background="new 0 0 612 792"><path fill="none" stroke="#a6a6a6" stroke-width="20px" d="M507.1 10L112.4 404.7l379.7 379.8"></path></svg></a></li><li class="next"><a class="next-button" ng-click="next()" href="javascript:"><svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 612 792" enable-background="new 0 0 612 792"><path fill="none" stroke="#a6a6a6" stroke-width="20px" d="M127.4 784.5l379.7-379.8L112.4 10"></path></svg></a></li></ul></div></div></div>');
    return s.put("carousel-item.html", '<a href="{{url}}" ng-if="url"><div class="img-holder"></div><div class="wrap"><div class="text-wrapper" ng-if="title"><h1 class="gg up-c"><span>{{title}}</span></h1></div><button ng-if="subtitle">{{subtitle}}</button></div></a> <span ng-if="!url"><div class="img-holder"></div><div class="wrap"><div class="text-wrapper" ng-if="title"><h1 class="gg up-c"><span>{{title}}</span></h1></div></div></span>');
  }
]);

module.exports = carousel;
