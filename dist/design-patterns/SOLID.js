"use strict";
class SmsAuthorized {
    authorized() {
        return true;
    }
}
class EmailAuthorized {
    authorized() {
        return true;
    }
}
class DebitCardPayment {
    constructor(authorizer) {
        this.authorizer = authorizer;
    }
    pay() {
        return "DEBIT CARD PAYMENT DONE";
    }
    smsAuthorized() {
        return this.authorizer.authorized();
    }
}
class CreitCardPayment {
    constructor(authorizer) {
        this.authorizer = authorizer;
    }
    pay() {
        return "CREDIT CARD PAYMENT DONE";
    }
    smsAuthorized() {
        return this.authorizer.authorized();
    }
}
class PhonePayPayment {
    constructor(authorizer) {
        this.authorizer = authorizer;
    }
    pay() {
        return "PHONE PAY PAYMENT DONE";
    }
    smsAuthorized() {
        return this.authorizer.authorized();
    }
}
class Order {
    constructor() {
        this.cart = [];
    }
    addItem(item) {
        this.cart.push(item);
    }
    totalPrice() {
        return console.log("Price is 110");
    }
}
const order = new Order();
order.addItem("Iphone");
order.totalPrice();
const payment = new DebitCardPayment(new SmsAuthorized());
console.log(payment.smsAuthorized());
console.log(payment.pay());
