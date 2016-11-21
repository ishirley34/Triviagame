// Remember to look at the week 6 day 2 things in the class repo for examples on the buttons.



// This is the main game object
var cartoonTrivia = {

	// This is the question pool that will be used to populate the question box in the main page.
	questions: [
		{
		"question": "This is the question?",
			"answers": [
				"answer1a",
				"answer2a",
				"answer3a",
				"answer4a"
			],
			"answer" : "answer"
		},
		{
		"question": "This is the question?",
			"answers": [
				"answer1b",
				"answer2b",
				"answer3b",
				"answer4b"
			],
			"answer" : "answer"
		},
		{
		"question": "This is the question?",
			"answers": [
				"answer1c",
				"answer2c",
				"answer3c",
				"answer4c"
			],
			"answer" : "answer"
		},
		{
		"question": "This is the question?",
			"answers": [
				"answer1d",
				"answer2d",
				"answer3d",
				"answer4d"
			],
			"answer" : "answer"
		},
	],

	// declaration of game variables
	questionTotal: 10,
	startTime: 120,
	correct: 0,
	incorrect: 10,
	noAnswer: 0,

	// this function creates the interval for the timer
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

		// fades out the splash screen
		$("#quizStart").fadeOut(2000);

		// fades inthe timer
		$("#timerBox").fadeIn(2000);

		// fades in the question box
		$("#questionBox").delay(1000).fadeIn(2000);

		// this starts the the counter
		cartoonTrivia.counter();

	}, // closes start button

	// this function creates the html elements for the questions and answers
	questionFunc: function () {
		// working on getting this to work. might not happen......
		var object = this.questions[index];
		var question = object["Question"];
		var choices = object["answers"];
		var header = $("<h2>");
		header.text(question);
		$("#questionBox").prepend(header);

		for (var i = 0; i < choices.length; i++) {
			var label= $("<label>");
			label.addClass("answer");
			var input= $("<input>");
			input.attr("name", "optradio");
			input.attr("type", "radio");
			input.attr("value", choices[i]);
			input.addClass("btn btn-default");
			label.text(choices[i]);
			label.prepend(input);
			$("#questionBox").append(label);
		};
	},


}; // Closes the cartoonTrivia obj

// event listener to add functionality to the buttons
$(document).ready(function(){
	// this is the function that adds a listener the the start button
	$(document).on("click", "#startButton", function(){
		cartoonTrivia.startButton();
	}); // this closes the start button event listener

}); // this closes the document ready function