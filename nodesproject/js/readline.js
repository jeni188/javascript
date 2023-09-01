// take multimle input to calculate simple intrest

const readline = require("readline");
const rl = readline.createInterface({
    input:process. stdin,
    output:process.stdout,
});
rl.question("Enter the principal amount: ", function (principal) {
    rl.question("Enter the rate of interest: ", function (rate) {
    rl.question("Enter the time period (in years): ", function (time) {
    const simpleInterest = (principal * rate * time) /100;
    console.log(`Simple interest: ${simpleInterest}`);
    rl.close();
    });
    });
    });
