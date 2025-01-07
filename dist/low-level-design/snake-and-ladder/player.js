"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Player {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.currentPosition = 0;
    }
    getPosition() {
        return this.currentPosition;
    }
    setPosition(position) {
        this.currentPosition = position;
    }
}
exports.default = Player;
