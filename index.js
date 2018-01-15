//function for add
function add(){
  num1 = Number(document.getElementById("angka1").value);
  num2 = Number(document.getElementById("angka2").value);
  add = num1 + num2;
  hasil = document.getElementById("result").innerHTML = add;
}

//function for substract
function substract(){
  num1 = Number(document.getElementById("angka1").value);
  num2 = Number(document.getElementById("angka2").value);
  substract = num1 - num2;
  hasil = document.getElementById("result").innerHTML = substract;
}

//function for multiply
function multiply(){
  num1 = Number(document.getElementById("angka1").value);
  num2 = Number(document.getElementById("angka2").value);
  multiply = num1*num2;
  hasil = document.getElementById("result").innerHTML = multiply;
  return hasil;
}

//function for division
function division(){
  num1 = Number(document.getElementById("angka1").value);
  num2 = Number(document.getElementById("angka2").value);
  division = num1/num2;
  hasil = document.getElementById("result").innerHTML = division;
  return hasil;
}

//getting button class
var button1 = document.getElementById("add");
var button2 = document.getElementById("substract");
var button3 = document.getElementById("multiply");
var button4 = document.getElementById("division");


//callback while clicking button
button1.addEventListener("click", add);
button2.addEventListener("click", substract);
button3.addEventListener("click", multiply);
button4.addEventListener("click", division);
