const { somethingElse } = require('../richResponses/somethingElseMsg');

const bestTimeToTravelMessage1 = 'If you want to take a trip throughout Venezuela🗺️, you can choose January and February, also including the Christmas period at the end of December📅.';
const bestTimeToTravelMessage2 = 'More generally, the dry period, or in any case the least rainy🌦️ (mid-December to mid-April), is preferable to the rainy season (late April to mid-November).';
const bestTimeToTravelMessageES1 = 'Si quieres hacer un viaje por toda Venezuela🗺️, puedes elegir entre enero y febrero, incluyendo también el período navideño a finales de diciembre📅.';
const bestTimeToTravelMessageES2 = 'De manera más general, el período seco, o en cualquier caso el menos lluvioso☀🌦️ (mediados de diciembre a mediados de abril), es preferible a la temporada de lluvias (finales de abril a mediados de noviembre).';

const bestTimeToTravel = (agent) => {
    if (agent.locale == 'es') {
        agent.add(bestTimeToTravelMessageES1);
        agent.add(bestTimeToTravelMessageES2);
    }else{
        agent.add(bestTimeToTravelMessage1);
        agent.add(bestTimeToTravelMessage2);
    }
    somethingElse(agent);
}

module.exports = { bestTimeToTravel }