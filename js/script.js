"use strict";

import { Animal } from "./Animal.class.js";

let btn_ajouter = document.getElementById("btn-ajouter");
btn_ajouter.addEventListener("click", ajouterAnimal);

let btn_remove = document.getElementById("btn-suprimer");
btn_remove.addEventListener("click", supprimerAnimal);

let messageError = document.getElementById("message-error");
let bonneMessage = document.getElementById("bonne-message");
let nom = document.getElementById("nom");
let espece = document.getElementById("espece");
let vol = document.getElementById("vol");
let id_animal = document.getElementById("id");
const local = localStorage;

for (let i = 0; i < local.length; i++) {
  console.log(local.getItem(local.key(i)));
  bonneMessage.innerHTML += `<div class="bg-success">${local.getItem(
    local.key(i)
  )}</div>`;
}

function ajouterAnimal() {
  try {
    let animal = new Animal(nom.value, espece.value, vol.checked);
    console.log(animal);

    //Local storage pour sauvgarder les donnes
    local.setItem(
      animal.getIdAnimal(),
      `#${animal.getIdAnimal()} ${animal.getEspece()} "${animal.getNom()}" - ${animal.getVol()}.`
    );
    // console.log(
    //   animal.getIdAnimal(),
    //   animal.getNom(),
    //   animal.getEspece(),
    //   animal.getVol()
    // );

    bonneMessage.innerHTML += `<div class="bg-success">${animal.affichage(
      animal
    )}</div>`;
    console.log(bonneMessage.textContent.split(".").sort());
    // window.location.reload();
  } catch (error) {
    messageError.innerHTML = `<div class="bg-danger">${error.message}</div>`;
  }
}

function supprimerAnimal() {
  try {
    let volString = vol.checked ? "est vole" : "n'est pas vole";
    let count = local.length;
    for (let i = 0; i < local.length; i++) {
      count--;
      if (
        nom.value &&
        espece.value &&
        local.getItem(local.key(i)).includes(nom.value) &&
        local.getItem(local.key(i)).includes(espece.value) &&
        local.getItem(local.key(i)).includes(volString)
      ) {
        console.log(local.getItem(local.key(i)) + " Est suprimer");
        local.removeItem(local.key(i));
        count = local.length;
        window.location.reload();
      }
      if (id_animal.value == i + 1) {
        console.log(local.getItem(local.key(i)) + " Est suprimer");
        local.removeItem(local.key(i));
        count = local.length;
        window.location.reload();
      }
      if (count == 0) throw new Error("ERR: Cette animal n'est pas existe!");
    }
  } catch (error) {
    console.error(error.message);
  }

  //   local.key();
}
// local.clear();
