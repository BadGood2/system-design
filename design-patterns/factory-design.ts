interface Vehicle {
    printVehicle(): void
}

interface VehicleFactory {
    createVehicle(): Vehicle
}

class TwoWheeler implements Vehicle {
    printVehicle(): void {
        console.log("I am a TwoWheeler");
        
    }
}

class FourWheeler implements Vehicle {
    printVehicle(): void {
        console.log("I am a Four Wheeler");
    }
}

class TwoVehicleFactory implements VehicleFactory {

    createVehicle(): Vehicle {
        return new TwoWheeler()
    }
}

class FourVehicleFactory implements VehicleFactory {

    createVehicle(): Vehicle {
        return new FourWheeler()
    }
}

class Client {
    private pVehicle
    constructor(vehicle: VehicleFactory) {
        this.pVehicle = vehicle.createVehicle()
    }

    getVehicle(): Vehicle {
        return this.pVehicle
    }
}

(function main (){
    const client = new Client(new TwoVehicleFactory)

    client.getVehicle().printVehicle()
})()



