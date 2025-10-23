// Variables et portée : Exercice 1

var x = 5
let y = 10
const z = 15

x = 20
y = 25
//z = 30 // This line would cause an error because 'z' is a constant

console.log(x + y + z)


// Variables et portée : Exercice 2

function testScope() {
    if (true) {
        var a = "var visible partout";
        let b = "let visible ici seulement";
    }
    console.log(a);
    //console.log(b); // Pourquoi erreur ? vient du fait que b est déclarée avec let à l'intérieur du bloc if, donc elle est accessible uniquement à l'intérieur de ce bloc (portée de bloc)
}
testScope();


// Fonctions classiques et fléchées : Exercice 3

function sayHello(name) {
    return `Bonjour ${name}`;
}
const sayHelloArrow = (name) => `Bonjour ${name}`;

console.log(sayHello("Alice"));
console.log(sayHelloArrow("Android"));

// Fonction traditionnelle (function) : Elle a sa propre liaison dynamique au contexte this, possède un objet arguments local, et peut être utilisée comme constructeur avec new.
//Fonction fléchée (=>) : Elle hérite du contexte this lexical dans lequel elle est définie (pas de propre this), ne possède pas d’objet arguments, et ne peut pas être utilisée comme constructeur.


// Fonctions classiques et fléchées : Exercice 4

const person = {
    name: "Sara",
    sayHello: function () {
        console.log("Bonjour " + this.name);
    },
    sayHelloArrow: () => {
        console.log("Bonjour " + this.name);
    },
};
person.sayHello();
//person.sayHelloArrow(); // Pourquoi "undefined" ? Parce que les fonctions fléchées n'ont pas leur propre contexte this, elles héritent de celui dans lequel elles sont définies. Ici, this fait référence à l'objet global (window en navigateur), où name n'est pas défini.



// Import / Export de modules (ES6) : Étape 2

import message, { PI, carre } from "./mathUtils.js";
message(); // 􊷥􊷹􊷧􊷨 Module mathUtils chargé !
console.log("PI =", PI);
console.log("Carré de 5 =", carre(5));



// Tableaux et méthodes modernes : Exercice 5

const fruits = ["pomme", "banane", "orange"];
fruits.push("kiwi");
fruits.pop();
console.log(fruits);


// Tableaux et méthodes modernes : Exercice 6

const nums = [1, 2, 3, 4, 5];
// Multiplie chaque nombre par 2
console.log(nums.map(n => n * 2));
// Garde seulement les nombres pairs
console.log(nums.filter(n => n % 2 === 0));
// Calcule la somme totale
console.log(nums.reduce((sum, n) => sum + n, 0));



// Tableaux et méthodes modernes : Exercice 7

console.log(nums.find(n => n > 3));
console.log(nums.some(n => n < 0));
console.log(nums.every(n => n > 0));


// Objets et déstructuration : Exercice 8


const user = { id: 1, name: "Ali", city: "Rabat" };
// Déstructuration
const { name, city } = user;
console.log(`${name} habite à ${city}`);
// Renommage
const { name: fullName, ...rest } = user;
console.log(fullName);
console.log(rest);


// Asynchronisme et Promesses : Exercice 9 

const p = new Promise((resolve) => {
    setTimeout(() => resolve("Opération terminée !"), 2000);
});
p.then(result => console.log(result));


// Asynchronisme et Promesses : Exercice 10 
async function getUsers() {
    try {
        const res = await
        fetch("https://jsonplaceholder.typicode.com/users");
        const data = await res.json();
        console.log(data);
    } catch (e) {
        console.error("Erreur :", e.message);
    }
}
getUsers();



// Fonctions avancées et opérateurs modernes : Exercice 11 
const nombre = "Nadia";
const hour = new Date().getHours();
console.log(`Bonjour ${nombre}, il est ${hour}h`);

// Fonctions avancées et opérateurs modernes : Exercice 12 


const arr1 = [1, 2];
const arr2 = [...arr1, 3, 4];
console.log(arr2);
function sum(...numbers) {
    return numbers.reduce((a, b) => a + b, 0);
}
console.log(sum(1, 2, 3, 4));

// Fonctions avancées et opérateurs modernes : Exercice 13 


const settings = { theme: null };
console.log(settings.theme ?? "light"); // light
const user2 = { profile: { email: "x@y.com" } };
console.log(user2.profile?.email); // x@y.com
console.log(user2.address?.city); // undefined




// Gestion des produits

const produits = [
    { nom: "Lait", prix: 10, expireLe: "2025-12-01" },
    { nom: "Yaourt", prix: 5, expireLe: "2024-01-01" },
    { nom: "Jus", prix: 8, expireLe: "2026-02-15" },
];
const aujourdHui = new Date();
const valides = produits.filter(p => new Date(p.expireLe) >
aujourdHui);
const total = valides.reduce((s, p) => s + p.prix, 0);
console.log("Produits valides :", valides);
console.log("Total :", total, "DH");