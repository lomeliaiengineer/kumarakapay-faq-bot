require('dotenv').config();
const DetectLanguage = require('detectlanguage');
const detectlanguage = new DetectLanguage(process.env.LAN_API_KEY);

const getLanguage = async (req, res, next) => {
    if (req.body.queryResult.action !== 'input.welcome' &&
        req.body.queryResult.queryText !== 'about-ve' &&
        req.body.queryResult.queryText !== 'travel-ve' &&
        req.body.queryResult.queryText !== 'hotels-agencies') {
        const text = req.body.queryResult.queryText;

        req.body.queryResult.languageCode = await detectlanguage.detectCode(text);
    }
    next();
}

module.exports = { getLanguage };