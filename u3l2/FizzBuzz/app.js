$(document).ready(function() {

	var maximum = prompt("Please enter a number");

	Fizz(maximum);

})

function Fizz(maximum) {

	if (maximum == parseInt(maximum, 10)) {

		$('.number-list').append('<h1>Fizz Buzz from 1 to ' + maximum + ': </h1>');

		for (var i=1; i<=maximum; i++) {

			var res = i;

			if (i%15 == 0) {
				res = 'FizzBuzz'
			} else if (i%3 == 0) {
				res = 'Fizz'
			} else if (i%5 == 0) {
				res = 'Buzz'
			}

			$('.number-list').append('<p>' + res + '</p>');
		}
		
	} else {

		$('.number-list').append('<h1>Please enter a number</h1>');

	}
	
}