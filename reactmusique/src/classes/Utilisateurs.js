export default class Utilisateurs {
    constructor(pseudo,mail, mdp) {
    this._pseudo = pseudo;
    this._mail = mail;
    this._mdp = mdp;
    }


    get pseudo() { return this._pseudo}
    get mail() { return this._mail}
    get mdp() { return this._mdp}
    toJSON() {
    return {
    pseudo : this._pseudo,
    mail : this._mail,
    mdp : this._mdp
    }
    }
   }