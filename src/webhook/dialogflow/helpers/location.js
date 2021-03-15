const { Image } = require('dialogflow-fulfillment');

const { somethingElse } = require('../richResponses/somethingElseMsg');
const { imgMsg } = require('../richResponses/imgMsg');


const locationMessage1 = 'Venezuela is located at the northern end of South America📍🗺️.';
const locationMessage2 = 'It occupies a roughly triangular area that is larger than the combined areas of France and Germany〰️.';
const locationMessage3 = 'Venezuela is bounded by the Caribbean Sea and the Atlantic Ocean to the north, Guyana to the east, Brazil to the south, and Colombia to the southwest and west🌊.';
const locationMessageES1 = 'Venezuela está ubicada en el extremo norte de América del Sur📍🗺️.';
const locationMessageES2 = 'Ocupa un área aproximadamente triangular que es más grande que las áreas combinadas de Francia y Alemania〰️.';
const locationMessageES3 = 'Venezuela limita con el Mar Caribe y el Océano Atlántico al norte, Guyana al este, Brasil al sur y Colombia al suroeste y oeste🌊.';
const images = [
    {
        img: 'https://www.mapsnworld.com/venezuela/where-is-venezuela.jpg',
        text: 'Venzuela Location'
    }
]

const location = (agent) => {
    if (agent.requestSource === 'TELEGRAM') {
        if (agent.locale == 'es') {
            agent.add(locationMessageES1);
            agent.add(locationMessageES2);
            agent.add(locationMessageES3);
        } else {
            agent.add(locationMessage1);
            agent.add(locationMessage2);
            agent.add(locationMessage3);
        }
        agent.add(new Image({
            imageUrl: images[0].img,
            platform: 'TELEGRAM'
        }))

    } else {
        if (agent.locale == 'es') {
            agent.add(locationMessageES1);
            agent.add(locationMessageES2);
            agent.add(locationMessageES3);
        } else {
            agent.add(locationMessage1);
            agent.add(locationMessage2);
            agent.add(locationMessage3);
        }
        agent.add(imgMsg(images));
    }
    somethingElse(agent);
}

module.exports = { location }