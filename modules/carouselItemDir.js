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
