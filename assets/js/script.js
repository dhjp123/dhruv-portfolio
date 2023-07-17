'use strict';



/**
 * navbar toggle
 */

const header = document.querySelector("[data-header]");
const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");

navToggleBtn.addEventListener("click", function () {
  header.classList.toggle("nav-active");
  this.classList.toggle("active");
});

/**
 * toggle the navbar when click any navbar link
 */

const navbarLinks = document.querySelectorAll("[data-nav-link]");

for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", function () {
    header.classList.toggle("nav-active");
    navToggleBtn.classList.toggle("active");
  });
}
const greetingElement = document.getElementById("greeting");
const nameElement = document.getElementById("name");
const descriptionElement = document.getElementById("description");

const greeting = greetingElement.innerText;
const name = nameElement.innerText;
const description = descriptionElement.innerText;

greetingElement.innerText = "";
nameElement.innerText = "";
descriptionElement.innerText = "";

let greetingIndex = 0;
let nameIndex = 0;
let descriptionIndex = 0;

function displayGreeting() {
  if (greetingIndex < greeting.length) {
    greetingElement.innerText += greeting[greetingIndex];
    greetingIndex++;
    setTimeout(displayGreeting, 100); // Adjust the delay (in milliseconds) between characters if needed
  } else {
    setTimeout(displayName, 500); // Delay before displaying the name
  }
}

function displayName() {
  if (nameIndex < name.length) {
    nameElement.innerText += name[nameIndex];
    nameIndex++;
    setTimeout(displayName, 100); // Adjust the delay (in milliseconds) between characters if needed
  } else {
    setTimeout(displayDescription, 500); // Delay before displaying the description
  }
}

function displayDescription() {
  if (descriptionIndex < description.length) {
    descriptionElement.innerText += description[descriptionIndex];
    descriptionIndex++;
    setTimeout(displayDescription, 100); // Adjust the delay (in milliseconds) between characters if needed
  } 
}

displayGreeting();






/**
 * back to top & header
 */

const backTopBtn = document.querySelector("[data-back-to-top]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});