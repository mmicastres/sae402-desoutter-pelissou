export default class Utilisateurs {
    constructor(pseudo,mail, mdp, date_inscription,pp) {
    this._pseudo = pseudo;
    this._mail = mail;
    this._mdp = mdp;
    this._date_inscription = date_inscription;
    this._pp = pp;
    }


    get pseudo() { return this._pseudo}
    get mail() { return this._mail}
    get mdp() { return this._mdp}
    get date_inscription() {return this._date_inscription}
    get pp() { return this.pp}
    toJSON() {
    return {
    pseudo : this._pseudo,
    mail : this._mail,
    mdp : this._mdp,
    date_inscription : this._date_inscription,
    pp : this._pp
    }
    }
   }