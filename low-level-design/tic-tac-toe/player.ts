export default class Player{
    name: string
    symbol: string

    constructor(name: string, symbol: string){
        this.name = name
        this.symbol = symbol
    }

    getName(){
        return this.name
    }

    getSymbol(){
        return this.symbol
    }
}