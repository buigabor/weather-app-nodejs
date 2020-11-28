const path = require('path');
const express = require('express');
const hbs = require('hbs');
const app = express();

// Paths for express
const publicPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../template/views');
const partialPath = path.join(__dirname, '../template/partials');

// Setup handlebars engine and views location
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialPath);

// Setup static directory to serve
app.use(express.static(publicPath));

app.get('', (req, res) => {
	res.render('index', {
		title: 'Weather',
		name: 'Bui Gábor',
	});
});

app.get('/about', (req, res) => {
	res.render('about', {
		title: 'Weather',
		name: 'Bui Gábor',
	});
});

app.get('*', (req, res) => {
	res.render('404', {
		title: 'Weather',
		name: 'Bui Gábor',
	});
});

app.listen('3000', () => {
	console.log('Server up on port 3000');
});
