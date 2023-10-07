import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let maand = await userInput.question("Geef een maand in. ");

switch (maand){
case "januari":
case "maart":
case "mei":
case "juli":
case "augustus":
case "oktober":
case "december":   
    console.log("Hier zijn er 31 dagen.")
break
case "februari":
console.log("Hier zijn 28 of 29 dagen.")
break
case "april":
case "juni":
case "september":
case "november":
console.log("Hier zijn er 30 dagen.")
}

process.exit();