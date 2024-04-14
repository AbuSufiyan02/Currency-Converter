#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.blueBright.bold("\n\t Welcome to the Currency Converter Application\n"));
// Currencies and their exchange rates
let exchange_rate = {
    "USD": 1,
    "EUR": 0.89,
    "GBP": 0.75,
    "JPY": 108.29,
    "CAD": 1.29,
    "AUD": 1.41,
    "PKR": 280,
};
let userAns = await inquirer.prompt([
    {
        name: "from_currency",
        message: (chalk.bold.magenta("\nEnter the currency you want to convert from: ")),
        type: "list",
        choices: ["USD", "EUR", "GBP", "JPY", "CAD", "AUD", "PKR"]
    },
    {
        name: "to_currency",
        message: (chalk.bold.magenta("\nEnter the currency you want to convert into: ")),
        type: "list",
        choices: ["USD", "EUR", "GBP", "JPY", "CAD", "AUD", "PKR"]
    },
    {
        name: "amount",
        message: (chalk.bold.magenta("\nEnter the amount you want to convert:  ")),
        type: "inputs"
    }
]);
// Perform currency converion by using formula
let from_amount = exchange_rate[userAns.from_currency];
let to_amount = exchange_rate[userAns.to_currency];
let amount = userAns.amount;
//Formula of Currency Conversion
let base_amount = amount / from_amount;
let converted_amount = base_amount * to_amount;
//Display the converted currency
console.log(chalk.bold.magenta(`\nConverted amount is: ${chalk.white(converted_amount)}`));
console.log(chalk.bold.cyan("\n\tThankyou!!!"));
