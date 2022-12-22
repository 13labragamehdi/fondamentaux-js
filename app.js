//Definitions de variables
let nom = "John"
console.log(nom)
nom = "Jane"
console.log(nom)

//Boucles
for(let i=1; i<=10;i++)
{
    console.log(i)
}

//console.log()
console.log("Bonjour tout le monde!")
console.log(3 + 4)
console.log(nom)

// concatenation de chaines de caracteres
let firstName = "John"
let lastName = "Doe"
let fullName = `${firstName} ${lastName}`
console.log(fullName)

// conditions
let age = 23
if(age>18) {
    console.log("Vous etes majeur")
}
else {
    console.log("Vous etes mineur")
}

// creation et parcours d'un tableau 
let couleurs = ["rouge","vert","bleu","jaune","orange"]
for(let i=0;i<couleurs.length;i++)
{
    console.log(couleurs[i])
}

// utilisation de array.push() et array.pop()
let numbers = [1,2,3,4,5]
numbers.push(6)
console.log(numbers)
numbers.pop([5])
console.log(numbers)

// fonctions
function function1(number) {
    let result;
    if (number % 2 === 0) {
      result = 'true';
    } else {
      result = 'false';
    }
    return result;
}
console.log(function1(11))

function add(numbers) {
    let result = 0;
    numbers.forEach((number) => {
        result+=number;
});
    return result
}
console.log(add([5,14,23]))

function reverse(string) {
    return Array.from(string).reverse().join("");
}
console.log(reverse("bonjour"))