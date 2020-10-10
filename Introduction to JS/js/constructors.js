function test() {
    console.log(this);
    this.myname = "julio"
}

test();
console.log(window.myname);


  
// Function constructors
function Circle (radius) {
    this.radius = radius;
  }
  //inheritence
  Circle.prototype.getArea = 
    function () {
      return Math.PI * Math.pow(this.radius, 2);
    };
  
  
  var myCircle = new Circle(10);
  console.log(myCircle.getArea());
  
  var myOtherCircle = new Circle(20);
  console.log(myOtherCircle);