var _;

_ = require('lodash');

module.exports = function($http, $q, SetFactoryUrl) {
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
        $http.get(SetFactoryUrl.getUrl()).success(function(data) {
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
