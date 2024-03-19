#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
const answer = await inquirer.prompt([
    { message: "Enter 1st Number", type: "number", name: "firstnumber" },
    { message: "Enter 2nd Number", type: "number", name: "secondnumber" },
    {
        message: "Choose One Operation",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"]
    },
]);
if (answer.operator == "Addition") {
    console.log(chalk.blue(`\n\t Addition Of Both Numbers Are ${answer.firstnumber + answer.secondnumber}`));
}
else if (answer.operator == "Subtraction") {
    console.log(chalk.green(`\n\t Addition Of Both Numbers Are ${answer.firstnumber - answer.secondnumber}`));
}
else if (answer.operator == "Multiplication") {
    console.log(chalk.yellow(`\n\t Addition Of Both Numbers Are ${answer.firstnumber * answer.secondnumber}`));
}
else if (answer.operator == "Division") {
    console.log(chalk.white(`\n\t Addition Of Both Numbers Are ${answer.firstnumber / answer.secondnumber}`));
}
else {
    console.log("Select Valid");
}
