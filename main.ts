//3. Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, 
//and titlecase.
//Lowercase

import { log } from "console";

 //To UpperCase 
let Pname : string = "Kabir iqbal"
console.log(Pname.toUpperCase());

//To lowerCase
console.log(Pname.toLowerCase());

//To TitleCase
let firstname : string[] = Pname.split(" ")
let toTitleCase : string = ""
for (let i = 0 ; i < firstname.length ; i++){
    toTitleCase += firstname[i].charAt(0).toUpperCase() + firstname[i].slice(1).toLowerCase() + " "
}
console.log(toTitleCase);
