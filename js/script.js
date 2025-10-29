"use strict";

import { Animal } from "./Animal.class.js";

//Button pour ajouter animaux
let btn_ajouter = document.getElementById("btn-ajouter");
btn_ajouter.addEventListener("click", ajouterAnimal);

//Buttons pour suprimer les animaux sur le list
let btn_remove = document.getElementById("btn-suprimer");
btn_remove.addEventListener("click", supprimerAnimal);

//Pour affichier les errors
let messageError = document.getElementById("message-error");
//Pour afficher le list de local storage
let bonneMessage = document.getElementById("bonne-message");

//Initialisation
let nom = document.getElementById("nom");
let espece = document.getElementById("espece");
let vol = document.getElementById("vol");
let id_animal = document.getElementById("id");
const local = localStorage;

// Un boucle pour afficher les localStorage items
for (let i = 0; i < local.length; i++) {
  // console.log(local.getItem(local.key(i)));
  bonneMessage.innerHTML += `<div class="bg-success">${local.getItem(
    local.key(i)
  )}</div>`;
}

/**
 * Function principal pour ajouter les animaux dans le list
 */
function ajouterAnimal() {
  try {
    let animal = new Animal(nom.value, espece.value, vol.checked);
    console.log(animal);

    //Local storage pour sauvgarder les donnes
    if (Object.keys(localStorage).length > 1) {
      animal.setIdAnimal(Object.keys(localStorage).map(a => parseInt(a)).sort(compareNumbers)[Object.keys(localStorage).length - 1]+1);
    }

    //Ajouter l'animal dans le list en localStorage
    local.setItem(
      animal.getIdAnimal(),
      `#${animal.getIdAnimal()} ${animal.getEspece()} "${animal.getNom()}" - ${animal.getVol()}.`
    );

    //Premier affichage de ajoutation succsee
    bonneMessage.innerHTML += `<div class="bg-success">${animal.affichage(
      animal
    )}</div>`;
    console.log(bonneMessage.textContent.split(".").sort(compareNumbers));
    // window.location.reload();
  } catch (error) {
    messageError.innerHTML = `<div class="bg-danger">${error.message}</div>`;
  }
}

/**
 * Function pour suprimer les animaux sur le list dans local storage
 */
function supprimerAnimal() {
  try {
    //Change le type boolean a string pour localStorage
    let volString = vol.checked ? "est vole" : "n'est pas vole";
    //Cree un couter pour verifier si l'animal existe dans le list 
    let count = local.length;
    
    //Un boucle pour verification
    for (let i = 0; i < local.length; i++) {
      count--;
      if (
        nom.value &&
        espece.value &&
        local.getItem(local.key(i)).includes(nom.value) &&
        local.getItem(local.key(i)).includes(espece.value) &&
        local.getItem(local.key(i)).includes(volString)
      ) {
        console.log(local.getItem(local.key(i)) + " Est suprime");
        local.removeItem(local.key(i));
        count = local.length;
        window.location.reload();
      }
      if (id_animal.value == local.getItem(local.key(i))[1]) {
        console.log(local.getItem(local.key(i)) + " Est suprime");
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


/**
 * Function specialment cree pour function sort() pour faire un ordre dan le tableaux
 * @param {number} a 
 * @param {number} b 
 * @returns {number} a - b
 */
function compareNumbers(a, b) {
  return a - b;
}