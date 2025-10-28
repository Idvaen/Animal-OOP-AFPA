'use strict'

import { Animal } from "./Animal.class.js";

let btn = document.getElementById('btn');
btn.addEventListener('click', ajouterAnimal);

let messageError = document.getElementById("message-error");
let bonneMessage = document.getElementById("bonne-message");


let test1 = new Animal("Kakadu", 'Oiseux', true);

console.log(test1);

function ajouterAnimal(){
    
}