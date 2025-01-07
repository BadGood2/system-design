interface paymentProcessor{
    pay(): void
}

interface authorization{
    authorized(): boolean
}

class SmsAuthorized implements authorization{
    authorized(): boolean {
        return true
    }
}

class EmailAuthorized implements authorization{
    authorized(): boolean {
        return true
    }
}

class DebitCardPayment implements paymentProcessor{
    authorizer: authorization
    constructor(authorizer: authorization){
        this.authorizer = authorizer
    }
    pay(){
        return "DEBIT CARD PAYMENT DONE"
    }
    smsAuthorized(): boolean {
        return this.authorizer.authorized()
    }
}

class CreitCardPayment implements paymentProcessor{
    authorizer: authorization
    constructor(authorizer: authorization){
        this.authorizer = authorizer
    }
    pay(){
        return "CREDIT CARD PAYMENT DONE"
    }
    smsAuthorized(): boolean {
        return this.authorizer.authorized()
    }
}

class PhonePayPayment implements paymentProcessor{
    authorizer: authorization
    constructor(authorizer: authorization){
        this.authorizer = authorizer
    }
    pay(){
        return "PHONE PAY PAYMENT DONE"
    }
    smsAuthorized(): boolean {
        return this.authorizer.authorized()
    }
}


class Order{
    private cart: string[] = []
    addItem(item: string): void{
        this.cart.push(item)
    }

    totalPrice(): void{
        return console.log("Price is 110") 
    }
}

const order = new Order()
order.addItem("Iphone")
order.totalPrice()

const payment = new DebitCardPayment(new SmsAuthorized())

console.log(payment.smsAuthorized());

console.log(payment.pay());

