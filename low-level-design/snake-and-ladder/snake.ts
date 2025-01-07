
export default class Snake{
    head: number
    tail: number

    constructor(head: number, tail: number){
        if(head < tail) throw new Error("Invalid  Snake")
        this.head = head
        this.tail = tail
    }
}