// Remember to look at the week 6 day 2 things in the class repo for examples on the buttons.



// This is the main game object
var cartoonTrivia = {

	// This is the question pool that will be used to populate the question box in the main page.
	questions: {
		question: [
			"answer1",
			"answer2",
			"answer3",
			"answer4"
		],
		question: [
			"answer1",
			"answer2",
			"answer3",
			"answer4"
		],
		question: [
			"answer1",
			"answer2",
			"answer3",
			"answer4"
		],
		question: [
			"answer1",
			"answer2",
			"answer3",
			"answer4"
		],
	},

	// declaration of game variables
	startTime: 10,
	correct: 0,
	incorrect: 10,

	// 
	counter: function() {
		setInterval(cartoonTrivia.decrement, 1000);
	}, // closes the counter function

	// timer function for the trivia clock
	decrement: function() {

		// this decrements the timer
		cartoonTrivia.startTime--;

		// This prints the timer on the html
		$("#timerBox").html("<h2>" + cartoonTrivia.startTime + "</h2>");

		// If loop to end game when the timer reaches 0
		if (cartoonTrivia.startTime == 0) {

			// This stops the timer at 0
			cartoonTrivia.stop();

			gameOver();
		} // closes the timer if	
	}, // Closes the timer function

	// This function stops the counter
	stop: function(){
        clearInterval(counter);
    }, //closes the stop function

	// This function is for the start button
	startButton: function() {
		$("#quizStart").fadeOut(4000);
		$("#timerBox").fadeIn(4000);
		cartoonTrivia.counter();
	}, // closes start button


}; // Closes the cartoonTrivia obj