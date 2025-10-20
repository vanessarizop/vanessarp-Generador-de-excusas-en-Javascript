import "bootstrap";
import "./style.css";

let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
let action = ['ate', 'peed', 'crushed', 'broke'];
let what = ['my homework', 'my phone', 'the car'];
let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

function  excuseGenerator(array){
  let nroRandom = Math.floor(Math.random() * array.length);
 return array[nroRandom];
}

window.onload = function() {
   let randomExcuse = excuseGenerator(who) +" "+ excuseGenerator(action) +" "+excuseGenerator(what) +" "+ excuseGenerator(when);
  document.getElementById("excuse").innerText =randomExcuse;
      };
