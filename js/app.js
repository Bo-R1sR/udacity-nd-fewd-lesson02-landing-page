"use strict";

// variable for the navbar
const listElementNav = document.querySelector("#navbar__list");
// variable for all available sections
const allSections = document.querySelectorAll("section");

// build the nav
// Build menu
// Scroll to section on link click
// Scroll to anchor ID using scrollTO event

// looping through all sections
for (let i = 0; i < allSections.length; ++i) {
    // create new list element
    let newElement = document.createElement('li');
    // set text of list element
    newElement.textContent = allSections[i].dataset.nav;
    // add click event to list element to scroll to section
    newElement.addEventListener("click", function () {
        document.getElementById(allSections[i].id).scrollIntoView({behavior: "smooth"});
    });
    // add list element to list
    listElementNav.append(newElement);
}

// Set sections as active
// Add class 'active' to section when near top of viewport

// add scroll event listener to whole document
document.addEventListener("scroll", function (event) {
    setActiveSection();
    event.preventDefault();
});

// define how to decide if section is active according to relative position to viewport
function setActiveSection() {
    // looping through all sections
    for (let i = 0; i < allSections.length; ++i) {
        let section = allSections[i];
        // get bounding rectangle of section
        const element = section.getBoundingClientRect();
        // specify distance to viewport if active state changes
        if (element.top <= 250 && element.bottom > 250) {
            section.classList.add('your-active-class');
        } else {
            section.classList.remove('your-active-class');
        }
    }
}


