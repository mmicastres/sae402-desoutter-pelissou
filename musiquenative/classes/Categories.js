export default class Categories {
    constructor(nom_categorie) {
    this._nom_categorie = nom_categorie;
    }
    get nom_categorie() { return this._nom_categorie}
    toJSON() {
    return {
    nom_categorie : this._nom_categorie,
    }
    }
   }