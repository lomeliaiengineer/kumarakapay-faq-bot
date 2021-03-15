require('dotenv').config();
const express = require('express');
const ngrok = require('ngrok');
const path = require('path');

const port = process.env.PORT || 3000;
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
const app = express();

app.use('/dialogflow', require('./src/routes/dialogflowRoute'));
app.use(express.static(__dirname + '/public'));

app.use('/', (req, res) => {
	res.sendFile(path.join(__dirname + '/public/index.html'));
})

app.listen(port, async () => {
	const url = await ngrok.connect(port);
	console.log(`Server is running at port ${port}`);
	console.log(url + '/dialogflow');
});
