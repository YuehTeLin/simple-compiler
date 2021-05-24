const parser = require("./arithmetics");

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

function initQuestion() {
  readline.question("input some arithmetic expression: \n", (expression) => {
    if (expression === "quit") {
      console.log("quit the program.");
      readline.close();
      return;
    }
    const result = parser.parse(expression);
    console.log(result);
    initQuestion();
  });
}

initQuestion();
