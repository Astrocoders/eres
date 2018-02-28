module.exports = function(promise) {
  return promise
    .then(function(result) {
      return [null, result]
    })
    .catch(function(err) {
      return [err]
    })
}
