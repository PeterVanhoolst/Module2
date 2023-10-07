import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let juist = "Goed antwoord!"
console.log("Welkom bij de quiz! Beantwoord volgende 5 vragen:");
let antwoord1 = await userInput.question("Vraag 1: Welk getal is de laatste uitgave van de Final Fantasy reeks? ");
console.log("Jouw antwoord: " +antwoord1);
if (antwoord1 == 16){
    console.log(juist)
}else{
    console.log("Verkeerd antwoord. Het juiste antwoord is 16.")
}

let antwoord2 = await userInput.question("Vraag 2: Hoe heet volgens de Noorse mythologie de oppergod ? ");
console.log("Jouw antwoord: " +antwoord2);
if (antwoord2 == "Odin"){
    console.log(juist)
}else{
    console.log("Verkeerd antwoord. Het juiste antwoord is Odin.")
}

let antwoord3 = await userInput.question("Vraag 3: Hoe heet de componist van de soundtrack uit The Gladiator ? ");
console.log("Jouw antwoord: " +antwoord3);
if (antwoord3 == "Hans Zimmer"){
    console.log(juist)
}else{
    console.log("Verkeerd antwoord. Het juiste antwoord is Hans Zimmer.")
}
let antwoord4 = await userInput.question("Vraag 4: Wat is de naam van de onderzeeër van het bedrijf Oceangate ? ");
console.log("Jouw antwoord: " +antwoord4);
if (antwoord4 == "Titan"){
    console.log(juist)
}else{
    console.log("Verkeerd antwoord. Het juiste antwoord is Titan.")
}

let antwoord5 = await userInput.question("Vraag 5: Welke techniek ken je, waarin honden beginnen te kwijlen bij het horen van een bel en aan de grondslag liggen voor de klassieke conditionering ? ");
console.log("Jouw antwoord: " +antwoord5);
if (antwoord5 == "Pavlov"){
    console.log(juist)
}else{
    console.log("Verkeerd antwoord. Het juiste antwoord is Pavlov.")
}

process.exit();
