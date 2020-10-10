(function (window) {
    window.yaakovGreeter = {};
    yaakovGreeter.name = "Yaakov";
    var greeting = "Hello ";
    yaakovGreeter.sayHello = function () {
      console.log(greeting + yaakovGreeter.name);
    }
  
    //window.yaakovGreeter = yaakovGreeter;
  
  })(window); 