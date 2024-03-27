#! /usr/bin/env node

import inquirer from "inquirer";

let myPin = 2468;
let myBalance = 10000; // dollar

let atmMachine = await inquirer.prompt([
  { name: "pin", type: "number", message: "Enter Your Pin Code!"},
]);

if (atmMachine.pin === myPin) {
  console.log("Your Pin Code is Correct..");

  let choice = await inquirer.prompt([
    {
      name: "operator",
      type: "list",
      message: "What do you want Now?",
      choices: ["Cash Withdrawal", "Check Balance", "Fast Cash"],
    },
  ]);

  if (choice.operator === "Cash Withdrawal") {
    let enterAmount = await inquirer.prompt([
      {
        name: "amount",
        type: "number",
        message: "How Many Amount You Want to Withdrawal? Please Enter",
      },
    ]);
    if (enterAmount.amount > 10000) {
      console.log(
        "Sorry Your Current balance is 10000, You Can Not Withdrawal this Amount"
      );
    } else {
      myBalance -= enterAmount.amount;
      console.log(`Your Remaining Balance is: ${myBalance}`);
    }
  } else if (choice.operator === "Check Balance") {
    console.log(`Your Account Balance is: ${myBalance}`);
  } else if (choice.operator === "Fast Cash") {
    let fastAmount = await inquirer.prompt([
      {
        name: "fast",
        type: "list",
        message: "Select Any One Option To Withdrawal",
        choices: ["2000", "4000", "6000", "8000"],
      },
    ]);
    if (fastAmount.fast === "2000") {
      myBalance -= fastAmount.fast;
      console.log(`Your Remaining Balance is: ${myBalance}`);
    } else if (fastAmount.fast === "4000") {
      myBalance -= fastAmount.fast;
      console.log(`Your Remaining Balance is: ${myBalance}`);
    } else if (fastAmount.fast === "6000") {
      myBalance -= fastAmount.fast;
      console.log(`Your Remaining Balance is: ${myBalance}`);
    } else if (fastAmount.fast === "8000") {
      myBalance -= fastAmount.fast;
      console.log(`Your Remaining Balance is: ${myBalance}`);
    }
  }
} else {
  console.log("Pin Code is Not Correct, Please Enter a Right Pin");
} 












