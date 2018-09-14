module.exports = function(onError) {
  return function(promise) {
    return promise
      .then(function(result) {
        return [null, result]
      })
      .catch(function(err) {
        if (onError) {
          onError(err)
        }
        return [err]
      })
  }
}
