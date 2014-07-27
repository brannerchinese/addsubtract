// David Prager Branner
// 20140726

;(function IIFE(window, document, undefined){
  var values,
      x,
      x_input,
      y,
      y_input;
  // Main loop
  document.addEventListener('DOMContentLoaded', function(){
    'use strict';

    var form = document.getElementsByTagName("form");
    alert(form[0]);
    form[0].addEventListener("onchange", function() {
      alert("here");
      console.log("here");
    });
  });
})(window, document);

function acceptInput() {
  // Call validate().
  // If invalid, change color.
}

function doArithmetic(operator) {
  var values = document.getElementById('values'),
      x_input = values.x,
      x = x_input.value,
      y_input = values.y,
      y = y_input.value;

  // No empty values. QQQ perhaps unnecessary with HTML `required`.
  if (x === "" || y === "") {
    return false;
  }

  // Both values valid.
  else if (validate(x) && validate(y)) {
    document.getElementById("x").style.backgroundColor="#ffffff";
    document.getElementById("y").style.backgroundColor="#ffffff";
    x = parseInt(x);
    y = parseInt(y);
    if (operator === 'plus') {
      operator = '+';
      result = x + y;
    }
    else {
      operator = '-';
      result = x - y;
    }
    document.getElementById("theForm").reset();
    document.getElementById("x_result").innerHTML = x;
    document.getElementById("y_result").innerHTML = y;
    document.getElementById("operator").innerHTML = operator;
    document.getElementById("equals").innerHTML = '=';
    document.getElementById("result").innerHTML = result;
    document.getElementsByName("x")[0].placeholder="integer";
    document.getElementsByName("y")[0].placeholder="integer";
    return false;
  }
 
  // X invalid.
  if (validate(x) === false) {
    document.getElementById("x").style.backgroundColor="#ee4444";
    document.getElementsByName("x")[0].placeholder="integer ONLY, please!";
  }
  else {
    document.getElementById("x").style.backgroundColor="#ffffff";
  }
  
  // Y invalid.
  if (validate(y) === false) {
    document.getElementById("y").style.backgroundColor="#ee4444";
    document.getElementsByName("y")[0].placeholder="integer ONLY, please!";
  }
  else {
    document.getElementById("y").style.backgroundColor="#ffffff";
  }
  return false;
}

function validate(item) {
  // Validate as integer
  // Conditions: 1) numeric string && non-float number;
  //          or 2) -0
  if ((parseInt(item).toString() == item && 
      parseFloat(item) - parseInt(item) === 0) ||
       item === '-0') {
    return true;
  }
  else {
    return false;
  }
}
