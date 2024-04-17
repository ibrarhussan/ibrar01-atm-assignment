#! /usr/bin/env node
import inquirer from "inquirer";

let myBalance = 20000;
let myPin = 7845;

let pinAnswer = await inquirer.prompt(
    [
        {
            name :"q1",
            message : "enter your pin",
            type: "number",
        }
    ]
);

if (pinAnswer.q1 === myPin) {
    console.log("correct pin code !!!");
    let operationAnswer = await inquirer.prompt([
        {
            name: "operation",
            message : "please select option what you want to first",
            type : "list",
            choices:["withdraw","check Balance"]
        }
    ]);
    if (operationAnswer.operation ==="withdraw"){
        let amountAns= await inquirer.prompt([
            {
                name: "amount",
                message :"Enter the amount you want to withdraw",
                type: "number",
            }
        ]);
        if (amountAns.amount > myBalance) {
            console.log("Insufficient Balane.");

        } else {
            myBalance-= amountAns.amount;
            console.log("withdraw successful.");
            console.log("Your remaining balance is :"+ myBalance);
        }
    } else if (operationAnswer.operation ==="check Balance"){
             console.log("Your remaining Balance is :" + myBalance);
    } else {
        console.log("Incorrect pin number");
    }
}






// import inquirer from "inquirer";

// let myBalance = 20000;
// let myPin = 7890;

// let pinAnswer = await inquirer.prompt([
//     {
//         name: "q1",
//         message: "enter your pin",
//         type: "number",
//     }
// ]);

// if (pinAnswer.q1 === myPin) {
//     console.log("correct pin code!!!");

//     let operationAnswer = await inquirer.prompt([
//         {
//             name: "operation",
//             message: "please select option what you want first",
//             type: "list",
//             choices: ["withdrawal", "check balance"]
//         }
//     ]);

//     if (operationAnswer.operation === "withdrawal") {
//         let amountAns = await inquirer.prompt([
//             {
//                 name: "amount",
//                 message: "Enter the amount you want to withdraw",
//                 type: "number"
//             }
//         ]);

//         if (amountAns.amount > myBalance) {
//             console.log("Insufficient balance.");
//         } else {
//             myBalance -= amountAns.amount;
//             console.log("Withdrawal successful.");
//             console.log("Your remaining balance is: " + myBalance);
//         }
//     } else if (operationAnswer.operation === "check balance") {
//         console.log("Your current balance is: " + myBalance);
//     }
// } else {
//     console.log("Incorrect pin number");
// }
