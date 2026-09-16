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
    const sentence = input.value.toLowerCase().trim().split(" ");
    output.value = sentence.map(
        (word) => [...word].map(
            (character) => morseMap[character] || "?")
            .join(" ")) //add space between letters
            .join(" / "); //add forward slash between words
}

document.getElementById("trans").addEventListener("click", Translate);