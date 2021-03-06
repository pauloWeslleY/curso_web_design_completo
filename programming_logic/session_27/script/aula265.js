(function () {
   'use strict';

   let $txtMsg = document.getElementById('message');
   $txtMsg.addEventListener('keypress', keypress);
   $txtMsg.addEventListener('keyup', keyup);
   $txtMsg.addEventListener('keydown', keydown);
   $txtMsg.addEventListener('input', input);

   function keypress(e) {
      console.log(`keypress ${this.value}`);
   }
   function keyup(e) {
      console.log(`keyup ${this.value}`);
   }
   function keydown(e) {
      console.log(`keydown ${this.value}`);
   }
   function input(e) {
      console.log(`input ${this.value}`);
      console.log(this.value);
   }
})()