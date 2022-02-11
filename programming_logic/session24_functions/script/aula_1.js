/*
   ?Aula 228! <==
*/
// NOTE: function literal
function calc(n1, n2) {
   // corpo do function
   return n1 + n2;
}

const calculator = calc(10, 20);
console.log(`the result is: ${calculator}`);

calc.test = 'property function';
console.log(calc.test);

let test = function(f) {
   f();
};

test(function () {
   console.log('function passed by params!');
});

console.log('<== <= === >= ==>');
/*
   <=
      ?Aula 229! <==
   >=
*/

var x = 0;
var y;
function showX() {
   var x = 10; // escopo global!!!
   var y = 20;
   console.log(`show X inside: ${x}`);
   console.log(`show Y inside: ${y}`);
}
showX();

console.log(`show X out: ${x}`);
console.log(`show Y out: ${y}`);