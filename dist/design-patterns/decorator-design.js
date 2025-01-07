"use strict";
// Base Beverage class
class Beverage {
    constructor() {
        this.description = "Unknown Beverage";
    }
    // Returns the description of the beverage
    getDescription() {
        return this.description;
    }
}
// Concrete Beverage: DarkCoffee
class DarkCoffee extends Beverage {
    constructor() {
        super();
        this.description = "Dark Coffee";
    }
    cost() {
        return 5;
    }
}
// Concrete Beverage: CoffeeLatte
class CoffeeLatte extends Beverage {
    constructor() {
        super();
        this.description = "Coffee Latte";
    }
    cost() {
        return 10;
    }
}
// Abstract Decorator Class
class CondimentDecorator extends Beverage {
    constructor(beverage) {
        super();
        this.beverage = beverage;
    }
}
// Concrete Decorator: Mocha
class Mocha extends CondimentDecorator {
    constructor(beverage) {
        super(beverage);
    }
    getDescription() {
        return `${this.beverage.getDescription()}, Mocha`;
    }
    cost() {
        return this.beverage.cost() + 1;
    }
}
// Concrete Decorator: Whip
class Whip extends CondimentDecorator {
    constructor(beverage) {
        super(beverage);
    }
    getDescription() {
        return `${this.beverage.getDescription()}, Whip`;
    }
    cost() {
        return this.beverage.cost() + 0.5;
    }
}
// Example Usage
const myBeverage = new Mocha(new Whip(new Whip(new DarkCoffee())));
console.log(`Description: ${myBeverage.getDescription()}`);
console.log(`Cost: $${myBeverage.cost().toFixed(2)}`);
