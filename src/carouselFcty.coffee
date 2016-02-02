_ = require 'lodash'


module.exports = ($http, $q, setCarouselUrl)->
  carouselData = []

  return {
    data:()->
      carouselData
    flush:()->
      carouselData = []
    getData:()->
      deferred = $q.defer()

      if _.isEmpty(carouselData)
        page = if page == "" then "home" else page
        $http.get(setCarouselUrl.url)
        .success( (data)->
          carouselData = data
          deferred.resolve(data);
        )
        .error ()->
          deferred.reject("An error occurred while fetching items, we have been notified and are investigating.  Please try again later")
      else
        deferred.resolve(carouselData);

      deferred.promise

    setData:(d)->
      carouselData = d
  }