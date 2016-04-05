_ = require('lodash/core')

module.exports = [() ->
  return {
    restrict: 'A',

    transclude: true,
    templateUrl: "carousel-item.html"
    scope:{
      carousel:"=carousel"
    },
    link:($scope, $elem, $attrs)->
      $scope.$watch "carousel", (car)->
        unless _.isUndefined car
          url = car.main.src
          img = angular.element($elem.children().children()[0])
          img.css({'background-image':"url('#{url}')", 'background-size':'cover'})
  }]