"use strict";

export class Animal {
  #nom = "";
  #espece = "";
  #vol = false;

  /**
   * Constructeur pour la class Animal
   * @param {string} nom
   * @param {string} espece
   * @param {boolean} vol
   */
  constructor(nom, espece, vol) {
    this.setNom(nom);
    this.setEspece(espece);
    this.setVol(vol);
  }

  //Getters et Setters
  setNom(nom) {
    this.#nom = nom;
  }

  setEspece(espece) {
    this.#espece = espece;
  }

  setVol(vol) {
    this.#vol = vol;
  }

  getNom() {
    return this.#nom;
  }

  getEspece() {
    return this.#espece;
  }

  getVol() {
    return this.#vol;
  }

  //Comportement

  affichage() {
    return `Un(une) animal ${this.getNom()} est ${this.getEspece()} et Il(elle) est ${this.getVol()}.`
  }
}
