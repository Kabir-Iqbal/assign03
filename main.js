//3. Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, 
//and titlecase.
//Lowercase
//To UpperCase 
let Pname = "Kabir iqbal";
console.log(Pname.toUpperCase());
//To lowerCase
console.log(Pname.toLowerCase());
//To TitleCase
let firstname = Pname.split(" ");
let toTitleCase = "";
for (let i = 0; i < firstname.length; i++) {
    toTitleCase += firstname[i].charAt(0).toUpperCase() + firstname[i].slice(1).toLowerCase() + " ";
}
console.log(toTitleCase);
export {};
