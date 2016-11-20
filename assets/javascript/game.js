// Remember to look at the week 6 day 2 things in the class repo for examples on the buttons.

// This is the question pool that will be used to populate the question box in the main page.
var questions = {

};
// This is the main game object
var cartoonTrivia = {

	// declaration of game variables
	startTime: 120, 

	counter: function() {
		setInterval(this.decrement, 1000);
	},

	// timer function for the trivia clock
	decrement: function() {
		// this.startTime--;
		$("#timerBox").html("<h2>" + this.startTime + "</h2>");
			console.log(this.startTime);
		// If loop to end game when the timer reaches 0
		if (this.startTime == 0) {
			this.counter.stop();

			gameOver();
		} // closes the timer if

	}, // Closes the timer function

	// This function is for the start button
	startButton: function() {
		$("#quizStart").fadeOut(4000);
		$("#timerBox").fadeIn(4000);
		this.counter();
	}

}; // Closes the cartoonTrivia obj