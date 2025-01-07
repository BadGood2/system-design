"use strict";
class FlyingDucks {
    fly() {
        return "This duck can really fly";
    }
}
class NoFlyDucks {
    fly() {
        return "This is a no fly duck";
    }
}
class QuackingDucks {
    quack() {
        return "Quack Quack..";
    }
}
class SqueakingWoodDuck {
    quack() {
        return "A wood duck Squeak, Squeak...";
    }
}
class RealDuck {
    constructor(flyProperty, quackProperty) {
        this.fly = flyProperty;
        this.quack = quackProperty;
    }
    swim() {
        return "Swimming..";
    }
    display() {
        return "I am a real Duck";
    }
    flying() {
        return this.fly.fly();
    }
    quacking() {
        return this.quack.quack();
    }
}
const duck = new RealDuck(new FlyingDucks(), new QuackingDucks());
console.log(duck.flying());
// interface Payment{
//     pay(): string
// }
// class PayPalImplementation implements Payment{
//     pay(){
//         return 'Processing paypal 100'
//     }
// }
// class CreditCardImplementation implements Payment{
//     pay(){
//         return 'Processing creditcard 100'
//     }
// }
// class PhonePeImplementation implements Payment{
//     pay(){
//         return 'Processing phonepe 100'
//     }
// }
// class Pay {
//     strategy
//     constructor(strategy: Payment){
//         this.strategy = strategy
//     }
//     setStrategy(strategy : Payment){
//         this.strategy = strategy
//     }
//     processpayment(){
//         return this.strategy.pay()
//     }
// }
// const paymen = new Pay(new PhonePeImplementation())
// console.log(paymen.processpayment())
// paymen.setStrategy(new CreditCardImplementation)
// console.log(paymen.processpayment())
// // WITHOUT USING THE SAID PATTERN
// // Context: Handles payment processing
// // class PaymentProcessor {
// //     processPayment(method, amount) {
// //         if (method === "CreditCard") {
// //             console.log(`Processing ${amount} payment via Credit Card.`);
// //         } else if (method === "PayPal") {
// //             console.log(`Processing ${amount} payment via PayPal.`);
// //         } else if (method === "Crypto") {
// //             console.log(`Processing ${amount} payment via Cryptocurrency.`);
// //         } else {
// //             console.log("Invalid payment method.");
// //         }
// //     }
// // }
// // // Client Code
// // const processor = new PaymentProcessor();
// // processor.processPayment("PayPal", 100);
// // processor.processPayment("Crypto", 250);
