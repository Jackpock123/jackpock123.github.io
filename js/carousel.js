// 2) Image Carousel
// F&C: 

var slideIndex = 1

//Next/previous controls
plusSlides = function(n) {
	showSlides(slideIndex += n);
	// console.log(n);
	// console.log(slideIndex);
} 

// Thumnail image control
currentSlide = function(n) {
	showSlides(slideIndex = n);
	// console.log(n);
	// console.log(slideIndex);
}

showSlides = function(n) {
	// alert('Hello');
	var i;
	var slides = document.getElementsByClassName("js-mySlides");
	//console.log(slides);
	var dots = document.getElementsByClassName("js-dot");
	//console.log(dots);
	//console.log(slides.length);

	if (n > slides.length) {slideIndex = 1}
	if (n < 1) {slideIndex = slides.length}

	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}

	for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
	}
	slides[slideIndex-1].style.display = "block";
  	dots[slideIndex-1].className += " active";
  	//console.log(slideIndex);

  	setTimeout(function() {
		plusSlides(1);
	}, 10000);

}

showSlides(slideIndex);


// Pause the setTimeout when the prev or next buttons are clicked

// stopSetTimeout = function() {
// 	document.querySelector('.prev').addEventListener('click', function() {
// 		function stopSetTimeout() {
// 			clearTimeout(showSlides);
// 		}
// 	})
// }

// stopSetTimeout()
