"use strict";

/***** Funktionen 01 *****/

// 1. Kapselung von Codeblöcken

//Funktionsaufruf (call)
// test();

// Funktionsrumpf (body) | callee
function test()
{
console.log("Hallo Robert");
}

/***** Funktionen 02a *****/
//2a. Parametrisierung + Datenübergabe von INNEN

// ausgabeNamen();
// console.log(firstName); // Fehler: Scope!

function ausgabeNamen() {
    let firstName = "Tom"; //what happens in Vegas,...
    console.log("Hallo " + firstName + "!");
}


/***** Funktionen 02b *****/
//2b. Parametrisierung + Datenübergabe von Außen

// ausgabeNamenParam("Anna"); //Argument
// ausgabeNamenParam("Craig");
// ausgabeNamenParam("Fatih");


function ausgabeNamenParam(firstName) { //Parameter
    console.log("Hallo " + firstName + "!");
}

/***** Funktionen 02c *****/
//2c. Mehrere Parameter

ausgabeNamenParams("Maxine", "Mütze");
ausgabeNamenParams(prompt("Vorname?"),prompt("Nachname?"));

function ausgabeNamenParams(firstName,familyName){ // Parameter
console.log("Hallo " + firstName + " " + familyName + "!");
}
