_ = require('lodash')

module.exports = [() ->
  return {
    restrict: 'A',

    transclude: true,
    templateUrl: "carousel-item.html"
    scope: {
      background: "=background",
      subtitle: "=subtitle",
      title: "=title",
      url: "=url"
    },
    link:($scope, $elem, $attrs)->
      $scope.$watch "carousel", (car)->
        unless _.isUndefined car
          img = angular.element($elem.children().children()[0])
          img.css({'background-image':"url('#{$scope.background}')", 'background-size':'cover'})
  }]