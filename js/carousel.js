// STEP 1: Define functions that control slide index number

var slideIndex = 1

//Next/previous controls
plusSlides = function(n) {
	//clearTimeout(showSlides);
	showSlides(slideIndex += n);
	// console.log(n);
	// console.log(slideIndex);
} 

// Thumnail image control
currentSlide = function(n) {
	//clearTimeout(showSlides);
	showSlides(slideIndex = n);
	// console.log(n);
	// console.log(slideIndex);
}


// STEP 2: Define function which displays slide depending on slide index

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

}

showSlides(slideIndex);


// STEP 3: Set interval to automatically change image

// QUESTION: Is it ok to set this variable in the global scope?
var carouselInterval = setInterval(function() {plusSlides(1);	}, 5000);


	//NOTE: When the setInterval() is put in a function clearInterval() does not work. Issue with scope.
	// timeout = function (carouselInterval) {
	// 	var carouselInterval = setInterval(function() {plusSlides(1);	}, 5000);
	// } 
	// timeout(); 


//STEP 4: Define functions that stop and start interval timer depending if the click count is odd or even

var clickCount = 0;
clickHandlerPause = function() {
	document.querySelector('.js-pause').addEventListener('click', function() {
		var play = document.querySelector('.js-play');
		var pause = document.querySelector('.js-pause');
		//alert('We are in clickHandler');
		clickCount++;
		if( clickCount%2 == 1) {
			//alert('I am odd');
			clearInterval(carouselInterval);

			pause.style.display = 'none';
			play.style.display = 'block';
		} 
		console.log(clickCount);
	})
} 
clickHandlerPause();


clickHandlerPlay = function() {
	document.querySelector('.js-play').addEventListener('click', function() {
		var play = document.querySelector('.js-play');
		var pause = document.querySelector('.js-pause');
		//alert('We are in clickHandler');
		clickCount++;
		if( clickCount%2 == 0) {
			//alert('I am even');
			carouselInterval = setInterval(function() {plusSlides(1);	}, 5000);

			play.style.display = 'none';
			pause.style.display = 'block';
		} 
		console.log(clickCount);
	})
} 
clickHandlerPlay();


















	// var clickCount = 0;
	// clickHandler = function() {
	// 	document.querySelector('.js-pause', '.js-play').addEventListener('click', function() {
	// 		var play = document.querySelector('.js-play');
	// 		var pause = document.querySelector('.js-pause');
	// 		//alert('We are in clickHandler');
	// 		clickCount++;
	// 		if( clickCount%2 == 1) {
	// 			alert('I am odd');
	// 			clearInterval(carouselInterval);

	// 			pause.style.display = 'none';
	// 			play.style.display = 'block';
	// 		} else {
	// 			alert('I am even')
	// 			carouselInterval = setInterval(function() {plusSlides(1);	}, 10000);

	// 		}
	// 		console.log(clickCount);
	// 	})
	// } 
	// clickHandler();




























// Pause the setTimeout when the prev or next buttons are clicked

// stopSetTimeout = function() {
// 	document.querySelector('.prev').addEventListener('click', function() {
// 		function stopSetTimeout() {
// 			clearTimeout(showSlides);
// 		}
// 	})
// }

// stopSetTimeout()
