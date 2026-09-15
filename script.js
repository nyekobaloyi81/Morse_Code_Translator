var transBtn = document.getElementById("trans");

var text = document.createElement("textarea");
text.cols = "60";
text.rows = "5";
text.disabled = true;

function Translate() {
    var output = "";
    var input = document.getElementById("eng").value.toLowerCase();
    var sentence = input.split(" ")
    
    for (let i=0; i<sentence.length; i++) {
        for (let j=0 ; j< sentence[i].length; j++){
            output += checkLetter(sentence[i][j]);
            output += checkNumber(sentence[i][j]);

            //There are 3 spaces between letters
			output += "   ";
        }
        //There are 7 spaces between words
        output += "       ";
    }

    console.log(output);
    //outupt
    text.value = output;
    document.getElementById("form").appendChild(text);
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