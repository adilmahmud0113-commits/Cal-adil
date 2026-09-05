const display = document.getElementById("display");
const history = document.getElementById("history");
const angleBtn = document.getElementById("angleBtn");

let expression = "";
let angleMode = "DEG";

function updateDisplay() {
  display.value = expression || "0";
}

function insert(value) {
  expression += value;
  updateDisplay();
}

function clearDisplay() {
  expression = "";
  history.textContent = "";
  updateDisplay();
}

function deleteLast() {
  expression = expression.slice(0, -1);
  updateDisplay();
}

function toggleAngle() {
  angleMode = angleMode === "DEG" ? "RAD" : "DEG";
  angleBtn.textContent = angleMode;
}

function toggleTheme() {
  document.body.classList.toggle("light");
}

function factorial() {
  expression += "!";
  updateDisplay();
}

function calculate() {
  if (!expression) return;

  try {
    const original = expression;
    const result = evaluate(expression);

    history.textContent = original + " =";
    expression = String(result);
    updateDisplay();
  } catch (error) {
    display.value = "Error";
  }
}

function evaluate(expr) {
  expr = expr
    .replace(/π/g, "Math.PI")
    .replace(/\be\b/g, "Math.E")
    .replace(/\^/g, "**")
    .replace(/sqrt\(/g, "Math.sqrt(")
    .replace(/log\(/g, "Math.log10(")
    .replace(/ln\(/g, "Math.log(");

  expr = expr.replace(/(\d+)!/g, "factorial($1)");

  expr = expr.replace(/sin\(([^()]*)\)/g, (_, x) =>
    `Math.sin(toRad(${x}))`
  );

  expr = expr.replace(/cos\(([^()]*)\)/g, (_, x) =>
    `Math.cos(toRad(${x}))`
  );

  expr = expr.replace(/tan\(([^()]*)\)/g, (_, x) =>
    `Math.tan(toRad(${x}))`
  );

  expr = expr.replace(/asin\(([^()]*)\)/g, (_, x) =>
    `fromRad(Math.asin(${x}))`
  );

  expr = expr.replace(/acos\(([^()]*)\)/g, (_, x) =>
    `fromRad(Math.acos(${x}))`
  );

  expr = expr.replace(/atan\(([^()]*)\)/g, (_, x) =>
    `fromRad(Math.atan(${x}))`
  );

  if (!/^[0-9+\-*/%().\sA-Za-z_]*$/.test(expr)) {
    throw new Error("Invalid expression");
  }

  const result = Function(
    "factorial",
    "toRad",
    "fromRad",
    `"use strict"; return (${expr})`
  )(factorialNumber, toRad, fromRad);

  if (!Number.isFinite(result)) {
    throw new Error("Invalid result");
  }

  return Number(result.toFixed(10));
}

function factorialNumber(n) {
  if (n < 0 || !Number.isInteger(n)) {
    throw new Error("Invalid factorial");
  }

  let result = 1;

  for (let i = 2; i <= n; i++) {
    result *= i;
  }

  return result;
}

function toRad(value) {
  return angleMode === "DEG"
    ? value * Math.PI / 180
    : value;
}

function fromRad(value) {
  return angleMode === "DEG"
    ? value * 180 / Math.PI
    : value;
}

document.addEventListener("keydown", (event) => {
  const key = event.key;

  if (/[0-9+\-*/().%]/.test(key)) {
    insert(key);
  } else if (key === "Enter") {
    calculate();
  } else if (key === "Backspace") {
    deleteLast();
  } else if (key === "Escape") {
    clearDisplay();
  }
});
