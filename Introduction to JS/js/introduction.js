var x = "In global";
console.log("global: x = " + x);


var a = function(){
    var x = "inside a";
    console.log("a: x = " + x);

    /*function b(){
        console.log("b: x = " + x);
    }*/

    b();
}

function b(){
    console.log("b: x = " + x);
}

a();

console.log("------------");

var y;
if( y == undefined){
    console.log("Y is undefined");
}

var message = "hello";
message += " world";
console.log(message);

/* Math operator */

console.log((5+4)/3);
console.log(undefined/3) /*NaN */

/* Equality */

var x=4, y=4
if(x == y){
    console.log("Equal");
}

if (x == "4"){
    console.log("Equal");
}


/*Strict equality */

if(x === "4"){
    console.log("Equal");
}
else{
    console.log("Not Equal");

}


// ***** If statement (all false)
if ( false || null || 
    undefined || "" || 0 || NaN) {
 console.log("This line won't ever execute");
}
else {
 console.log ("All false");
}

// ***** If statement (all true)
if (true && "hello" && 1 && -1 && "false") {
 console.log("All true");
}

// ***** Best practice for {} style
// Curly brace on the same or next line...
// Is it just a style?
function a() 
{
  return
  { 
    name: "Yaakov"
  };
}

function b() {
  return { 
      name: "Yaakov"
  };
}

console.log(a());
console.log(b());


// For loop
var sum = 0;
for (var i = 0; i < 10; i++) {
  console.log(i);
  sum = sum + i;
}
console.log("sum of 0 through 9 is: " + sum);


