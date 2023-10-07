import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let artiest1 = "Tenacious D"
let artiest2 = "Meatloaf"
let artiest3 = "Bon Jovi"
let artiest4 = "Stef Bos"

console.log("Geef 1 voor " +artiest1+ "."
,"Geef 2 voor " +artiest2+ ". "
,"Geef 3 voor " +artiest3+ ". "
,"Geef 4 voor " +artiest4+ ".");

let artiest = parseFloat(await userInput.question("Geef het getal van je artiest. "));

if(artiest == 1){
    console.log ("Je koos voor " + artiest1+ "."
   ,"Ze zijn de artist achter de hit: Tribute." )
}else if(artiest == 2){
    console.log ("Je koos voor " + artiest2+ "."
   ,"Ze zijn de artist achter de hit: I Would do anything for love." )
}else if(artiest == 3){
    console.log ("Je koos voor " + artiest3+ "."
   ,"Ze zijn de artist achter de hit: Living on a prayer." )
}else if(artiest == 4){
    console.log ("Je koos voor " + artiest4+ "."
,"Ze zijn de artist achter de hit: Papa." )
}


switch (artiest){
case 1: console.log("Je koos voor " + artiest1+ "."
,"Ze zijn de artist achter de hit: Tribute." );
break;
case 2:console.log ("Je koos voor " + artiest2+ "."
,"Ze zijn de artist achter de hit: I Would do anything for love." );
break;
case 3:console.log ("Je koos voor " + artiest3+ "."
,"Ze zijn de artist achter de hit: Living on a prayer." );
break;
case 4:console.log ("Je koos voor " + artiest4+ "."
,"Ze zijn de artist achter de hit: Papa." )
}
process.exit();



