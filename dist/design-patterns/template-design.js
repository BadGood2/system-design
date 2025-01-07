"use strict";
class PDF {
    constructor(type) {
        this.type = type;
    }
    open() {
        console.log(`Open ${this.type}`);
    }
    close() {
        console.log('Closing');
    }
    view() {
        console.log('Viewing');
    }
    process() {
        this.open();
        this.view();
        this.close();
    }
}
class DocumentTyping extends PDF {
    constructor(type) {
        super(type);
    }
}
const msWord = new DocumentTyping('ADOBE');
msWord.process();
const adobe = new DocumentTyping('Adobe');
adobe.process();
// WITHOUT USING THE DESIGN PATTERN
// class WordDocument {
//     process() {
//         console.log("Opening Word Document...");
//         console.log("Reading Word Content...");
//         console.log("Closing Word Document...");
//     }
// }
// class PDFDocument {
//     process() {
//         console.log("Opening PDF Document...");
//         console.log("Reading PDF Content...");
//         console.log("Closing PDF Document...");
//     }
// }
// // Client Code
// const wordDoc = new WordDocument();
// wordDoc.process();
// const pdfDoc = new PDFDocument();
// pdfDoc.process();
