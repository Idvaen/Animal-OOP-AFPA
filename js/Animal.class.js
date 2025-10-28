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
    if (/[0-9]/.test(nom))
      throw new Error(`ERR: ${nom} ne doit pas include les chiffres`);
    if (!/[a-z]/i.test(nom))
      throw new Error(`ERR: ${nom} doit include les lettres`);
    if (nom.lenght < 3)
      throw new Error(`ERR: ${nom} doit include au moins 3 lettres`);
    if (
      !/.*[\¬\!\"\£\$\%\^\&\*\(\)\_\+\`\-\=\{\}\:\@\~\<\>\?\[\]\;\'\#\,\.\/\\\|]/i.test(
        nom
      )
    )
      this.#nom = nom;
  }

  setEspece(espece) {
    if (/[0-9]/.test(espece))
      throw new Error(`ERR: ${espece} ne doit pas include les chiffres`);
    if (!/[a-z]/i.test(espece))
      throw new Error(`ERR: ${espece} doit include les lettres`);
    if (espece.lenght < 2)
      throw new Error(`ERR: ${espece} doit include au moins 3 lettres`);
    if (
      !/.*[\¬\!\"\£\$\%\^\&\*\(\)\_\+\`\-\=\{\}\:\@\~\<\>\?\[\]\;\'\#\,\.\/\\\|]/i.test(
        espece
      )
    )
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
    if (this.getVol())
      return `Un(une) animal ${this.getNom()} est ${this.getEspece()} et Il(elle) est vole.`;
    return `Un(une) animal ${this.getNom()} est ${this.getEspece()} et Il(elle) n'est pas vole.`;
  }
}
