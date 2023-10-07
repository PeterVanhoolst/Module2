import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let num1 = parseFloat(await userInput.question("Geef een getal in. "));
let num2 = parseFloat(await userInput.question("Geef nog een getal in. "));
console.log(num1);
console.log(num2);
if (num1 % 2 == 0 && num2 % 2 == 0){
    console.log("Beide getallen zijn positief.");
    if((num1 == 0 )||(num2 == 0));{
        console.log("Eén van de getallen is nul.")
    }
}else if(num1 % 2 == 0 && num2 % 2 !== 0){
        console.log("Het eerste getal is positief en het tweede getal is negatief");
        if((num1 == 0 )||(num2 == 0));{
            console.log("Eén van de getallen is nul.")
        }
}else if(num1 % 2 !== 0 && num2 % 2 == 0){
        console.log("Het eerste getal is negatief en het tweede getal is positief");
        if((num1 == 0 )||(num2 == 0));{
            console.log("Eén van de getallen is nul.")
        }
}else{ 
    console.log("Beide getallen zijn negatief.");
}
    process.exit();