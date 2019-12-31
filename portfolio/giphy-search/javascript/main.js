/* 1. Grab the input value */

document.querySelector(".js-go").addEventListener('click', function() {
	//We are now calling a function which returns the userInput 
	var userInput = getUserInput();
	//This is passing the value into the searchGiphy function
	searchGiphy( userInput );

});

document.querySelector('.js-userinput').addEventListener('keyup', function(e) {

	if(e.which === 13) {
		var userInput = getUserInput();
		searchGiphy( userInput );
		
	}

});

//This is the function that returns the user input value
function getUserInput() {
	var inputValue = document.querySelector('.js-userinput').value;

	return inputValue;
}


/* 2. do the data stuff with the API */

//We create a new function with the userInput value and concatenate the user input (now defined as search query) at the end.

function searchGiphy(searchQuery) {
	var url = "https://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&q=" + searchQuery;

	// AJAX Request
	var GiphyAJAXCall = new XMLHttpRequest();
	GiphyAJAXCall.open( 'GET', url );
	GiphyAJAXCall.send();

	GiphyAJAXCall.addEventListener('load', function( data ) {
			//The var actualData narrows it down to the data that we are interested in
			var actualData = data.target.response;
			pushToDOM(actualData);
			//console.log(actualData);
		
	});

}


/* 3. Show me the GIFs */

//This function defines the actualData variable as response and arranges the data in a managable format using JSON 
function pushToDOM( response ) {
	response = JSON.parse( response );
	var images = response.data;

	var container = document.querySelector('.js-container');
	//Do the "" below save us from adding them in the container.innerHTML below? 
	container.innerHTML = "";

	//We are using the images variable above and finding the pictures urls we want
	images.forEach(function(image){
		var src = image.images.fixed_height.url;
		container.innerHTML += "<img src='"+ src +"' class='container-image' />";
	});
}