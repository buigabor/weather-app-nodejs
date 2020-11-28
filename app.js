const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

const command = process.argv[2];
const location = process.argv[3];

if (command && location) {
	if (command === 'weather') {
		geocode(location, (error, data) => {
			if (error) {
				console.log('Error:', error);
				return;
			}

			const { latitude, longitude, location } = data;

			forecast(latitude, longitude, (error, forecastData) => {
				if (error) {
					console.log('Error:', error);
					return;
				}
				console.log('Location:', location);
				console.log('Data:', forecastData);
			});
		});
	}
} else {
	console.log('Provide both command and location');
}
