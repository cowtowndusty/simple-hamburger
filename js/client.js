'use strict';
// Create a constant for the nav element to become visible when EventListener is triggered.
const nav = document.querySelector('.nav');
// Create a constant for the burger element to allow for interactivity when EventListener is triggered.
const burger = document.querySelector('.burger');
// Create a constant for the overlay element to become visible when EventListener is triggered.
const overlay = document.querySelector('.overlay');
// Create an EventListener associated with the burger icon, when clicked it will activate the other events.
burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    nav.classList.toggle('active');
    overlay.classList.toggle('active');
});
