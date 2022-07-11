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

ausgabeNamen();


function ausgabeNamen() {
    let firstName = "Tom"; //what happens in Vegas,...
    console.log("Hallo " + firstName + "!");
}

// console.log(firstName); // Fehler: Scope!



