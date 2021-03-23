const { chatbaseMsg } = require('../../../chatbase/chatbase');
const { somethingElse } = require('../richResponses/somethingElseMsg');


const weatherMessage1 = `In Venezuela, the climate is hot all year round♨️, at least at low altitudes, so the main differences are to be found in the seasonal rain pattern: there is a dry season☀️ (which usually runs from mid-December to mid-April) and a rainy season🌧️ (usually, from late April to mid-November).`;
const weatherMessage2 = `⛰️However, the vastness of the territory and the presence of mountain ranges and plateaus make the situation more complicated, so the climate is more or less rainy depending on the area and more or less warm depending on altitude.`;
const weatherMessage3 = `Venezuela is located just north of the Equator, so temperature fluctuations are limited, although the dry season, in which the north-east trade winds prevail, is typically the coolest, albeit slightly🌬️.`;

const weatherMessageES1 = `En Venezuela, el clima es caluroso todo el año♨️, al menos en altitudes bajas, por lo que las principales diferencias se encuentran en el patrón de lluvias estacionales: hay una estación seca☀️ (que generalmente va desde mediados de diciembre hasta mediados de abril) y una temporada de lluvias🌧️ (generalmente, desde finales de abril hasta mediados de noviembre).`;
const weatherMessageES2 = `⛰️Sin embargo, la inmensidad del territorio y la presencia de sierras y mesetas complican la situación, por lo que el clima es más o menos lluvioso según la zona y más o menos cálido según la altitud.`;
const weatherMessageES3 = `Venezuela se encuentra justo al norte del Ecuador, por lo que las fluctuaciones de temperatura son limitadas, aunque la estación seca, en la que prevalecen los vientos alisios del noreste, suele ser la más fría, aunque ligeramente🌬️.`;

const weather = async (agent) => {
    
    chatbaseMsg(agent);
    
    if (agent.locale == 'es') {
        agent.add(weatherMessageES1);
        agent.add(weatherMessageES2);
        agent.add(weatherMessageES3);
    } else {
        agent.add(weatherMessage1);
        agent.add(weatherMessage2);
        agent.add(weatherMessage3);
    }
    somethingElse(agent);
    
}

module.exports = { weather }