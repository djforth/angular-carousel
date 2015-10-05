var _;

_ = require('lodash');

module.exports = [
  function() {
    return {
      restrict: 'A',
      transclude: true,
      templateUrl: "carousel-item.html",
      scope: {
        background: "=background",
        subtitle: "=subtitle",
        title: "=title",
        url: "=url"
      },
      link: function($scope, $elem, $attrs) {
        return $scope.$watch("carousel", function(car) {
          var img;
          if (!_.isUndefined(car)) {
            img = angular.element($elem.children().children()[0]);
            return img.css({
              'background-image': "url('" + $scope.background + "')",
              'background-size': 'cover'
            });
          }
        });
      }
    };
  }
];
