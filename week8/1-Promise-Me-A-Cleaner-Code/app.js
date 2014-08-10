require.config({
  paths: {
    "Q": "bower_components/q/q"
  }
});

require(["Q"], function(Q) {

  function first() {
    // defered object
    var defer = Q.defer();

    setTimeout(function() {
      defer.resolve(42);
    }, 1000);

    return defer.promise;
  }

  function second() {
    var defer = Q.defer();

    setTimeout(function(){
      defer.resolve(2);
    }, 1000);

    return defer.promise;
  }

  function third() {
    console.log(3);
  }

  Q.fcall(first)
   .then(second)
   .then(third)
   .done();
});
