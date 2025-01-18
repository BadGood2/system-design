abstract class Handler {
    private nexthandler: Handler | null

    constructor(next: Handler  | null){
        this.nexthandler = next
    }

    abstract handle(): void

    public handleNext(){
        if(this.nexthandler){
            this.nexthandler.handle()
        }
    }

    public setHandler(next: Handler){
        this.nexthandler = next
    }
}

class Concretehandler1 extends Handler{
    handle(): void {
        console.log('Concretehandler1')
        this.handleNext()
    }
}

class Concretehandler2 extends Handler{
    handle(): void {
        console.log('Concretehandler2')
        this.handleNext()
    }
}

// const client = new Concretehandler1(null)
// client.setHandler(new Concretehandler2(null))
// client.handle()

// const client = new Concretehandler1(new Concretehandler2(null))
// client.handle()

