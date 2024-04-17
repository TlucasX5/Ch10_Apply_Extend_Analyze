/*
    Student Name: Suzanne Lucas
    File Name: script.js
    Date: 4/16/2024
*/

var figElement = document.getElementById("placeholder");
var imgsource = document.getElementById("image");
var figcap = document.querySelector("figcaption");

//Function to display the first picture
function pic1() {
    imgsource.src = "images/trunk-bay.jpg";
    imgsource.alt = "Elevated view of Trunk Bay beach on St. John";
    figElement.style.display = "block";
    figcap.textContent = "Trunk Bay in St. John";
}

//Function to display the second picture
function pic2() {
    imgsource.src = "images/sanjuan.jpg";
    imgsource.alt = "Elevated view of San Juan coast";
    figElement.style.display = "block";
    figcap.textContent = "Coast of San Juan";
}

//Function to diplay third picture
function pic3() {
    imgsource.src = "images/curacao.jpg";
    imgsource.alt = "The blue waters of Curacao";
    figElement.style.display = "block";
    figcap.textContent = "Curacao"
}