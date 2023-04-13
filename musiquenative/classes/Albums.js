export default class Albums {
    constructor(titre,date_ajout, sortie_album, pochette, nom_categorie, pseudo, valide) {
    this._titre = titre;
    this._date_ajout = date_ajout;
    this._sortie_album = sortie_album;
    this._pochette = pochette;
    this._nom_categorie = nom_categorie;
    this._pseudo = pseudo;
    this._valide = valide;
    }


    get titre() { return this._titre}
    get date_ajout() { return this._date_ajout}
    get sortie_album() { return this._sortie_album}
    get pochette() { return this._pochette}
    get nom_categorie() { return this._nom_categorie}
    get pseudo() { return this._pseudo}
    get valide() { return this._valide}
    toJSON() {
    return {
    titre : this._titre,
    date_ajout : this._date_ajout,
    sortie_album : this._sortie_album,
    pochette : this._pochette,
    nom_categorie : this._nom_categorie,
    pseudo : this._pseudo,
    valide : this._valide
    }
    }
   }