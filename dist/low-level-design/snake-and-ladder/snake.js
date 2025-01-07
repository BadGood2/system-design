"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Snake {
    constructor(head, tail) {
        if (head < tail)
            throw new Error("Invalid  Snake");
        this.head = head;
        this.tail = tail;
    }
}
exports.default = Snake;
