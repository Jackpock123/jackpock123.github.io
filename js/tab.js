// 3) F&C full page tabs from W3 Schools
// Used addEventListener to the buttons instead of using onClick='openPage()' in HTML

// Event listeners to tell openPage function what tab to open
selectTabs = function() {
	document.querySelector('.tablink-1-js').addEventListener('click', function () {
	// alert('Hello');
	openPage('tab-content-1', this, '#555');
	});

	document.querySelector('.tablink-2-js').addEventListener('click', function () {
	// alert('Hello');
	openPage('tab-content-2', this, '#555');
	});

	document.querySelector('.tablink-3-js').addEventListener('click', function () {
	// alert('Hello');
	openPage('tab-content-3', this, '#555');
	});

	// document.querySelector('.tablink-4-js').addEventListener('click', function () {
	// // alert('Hello');
	// openPage('tab-content-4', this, 'lightgrey');
	// });
}

selectTabs();


openPage = function(pageName, elmnt, color) {
  // Hide all elements with class="tabcontent" by default
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Remove the background color of all buttons
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
  }

  // Show the specific tab content
  document.getElementById(pageName).style.display = "block";

  // Add the specific color to the button used to open the tab content
  elmnt.style.backgroundColor = color;
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("default-open").click();



