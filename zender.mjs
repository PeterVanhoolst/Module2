import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let tvSerie = await userInput.question("Geef een tv-serie ");
let locatie 
switch(tvSerie){
    case "The Simpsons":
        locatie = "Springfield";
        console.log(tvSerie +" vindt plaats in "+ locatie)
break;
    case "Buffy":
        locatie = "Sunnydale";
        break;
        console.log(tvSerie +" vindt plaats in "+ locatie)
default:
console.log("Sorry, ik weet niet waar "+ tvSerie +" zich afspeelt.");
}
;
process.exit();