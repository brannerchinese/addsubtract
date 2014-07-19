function doArithmetic(operator) {
  var values = document.getElementById("values");
  var x = document.getElementById('x').value;
  var y = document.getElementById('y').value;

  // No empty values.
  if (x === "" || y === "") {
    return false;
  }

  // Both values valid.
  else if (validate(x) === true && validate(y) === true) {
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
  else if (validate(x) === false) {
    document.getElementById("x").style.backgroundColor="#ee4444";
    document.getElementById("x").value="";
    document.getElementsByName("x")[0].placeholder="integer ONLY, please!";
  }
  
  // Y invalid.
  if (validate(y) === false) {
    document.getElementById("y").style.backgroundColor="#ee4444";
    document.getElementById("y").value="";
    document.getElementsByName("y")[0].placeholder="integer ONLY, please!";
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
