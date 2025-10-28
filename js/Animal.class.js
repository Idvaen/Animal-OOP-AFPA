"use strict";

export class Animal {
  #nom = "";
  #espece = "";
  #vol = false;
  static #idAnimal = 0;

  /**
   * Constructeur pour la class Animal
   * @param {string} nom
   * @param {string} espece
   * @param {boolean} vol
   */
  constructor(nom, espece, vol=false) {
    this.#setNom(nom);
    this.#setEspece(espece);
    this.#setVol(vol);
    Animal.#idAnimal++;
  }

  //Getters et Setters
  #setNom(nom) {
    if (/[0-9]/.test(nom))
      throw new Error(`ERR: Nom  ${nom} ne doit pas include les chiffres`);
    if (!/[a-z]/i.test(nom))
      throw new Error(`ERR: Nom  ${nom} doit include les lettres`);
    if (nom.lenght < 3)
      throw new Error(`ERR: Nom  ${nom} doit include au moins 3 lettres`);
    if (
      !/.*[\¬\!\"\£\$\%\^\&\*\(\)\_\+\`\-\=\{\}\:\@\~\<\>\?\[\]\;\'\#\,\.\/\\\|]/i.test(
        nom
      )
    )
      this.#nom = nom;
  }

  #setEspece(espece) {
    if (/[0-9]/.test(espece))
      throw new Error(`ERR: Espece ${espece} ne doit pas include les chiffres`);
    if (!/[a-z]/i.test(espece))
      throw new Error(`ERR: Espece ${espece} doit include les lettres`);
    if (espece.lenght < 2)
      throw new Error(`ERR: Espece ${espece} doit include au moins 3 lettres`);
    if (
      !/.*[\¬\!\"\£\$\%\^\&\*\(\)\_\+\`\-\=\{\}\:\@\~\<\>\?\[\]\;\'\#\,\.\/\\\|]/i.test(
        espece
      )
    )
      this.#espece = espece;
  }

  #setVol(vol) {
    this.#vol = vol;
  }

  getNom() {
    return this.#nom;
  }

  getEspece() {
    return this.#espece;
  }

  getVol() {
    if (this.#vol) return 'est vole';
    else return "n'est pas vole";
  }

  getIdAnimal() {
    return Animal.#idAnimal;
  }

  //Comportement

  affichage() {
    return `#${this.getIdAnimal()} Un(une) animal ${this.getNom()} est ${this.getEspece()} et Il(elle) ${this.getVol()}.`;
  }
}
