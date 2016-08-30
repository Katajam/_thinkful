$(document).ready(function() {
	for (var i=1; i<=100; i++) {

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
})