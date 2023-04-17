// IslamFamily.js
// Get the options container element
var optionsContainer = document.querySelector('.options-container');

// Get the options toggle button element
var optionsToggleBtn = document.querySelector('#myOptions');

// Add click event listener to the options toggle button
optionsToggleBtn.addEventListener('click', function() {
  // Toggle the display property of the options container
  optionsContainer.style.display = (optionsContainer.style.display === 'block') ? 'none' : 'block';
});

// JavaScript code for logo section
// You can add your custom JavaScript code here

// Example: Changing the logo image source on click
var logoSection = document.getElementById("logoSection");
var logoImage = logoSection.querySelector("img.background-image");
logoSection.addEventListener("click", function () {
    logoImage.src = "new-logo-image.png"; // Replace with the new image source
});

fdocument.getElementById('showOptionsBtn').addEventListener('click', function() {
	var optionsContainer = document.getElementById('optionsContainer');
	if (optionsContainer.style.display === 'none') {
	  optionsContainer.style.display = 'block';
	} else {
	  optionsContainer.style.display = 'none';
	}
  });
  
  

function showOptions() {
	var optionsDiv = document.getElementById('optionButtons');
	if (optionsDiv.style.display === 'none') {
	  optionsDiv.style.display = 'block';
	} else {
	  optionsDiv.style.display = 'none';
	}
  }

// IslamFamily.js

// Get the "Types" button and the options container
var typesButton = document.getElementById("Types");
var optionsContainer = document.getElementById("options-container");

// Add event listener for "Types" button click
typesButton.addEventListener("click", function () {
    // Toggle the visibility of the options container
    optionsContainer.idList.toggle("show");
});

// JavaScript code for About Us section
document.querySelector('.about h2').addEventListener('click', function() {
	// Add code here to perform an action when "About Us" section header is clicked
	console.log('About Us section clicked');
  });
  
  // JavaScript code for Hadiths section
  var hadithSections = document.querySelectorAll('.hadith section');
  for (var i = 0; i < hadithSections.length; i++) {
	hadithSections[i].addEventListener('click', function() {
	  // Add code here to perform an action when any Hadith section is clicked
	  console.log('Hadith section clicked');
	});
  }

  // JS (supplications.js)
// Define the supplications as variables
var duaIncreasingMemory = "سُبْحَانَكَ لَا عِلْمَ لَنَا إِلَّا مَا عَلَّمْتَنَا إِنَّكَ أَنْتَ الْعَلِيمُ الْحَكِيمُ";
var duaReducingDelusions = "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ مُنْكَرَاتِ الْأَخْلَاقِ وَالْأَعْمَالِ وَالْأَهْوَاءِ";
var duaMenstrualPain = "أَعُوذُ بِاللهِ وَقُدْرَتِهِ مِنْ شَرِّ مَا أَجِدُ وَأُحَاذِرُ.";

// Set the supplications in the respective HTML elements
document.getElementById("dua-increasing-memory").innerText = duaIncreasingMemory;
document.getElementById("dua-reducing-delusions").innerText = duaReducingDelusions;
document.getElementById("dua-menstrual-pain").innerText = duaMenstrualPain;


// JS (footer.js)
// Define the footer text as a variable
var footerText = "&copy; " + new Date().getFullYear() + " Islam Family. All rights reserved.";

// Set the footer text in the respective HTML element
document.getElementById("footer-text").innerHTML = footerText;

// JavaScript code to apply CSS styles based on viewport width
window.addEventListener('resize', applyStyles);

function applyStyles() {
  const viewportWidth = window.innerWidth;

  if (viewportWidth >= 1376 && viewportWidth <= 2560) {
    // Apply CSS styles for #background-image and #overlay-image in this media query
    document.getElementById('background-image').style.cssText = `
      width: auto;
      height: auto;
    `;
    document.getElementById('overlay-image').style.cssText = `
      width: 25rem;
      height: 25rem;
      top: 18rem;
      left: 20.288rem;
      border-radius: 15.25rem;
      padding: 0.715rem;
    `;
  } else if (viewportWidth >= 768 && viewportWidth <= 1024) {
    // Apply CSS styles for #background-image, #overlay-image, and #main in this media query
    document.getElementById('background-image').style.cssText = `
      width: 65rem;
    `;
    document.getElementById('overlay-image').style.cssText = `
      width: 9rem;
      height: 9rem;
      top: 8.5rem;
      left: 6.5rem;
      padding: 0.313rem;
    `;
    document.getElementById('main').style.cssText = `
      width: 2rem;
      height: auto;
    `;
  } else {
    // Reset CSS styles for all elements if viewport width does not match any media queries
    document.getElementById('background-image').style = '';
    document.getElementById('overlay-image').style = '';
    document.getElementById('main').style = '';
  }
}

// Call the function initially when the page loads
applyStyles();
