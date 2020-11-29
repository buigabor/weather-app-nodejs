const axios = require('axios');

const forecast = (latitude, longitude, callback) => {
	debugger;
	const url = `http://api.weatherstack.com/current?access_key=a2d1199e39d5c85094e748d4c07b4262&query=${latitude},${longitude}`;
	axios
		.get(url)
		.then((response) => {
			if (response.data.error) {
				throw response.data.error;
			} else {
				return response.data;
			}
		})
		.then((data) => {
			const dataToLog = `${data.current.weather_descriptions[0]}. It is currently ${data.current.temperature} degrees out. It feels like ${data.current.feelslike} degrees out.`;
			callback(undefined, dataToLog);
		})
		.catch((error) => {
			if (error.info) {
				callback(error.info, undefined);
			} else {
				callback('Unable to reach weather service!', undefined);
			}
		});
};

module.exports = forecast;
