export class Character {
    constructor(attack) {
        this._attack = attack;
        this._distance = 1;
        this._stoned = false;

    }

    get attack() {
        let newAttack = this._attack * (1 - (this._distance - 1) * 0.1);
        if (this._stoned) {
            newAttack -= Math.log2(this._distance) * 5;
        }
        return newAttack > 0 ? Math.round(newAttack) : 0;
    }

    set attack(value) {
        this._attack = value;
    }

    get stoned() {
        return this._stoned;
    }

    set stoned(value) {
        this._stoned = value;
    }
}
