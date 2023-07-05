let num1 = 0;
let num2 = 0;

function add() {
    let num1 = Number(document.getElementById("num1-el").value);
    let num2 = Number(document.getElementById("num2-el").value);
    let add = num1 + num2;
    document.getElementById("sum-el").textContent = "Answer: " + add;
  }

  function subtract() {
    let num1 = Number(document.getElementById("num1-el").value);
    let num2 = Number(document.getElementById("num2-el").value);
    let substract= num1 - num2;
    document.getElementById("sum-el").textContent = "Answer: " + substract;
  }

  function divide() {
    let num1 = Number(document.getElementById("num1-el").value);
    let num2 = Number(document.getElementById("num2-el").value);
    let divide = num1 / num2;
    document.getElementById("sum-el").textContent = "Answer: " + divide;
  }

  function multiply() {
    let num1 = Number(document.getElementById("num1-el").value);
    let num2 = Number(document.getElementById("num2-el").value);
    let multiply = num1 * num2;
    document.getElementById("sum-el").textContent = "Answer: " + multiply;
  }

