// Part 4 parsing arguments and setting defaults
var ray = (function() {
    var DEFAULTS = {
        say: 'hello',
        speed: 'normal'
    }

    return {
      speak: function() {
          var myArguments = arguments[0] || '';
          var statement = myArguments.say || DEFAULTS.say;
          console.log(statement);
          return this;
      },
        run: function() {
            var myArguments = arguments[0] || '';
            var running = myArguments.speed || DEFAULTS.speed;
            console.log('running...' + running);
            return this;
        }
    };
})();

//// Part 4 parsing arguments and setting defaults
//var ray = (function() {
//    var DEFAULTS = {
//        say: 'hello'
//    }
//
//    return {
//      speak: function() {
//          var myArguments = arguments[0] || '';
//          var statement = myArguments.say || DEFAULTS.say;
//          console.log(statement);
//      }
//    };
//})();

//// Part 3 namespacing
//var ray = (function() {
//    return {
//      speak: function() {
//          console.log('hello');
//      }
//    };
//})();

//// Part 1 anonnymous closure
//(function() {
//    console.log('foo');
//})();