"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Ladder {
    constructor(head, tail) {
        if (head > tail)
            throw new Error("Invalid  Ladder");
        this.head = head;
        this.tail = tail;
    }
}
exports.default = Ladder;
