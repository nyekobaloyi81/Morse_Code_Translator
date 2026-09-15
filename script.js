const morseMap = {
    a: ".-", b: "-...", c: "-.-.", d: "-..", e: ".", f: "..-.", g: "--.", h: "....",
    i: "..", j: ".---", k: "-.-", l: ".-..", m: "--", n: "-.", o: "---", p: ".--.",
    q: "--.-", r: ".-.", s: "...", t: "-", u: "..-", v: "...-", w: ".--", x: "-..-",
    y: "-.--", z: "--..", 0: "-----", 1: ".----", 2: "..---", 3: "...--", 4: "....-",
    5: ".....", 6: "-....", 7: "--...", 8: "---..", 9: "----.", ".": ".-.-.-", ",": "--..--",
    "?": "..--..", "!": "-.-.--", "'": ".----.", "(": "-.--.", ")": "-.--.-", "&": ".-...",
    ":": "---...", ";": "-.-.-.", "/": "-..-.", "=": "-...-", "+": ".-.-.", "-": "-....-",
    '"': ".-..-.", "@": ".--.-."
};

var input = document.getElementById("eng").value;
var output = "";
// input is no longer displaying?


function Translate() {
    console.log(input);

    for (let i=0; i<input.length; i++) {
        for (let j=0 ; j< input[i].length; j++){
            output += checkLetter(input[i][j]);
            output += checkNumber(input[i][j]);

            //There are 3 spaces between letters
			output += "   ";
        }
        //There are 7 spaces between words
        output += "       ";
    }
    

    //outupt
    console.log(output);
    document.getElementById("morse-output").value = output;
}

function checkLetter(letter){
    if (letter == "a"){
        return ". -";
    }
    else if (letter == "b"){
        return "- . . .";
    }
    else if (letter == "c"){
        return "- . - .";
    }
    else if (letter == "d"){
        return "- . .";
    }
    else if (letter == "e"){
        return ".";
    }
    else if (letter == "f"){
        return ". . - .";
    }
    else if (letter == "g"){
        return "- - .";
    }
    else if (letter == "h"){
        return ". . . .";
    }
    else if (letter == "i"){
        return ". .";
    }
    else if (letter == "j"){
        return ". - - -";
    }
    else if (letter == "k"){
        return "- . -";
    }
    else if (letter == "l"){
        return ". - . .";
    }
    else if (letter == "m"){
        return "- -";
    }
    else if (letter == "n"){
        return "- .";
    }
    else if (letter == "o"){
        return "- - -";
    }
    else if (letter == "p"){
        return ". - - .";
    }
    else if (letter == "q"){
        return "- - . -";
    }
    else if (letter == "r"){
        return ". - .";
    }
    else if (letter == "s"){
        return ". . .";
    }
    else if (letter == "t"){
        return "-";
    }
    else if (letter == "u"){
        return ". . -";
    }
    
    else if (letter == "v"){
        return ". . . -";
    }
    else if (letter == "w"){
        return ". - -";
    }
    else if (letter == "x"){
        return "- . . -";
    }
    else if (letter == "y"){
        return "- . - -";
    }
    else if (letter == "z"){
        return "- - . .";
    }
    else{
        return "";
    }
}

function checkNumber(letter){
    if (letter == "1"){
        return ". - - - -";
    }
    else if (letter == "2"){
        return ". . - - -";
    }
    else if (letter == "3"){
        return ". . . - -";
    }
    else if (letter == "4"){
        return ". . . -";
    }
    else if (letter == "5"){
        return ". . . . .";
    }
    else if (letter == "6"){
        return "- . . . .";
    }
    else if (letter == "7"){
        return "- - . . .";
    }
    else if (letter == "8"){
        return "- - - . .";
    }
    else if (letter == "9"){
        return "- - - - .";
    }
    else if (letter == "0"){
        return "- - - - -";
    }
    else{
        return "";
    }
}

document.getElementById("trans").addEventListener("click", Translate);