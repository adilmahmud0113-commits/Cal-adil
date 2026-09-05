<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Scientific Calculator</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>

  <div class="calculator">
    <div class="top">
      <h1>Scientific Calculator</h1>
      <button onclick="toggleTheme()">☀️</button>
    </div>

    <div class="display">
      <div id="history"></div>
      <input type="text" id="display" value="0" readonly>
    </div>

    <div class="mode-row">
      <button id="angleBtn" onclick="toggleAngle()">DEG</button>
      <button id="secondBtn" onclick="toggleSecond()">2nd</button>
      <button onclick="clearHistory()">Clear History</button>
    </div>

    <div class="memory">
      <button onclick="memoryClear()">MC</button>
      <button onclick="memoryRecall()">MR</button>
      <button onclick="memoryAdd()">M+</button>
      <button onclick="memorySubtract()">M−</button>
      <button onclick="useAnswer()">Ans</button>
    </div>

    <div class="buttons">
      <button class="function" onclick="insert('sin(')">sin</button>
      <button class="function" onclick="insert('cos(')">cos</button>
      <button class="function" onclick="insert('tan(')">tan</button>
      <button class="function" onclick="insert('log(')">log</button>
      <button class="function" onclick="insert('ln(')">ln</button>

      <button class="function" onclick="insert('asin(')">sin⁻¹</button>
      <button class="function" onclick="insert('acos(')">cos⁻¹</button>
      <button class="function" onclick="insert('atan(')">tan⁻¹</button>
      <button class="function" onclick="insert('sqrt(')">√</button>
      <button class="function" onclick="insert('^')">xʸ</button>

      <button class="function" onclick="insert('π')">π</button>
      <button class="function" onclick="insert('e')">e</button>
      <button class="function" onclick="insert('(')">(</button>
      <button class="function" onclick="insert(')')">)</button>
      <button class="function" onclick="factorial()">x!</button>

      <button class="clear" onclick="clearDisplay()">AC</button>
      <button class="delete" onclick="deleteLast()">⌫</button>
      <button class="operator" onclick="insert('%')">%</button>
      <button class="operator" onclick="insert('/')">÷</button>

      <button onclick="insert('7')">7</button>
      <button onclick="insert('8')">8</button>
      <button onclick="insert('9')">9</button>
      <button class="operator" onclick="insert('*')">×</button>

      <button onclick="insert('4')">4</button>
      <button onclick="insert('5')">5</button>
      <button onclick="insert('6')">6</button>
      <button class="operator" onclick="insert('-')">−</button>

      <button onclick="insert('1')">1</button>
      <button onclick="insert('2')">2</button>
      <button onclick="insert('3')">3</button>
      <button class="operator" onclick="insert('+')">+</button>

      <button onclick="insert('0')" class="zero">0</button>
      <button onclick="insert('.')">.</button>
      <button class="equals" onclick="calculate()">=</button>
    </div>

    <div class="history-box">
      <h2>History</h2>
      <div id="historyList"></div>
    </div>
  </div>

  <script src="script.js"></script>
</body>
</html>
