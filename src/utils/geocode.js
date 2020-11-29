const axios = require('axios');

const geocode = (address, callback) => {
	const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
		address,
	)}.json?access_token=pk.eyJ1IjoiYnVpZ2Fib3IiLCJhIjoiY2toeXAyamp3MDdxZjJ5cWgxaDhmeHlhYyJ9.iq4pUBENSc1zN9bMxXqFvw&limit=1`;

	axios
		.get(url)
		.then((response) => {
			if (response.data.features.length === 0) {
				throw { response };
			}
			return response.data;
		})
		.then((data) => {
			let latitude = data.features[0].center[1];
			let longitude = data.features[0].center[0];
			let location = data.features[0].place_name;
			callback(undefined, { latitude, longitude, location });
		})
		.catch((error) => {
			if (!error.response) {
				callback('Unable to reach geocode service!');
			} else if (error.response.data.features.length === 0) {
				callback('Can not find place! Try another search.');
			}
		});
};

module.exports = geocode;
