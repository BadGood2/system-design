
export default class Ladder{
    head: number
    tail: number

    constructor(head: number, tail: number){
        if(head > tail) throw new Error("Invalid  Ladder")
        this.head = head
        this.tail = tail
    }
}