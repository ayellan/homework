//convert -32 /5.8

$('#fahrenheit_to_celsius').on('click', function() {
	var temperatureNum = $('#temperature').val();
	var tempF = parseInt(temperatureNum, 10);
	var tempC = parseInt(temperatureNum,10);
	/*var tempFtoC = (temperatureNum - 32) * (5/9);*/
	var tempFtoC = (temperatureNum - 32) / 1.8;
	/*var tempCtoF = (temperatureNum * (9/5)) + 32;*/
	var tempCtoF = 1.8 * temperatureNum + 32;

$('#result').html(tempF + 'ºF' + ' = ' + tempFtoC + 'ºC');
});

$('#celsius_to_fahrenheit').on('click', function() {
	var temperatureNum = $('#temperature').val();
	var tempF = parseInt(temperatureNum, 10);
	var tempC = parseInt(temperatureNum, 10);
	/* var tempFtoC = (temperatureNum - 32) * (5/9);*/
	var tempFtoC = (temperatureNum - 32) / 1.8;
	/*var tempCtoF = (temperatureNum * (9/5)) + 32;*/
	var tempCtoF = 1.8 * temperatureNum + 32;

$('#result').html(tempC + 'ºC' +' = ' + tempCtoF + 'ºF');
});