/* 
STEP 1 - Define variables for dark mode functionality.
STEP 2 - Write a function that opens a new window when clicked. 
STEP 3 - Write function for dark and light mode. 
STEP 4 - Define variables for the typewriter function. 
STEP5 - Write function for the typewriter function. 
*/

//STEP 1 - Define variables and select DOM elements for dark mode functionality.
const toggleSwitch = document.querySelector(
  '.theme-switch input[type="checkbox"]'
);
const currentTheme = localStorage.getItem("theme");
// END OF STEP 1

// STEP 4 - Define variables and select DOM elements for the typewriter function.
const typedTextSpan = document.querySelector(".typed-text");
const cursor = document.querySelector(".cursor");

//text array
const textArray = ["a writer", "a youtuber", "a designer"];

//text delay variables
const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 2000;

//character index and element index variables
let textArrayIndex = 0;
let charIndex = 0;

// END OF STEP 4

// STEP 2 - Write a function that opens a new window when clicked.
function openWindow(URL) {
  return window.open(`${URL}`, "_blank");
}
// END OF STEP 2

// STEP 3 - Write function for dark and light mode.
if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme);

  if (currentTheme === "dark") {
    toggleSwitch.checked = true;
  }
}
//function that switches between themes.
function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
  }
}
toggleSwitch.addEventListener("change", switchTheme, false);
// END OF STEP 3

// STEP 5 - Write function for the typewrter function.
/*
- The type function type each character (charIndex) with a pause of 200ms delay (typeDelay).
- After 2 seconds (nextTextDelay). The text will be erased at 100ms (eraseDelay).
*/
function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if (!cursor.classList.contains("typing"))
      cursor.classList.add("typing");
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } else {
    cursor.classList.remove("typing");
    setTimeout(erase, newTextDelay);
  }
}

function erase() {
  if (charIndex > 0) {
    if (!cursor.classList.contains("typing")) cursor.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(
      0,
      charIndex - 1
    );
    charIndex--;
    setTimeout(erase, erasingDelay);
  } else {
     cursor.classList.remove("typing");
    //add the text
    textArrayIndex++;
    if (textArrayIndex >= textArray.length) textArrayIndex = 0;
    setTimeout(type, typingDelay + 1100);
  }
}

//DOMContentloaded
document.addEventListener("DOMContentLoaded", function () {
  setTimeout(type, newTextDelay + 250);
});

// END OF STEP 5
