import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let getal1 = parseFloat(await userInput.question("Geef een getal in. "));
let getal2 = parseFloat(await userInput.question("Geef een tweede getal in. "));
let bewerking = await userInput.question("wilt u optellen, aftrekken, vermenigvuldigen of delen? ");

if(bewerking == "optellen"){
    console.log(getal1+getal2)
}else if(bewerking == "aftrekken"){
    console.log(getal1-getal2)
}else if(bewerking == "vermenigvuldigen"){
    console.log(getal1*getal2)
}else{
    console.log(getal1/getal2)
}
process.exit()