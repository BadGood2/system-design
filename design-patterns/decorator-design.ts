
// Base Beverage class
abstract class Beverage {
    protected description: string = "Unknown Beverage";

    // Returns the description of the beverage
    getDescription(): string {
        return this.description;
    }

    // Returns the cost of the beverage (to be implemented by subclasses)
    abstract cost(): number;
}

// Concrete Beverage: DarkCoffee
class DarkCoffee extends Beverage {
    constructor() {
        super();
        this.description = "Dark Coffee";
    }

    cost(): number {
        return 5;
    }
}

// Concrete Beverage: CoffeeLatte
class CoffeeLatte extends Beverage {
    constructor() {
        super();
        this.description = "Coffee Latte";
    }

    cost(): number {
        return 10;
    }
}

// Abstract Decorator Class
abstract class CondimentDecorator extends Beverage {
    // Ensure all decorators wrap around an existing Beverage
    protected beverage: Beverage;

    constructor(beverage: Beverage) {
        super();
        this.beverage = beverage;
    }

    // Force decorators to implement their own description logic
    abstract getDescription(): string;
}

// Concrete Decorator: Mocha
class Mocha extends CondimentDecorator {
    constructor(beverage: Beverage) {
        super(beverage);
    }

    getDescription(): string {
        return `${this.beverage.getDescription()}, Mocha`;
    }

    cost(): number {
        return this.beverage.cost() + 1;
    }
}

// Concrete Decorator: Whip
class Whip extends CondimentDecorator {
    constructor(beverage: Beverage) {
        super(beverage);
    }

    getDescription(): string {
        return `${this.beverage.getDescription()}, Whip`;
    }

    cost(): number {
        return this.beverage.cost() + 0.5;
    }
}

// Example Usage
const myBeverage = new Mocha(new Whip(new Whip(new DarkCoffee())));
console.log(`Description: ${myBeverage.getDescription()}`);
console.log(`Cost: $${myBeverage.cost().toFixed(2)}`);


