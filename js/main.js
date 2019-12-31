
//1) MOBILE NAV HEADER

var UI = {}; 

UI.mobileMenu = function() {

	
	document.querySelector('.icon').addEventListener('click', function () {
		//alert("Hello");

		var getMobileMenu = document.querySelector('.main-nav-js');
		console.log(getMobileMenu);

		if (getMobileMenu.className.includes('responsive') === false) {
			// alert('false works');
	    	getMobileMenu.classList.add('responsive');
	  	} else {
	    	getMobileMenu.classList.remove('responsive');
	  	}

	});

}

UI.mobileMenu();
