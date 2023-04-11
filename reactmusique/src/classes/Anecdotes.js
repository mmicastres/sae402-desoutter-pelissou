export default class Anecdotes {
    constructor(contenu,id_titre, pseudo, valide) {
    this._contenu = contenu;
    this._id_titre = id_titre;
    this._pseudo = pseudo;
    this._valide = valide;
    }


    get contenu() { return this._contenu}
    get id_titre() { return this._id_titre}
    get pseudo() { return this._pseudo}
    get valide() { return this._valide}
    toJSON() {
    return {
    contenu : this._contenu,
    id_titre : this._id_titre,
    pseudo : this._pseudo,
    valide : this._valide
    }
    }
   }