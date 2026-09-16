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

//these are the elements not the values of the elements
const input = document.getElementById("eng");
const output = document.getElementById("morse-output");

function Translate() {
    var sentence = input.value.toLowerCase().trim().split(" ");
    for (let i=0; i<sentence.length; i++) {
        for (let j=0 ; j< sentence[i].length; j++){
            output.value += checkLetter(sentence[i][j]);
            output.value += checkNumber(sentence[i][j]);
        }
        //forwards slashes between words
        if(i+1 < sentence.length){ //make sure you don't add a slash at the end of the sentence
            console.log(i);
            output.value += " / ";
        }
        
    }
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