require('dotenv').config();
const DetectLanguage = require('detectlanguage');
const detectlanguage = new DetectLanguage(process.env.LAN_API_KEY);

const getLanguage = async (agent) => {
        agent.locale = await detectlanguage.detectCode(agent.query);
        return agent;
}

module.exports = { getLanguage }