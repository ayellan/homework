//when #fahrenheit_to_celsius is clicked.
$('#fahrenheit_to_celsius').on('click', function() {
    var temperatureNum = $('#temperature').val();
	var tempF = parseFloat(temperatureNum);
	var tempC = parseFloat(temperatureNum);
	var tempFtoC = (temperatureNum - 32) / 1.8;
	var tempCtoF = 1.8 * temperatureNum + 32;
//change html in #result.
$('#result').html(tempF + 'ºF' + ' = ' + tempFtoC + 'ºC');

//If statement to prove first condition.
if(tempF < 50) {
	$('body').removeClass();
	$('body').addClass('bluebg');
//If else statement to prove a second condition.
} else if (tempF >= 50 && tempF < 80) {
	$('body').removeClass();
	$('body').addClass('orangebg');
//Else statement for not meeting any conditions.
} else {
	$('body').removeClass();
	$('body').addClass('redbg');
		}
});

//when #celsius_to_fahrenheit is clicked.
$('#celsius_to_fahrenheit').on('click', function() {
    var temperatureNum = $('#temperature').val();
	var tempF = parseFloat(temperatureNum);
	var tempC = parseFloat(temperatureNum);
	var tempFtoC = (temperatureNum - 32) / 1.8;
	var tempCtoF = 1.8 * temperatureNum + 32;
//change html in #result.
$('#result').html(tempC + 'ºC' +' = ' + tempCtoF + 'ºF');

//If statement to prove first condition.
if(tempC < 15) {
	$('body').removeClass();
	$('body').addClass('bluebg');
//If else statement to prove a second condition.	
} else if (tempC >= 15 && tempC < 25) {
	$('body').removeClass();
	$('body').addClass('orangebg');
//Else statement for not meeting any conditions.	
} else {
	$('body').removeClass();
	$('body').addClass('redbg');
		}
});
