export default class Titres {
    constructor(titre, pochette, paroles,id_album, pseudo, valide) {
    this._titre = titre;
    this._pochette = pochette;
    this._paroles = paroles;
    this._id_album = id_album;
    this._pseudo = pseudo;
    this._valide = valide;
    }


    get titre() { return this._titre}
    get pochette() { return this._pochette}
    get id_album() { return this._id_album}
    get paroles() { return this._paroles}
    get pseudo() { return this._pseudo}
    get valide() { return this._valide}
    toJSON() {
    return {
    titre : this._titre,
    pochette : this._pochette,
    id_album : this._id_album,
    paroles : this._paroles,
    pseudo : this._pseudo,
    valide : this._valide
    }
    }
   }