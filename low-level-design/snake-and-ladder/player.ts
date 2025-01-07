
export default class Player {
    id: number
    name: string
    currentPosition: number

    constructor(id: number, name: string){
        this.id = id
        this.name = name
        this.currentPosition = 0
    }

    getPosition(){
        return this.currentPosition
    }

    setPosition(position: number){
        this.currentPosition = position
    }
}