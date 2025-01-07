"use strict";
class TwoWheeler {
    printVehicle() {
        console.log("I am a TwoWheeler");
    }
}
class FourWheeler {
    printVehicle() {
        console.log("I am a Four Wheeler");
    }
}
class TwoVehicleFactory {
    createVehicle() {
        return new TwoWheeler();
    }
}
class FourVehicleFactory {
    createVehicle() {
        return new FourWheeler();
    }
}
class Client {
    constructor(vehicle) {
        this.pVehicle = vehicle.createVehicle();
    }
    getVehicle() {
        return this.pVehicle;
    }
}
(function main() {
    const client = new Client(new TwoVehicleFactory);
    client.getVehicle().printVehicle();
})();
