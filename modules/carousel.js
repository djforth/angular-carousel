'use strict';
var _, carousel, carouselCtrl, carouselFcty, carouselHolderDir, carouselItemDir, viewDetection;

require('angular');

_ = require('lodash');

viewDetection = require('viewport-detection');

carouselFcty = require('./carouselFcty.coffee');

carouselCtrl = require('./carouselCtrl.coffee');

carouselHolderDir = require('./carouselHolderDir.coffee');

carouselItemDir = require('./carouselItemDir.coffee');

carousel = angular.module('$carousel', ['$viewportDetection']).factory('CarouselFcty', carouselFcty).service('SetFactoryUrl', function() {
  var url;
  url = null;
  return {
    setUrl: function(path) {
      return url = path;
    },
    getUrl: function() {
      return url;
    }
  };
}).controller('CarouselCtrl', carouselCtrl).directive('carouselHolder', carouselHolderDir).directive('carouselItem', carouselItemDir);

module.exports = carousel;
