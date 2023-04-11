export default class Albums {
    constructor(commentaire,date_ajout_com, note, pseudo, valide) {
    this._commentaire = commentaire;
    this._note = note;
    this._date_ajout_com = date_ajout_com;
    this._pseudo = pseudo;
    this._valide = valide;
    }


    get commentaire() { return this._commentaire}
    get note() { return this._note}
    get date_ajout_com() { return this._date_ajout_com}
    get pseudo() { return this._pseudo}
    get valide() { return this._valide}
    toJSON() {
    return {
    commentaire : this._commentaire,
    note : this._note,
    date_ajout_com : this._date_ajout_com,
    pseudo : this._pseudo,
    valide : this._valide
    }
    }
   }