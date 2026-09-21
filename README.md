````md
# Morse Code Translator

A lightweight front-end web application that converts plain English text into Morse code and displays the translated result in a clean, modern interface. The project is built using HTML, CSS, & JavaScript and requires no backend or package installation.

## Overview

This application allows users to type a message, translate it into Morse code, and copy the result to the clipboard. It is designed for quick, simple usage and includes a polished UI with a responsive layout and animated background.

The project demonstrates:
- DOM manipulation in JavaScript
- string-to-symbol mapping logic
- user interaction and validation
- clipboard integration
- a modern front-end experience using static assets

## Features

- English-to-Morse translation
- Supports letters, numbers, and common punctuation
- Clear input with a dedicated reset button
- Character counter with a 500-character maximum
- Copy-to-clipboard action for the translated output
- Responsive, single-page interface
- Animated Vanta.js background
- No build tools or server required

## Tech Stack

- HTML5
- CSS3
- JavaScript (Vanilla JS)
- Vanta.js for visual background effects
- Google Fonts for typography

## Project Structure

```text
Morse_Code_Translator/
├── index.html
├── style.css
├── script.js
├── README.md
└── assets/ (if added later)
```

## How It Works

The app uses a predefined Morse code lookup table that maps each supported character to its Morse equivalent. When the user clicks the Translate button, the input text is processed character by character:

- Each character is converted to lowercase (and trimmed)
- Each character is matched to its Morse code symbol
- Letters are separated by spaces
- Words are separated by `/`
- The output is displayed in a read-only text area

Example:

Input:
`HELLO WORLD`

Output:
`.... . .-.. .-.. --- / .-- --- .-. .-.. -..`

## Setup and Usage

### Prerequisites
- A modern web browser
- No dependencies required

### Run the Project
1. Open `index.html` directly in your browser, or
2. Serve the project locally with a static server if preferred


## File Responsibilities

### `index.html`
Contains the application layout, controls, and references to the stylesheet and script files.

### `style.css`
Defines the visual design, layout, typography, panel styling, and responsive behavior.

### `script.js`
Contains:
- the Morse code dictionary
- translation logic
- event listeners for buttons and text input
- character count tracking
- output status updates
- copy functionality


## Notes

- The app currently functions as a client-side translator only.
- Input is limited to 500 characters in the UI.
- Unsupported characters are handled gracefully based on the implemented logic.
- The interface is intentionally simple and focused on usability.

## Potential Enhancements

Future improvements could include:
- Morse-to-English translation
- Better handling of unsupported characters
- Unit tests for translation logic


## Author

Nyeko Baloyi
Built as a small web development project for learning and practical use in front-end JavaScript and UI design.
