const weatherForm = document.querySelector('form');
const locationInput = document.querySelector('input');
const messageOne = document.getElementById('message-1');
const messageTwo = document.getElementById('message-2');

weatherForm.addEventListener('submit', (e) => {
	e.preventDefault();
	messageOne.textContent = 'Loading...';
	messageTwo.textContent = '';
	axios
		.get(`http://localhost:3000/weather?address=${locationInput.value}`)
		.then((response) => {
			if (response.data.error) {
				throw { error: response.data.error };
			}
			return response.data;
		})
		.then((data) => {
			messageOne.textContent = 'Location: ' + data.location;
			messageTwo.textContent = 'Weather: ' + data.weather;
		})
		.catch((error) => {
			messageOne.textContent = error.error;
		});
});
