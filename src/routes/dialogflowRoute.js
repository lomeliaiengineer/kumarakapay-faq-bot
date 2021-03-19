require('dotenv').config();
const express = require('express');
const { WebhookClient } = require('dialogflow-fulfillment');

const { dialogflow } = require('../webhook/dialogflow/intentMap');
const { getLanguage } = require('../middlewares/getLanguage');

const dialogflowApp = express();

dialogflowApp.use(express.urlencoded({ extended: false }));
dialogflowApp.use(express.json());

dialogflowApp.post('/', async (req, res) => {
	console.log('Dialogflow Request body: ' + JSON.stringify(req.body.queryResult), '\n');
	const agent = new WebhookClient({ request: req, response: res });
	let intentMap = await dialogflow(agent);
	agent.handleRequest(intentMap);
});

module.exports = dialogflowApp;