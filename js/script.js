"use strict";

import { Animal } from "./Animal.class.js";

let btn = document.getElementById("btn");
btn.addEventListener("click", ajouterAnimal);

let messageError = document.getElementById("message-error");
let bonneMessage = document.getElementById("bonne-message");
let nom = document.getElementById("nom");
let espece = document.getElementById("espece");
let vol = document.getElementById("vol");

// let test1 = new Animal("Kakadu", "Oiseux", true);

// console.log(animal);

function ajouterAnimal() {
  try {
    let animal = new Animal(nom.value, espece.value, vol.checked);

    bonneMessage.innerHTML += `<div class="bg-success">${animal.affichage(animal)}</div>`;
  } catch (error) {
    messageError.innerHTML = `<div class="bg-danger">${error.message}</div>`;
  }
}
