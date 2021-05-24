const parser = require("./arithmetics");

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

function initQuestion() {
  readline.question("input arithmetic statement: \n", (statement) => {
    if (statement === "quit") {
      console.log("quit the program.");
      readline.close();
      return;
    }
    const result = parser.parse(statement);
    console.log(result);
    initQuestion();
  });
}

initQuestion();
