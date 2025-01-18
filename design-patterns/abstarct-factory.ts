interface Monitor {
    createMonitor(): string
}

interface Mouse {
    createMouse(): string
}

abstract class ComputerFactory {

    abstract orderMonitor(): Monitor
    abstract orderMouse(): Mouse
}

class DellMonitor implements Monitor {
    createMonitor(): string {
        return "Dell Monitor"
    }
}

class HPMonitor implements Monitor {
    createMonitor(): string {
        return "HP Monitor"
    }
}

class DellMouse implements Mouse {
    createMouse(): string {
        return "Dell Mouse"
    }
}

class HPMouse implements Mouse {
    createMouse(): string {
        return "HP Mouse"
    }
}

class DellFactory extends ComputerFactory {
    orderMonitor(): Monitor {
        return new DellMonitor()
    }

    orderMouse(): Mouse {
        return new DellMouse()
    }
}

class HpFactory implements ComputerFactory {
    orderMonitor(): Monitor {
        return new HPMonitor()
    }

    orderMouse(): Mouse {
        return new HPMouse()
    }
}

class ComputeClient {
    private pMonitor
    private pMouse

    constructor(factory: ComputerFactory) {
        this.pMonitor = factory.orderMonitor().createMonitor()
        this.pMouse = factory.orderMouse().createMouse()
    }

    getMonitor(): string {
        return this.pMonitor
    }

    getMouse(): string {
        return this.pMouse
    }
}

const dellClient = new ComputeClient(new DellFactory())
console.log(dellClient.getMonitor())

