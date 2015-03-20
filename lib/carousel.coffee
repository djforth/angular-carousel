'use strict'

require('angular')
_  = require('lodash')

# Utilities
viewDetection = require('viewport-detection')
# pagePath      = require('../utils/page_path.coffee')

carouselFcty      = require('./carouselFcty.coffee')
carouselCtrl      = require('./carouselCtrl.coffee')
carouselHolderDir = require('./carouselHolderDir.coffee')
carouselItemDir   = require('./carouselItemDir.coffee')

carousel =  angular.module('$carousel', [
    '$viewportDetection'
  ])
  .factory('CarouselFcty', carouselFcty)
  .provider('setCarouselUrl', ()->
    url = null;
    return {
      setUrl:(path)->
        url = path

      $get:()->
        return {
          url:url
        }
    }
  )
  .controller('CarouselCtrl', carouselCtrl)
  .directive('carouselHolder', carouselHolderDir)
  .directive('carouselItem', carouselItemDir)
  .run(["$templateCache",(s)->
    s.put("carousel-holder.html",'<div class="row content-area carousel-content" ng-hide="carousels.length <= 0"><div id="carousels"><div class="carousel-holder"><div class="carousel-inner"><div class="item" id="item{{$index}}" ng-repeat="item in carousels" ng-show="showCarousel($index)"><section carousel-item="" carousel="item"></section></div></div><div class="list-holder"><div class="carousel-list"><ul ng-if="carousels.length > 1"><li ng-repeat="item in carousels"><a href="javascript:" ng-click="selectItem($index)" ng-class="setClass($index)"><span>{{$index}}</span></a></li></ul></div></div><ul class="carousel-nav" ng-if="carousels.length > 1"><li class="previous"><a class="previous-button" ng-click="previous()" href="javascript:"><svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 612 792" enable-background="new 0 0 612 792"><path fill="none" stroke="#a6a6a6" stroke-width="20px" d="M507.1 10L112.4 404.7l379.7 379.8"></path></svg></a></li><li class="next"><a class="next-button" ng-click="next()" href="javascript:"><svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 612 792" enable-background="new 0 0 612 792"><path fill="none" stroke="#a6a6a6" stroke-width="20px" d="M127.4 784.5l379.7-379.8L112.4 10"></path></svg></a></li></ul></div></div></div>')

    s.put("carousel-item.html",'<a href="{{carousel.url}}" ng-if="carousel.url"><div class="img-holder"></div><div class="text-wrapper" ng-if="carousel.title"><h1 class="gg up-c"><span>{{carousel.title}}</span></h1><h2 class="gg up-c" ng-if="carousel.subtitle"><span>{{carousel.subtitle}}</span></h2></div></a> <span ng-if="!carousel.url"><div class="img-holder"></div><div class="text-wrapper" ng-if="carousel.title"><h1 class="gg up-c"><span>{{carousel.title}}</span></h1><h2 class="gg up-c" ng-if="carousel.subtitle"><span>{{carousel.subtitle}}</span></h2></div></span>')
    ])

module.exports = carousel