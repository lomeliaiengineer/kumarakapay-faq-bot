const { Card } = require('dialogflow-fulfillment');

const { cardMsg } = require('../richResponses/cardMsg');
const { somethingElse } = require('../richResponses/somethingElseMsg');
const { chatbaseMsg } = require('../../../chatbase/chatbase');

const travelAgenciesMessage = 'This the list of travel agencies I recommend:';
const travelAgenciesMessageES = 'Esta es la lista de agencias de viajes que recomiendo:';
const card = [
    {
        title: 'Italviajes',
        subtitle: '',
        img: 'https://pbs.twimg.com/profile_images/1347204375983386624/UgagaOyX_400x400.jpg',
        link: 'http://www.italviajes.com/',
        imgText: 'img'
    }
];


const travelAgencies = async (agent) => {
    
    chatbaseMsg(agent);

    if (agent.requestSource === 'TELEGRAM') {
        if (agent.locale == 'es') {
            agent.add(travelAgenciesMessageES);
            agent.add(new Card({
                title: card[0].title,
                imageUrl: card[0].img,
                text: '',
                buttonText: 'Ver',
                buttonUrl: 'http://www.italviajes.com/'
            })
            );
        } else {
            agent.add(travelAgenciesMessage);
            agent.add(new Card({
                title: card[0].title,
                imageUrl: card[0].img,
                text: '',
                buttonText: 'See more',
                buttonUrl: 'http://www.italviajes.com/'
            })
            );
        }
    } else {
        if (agent.locale == 'es') {
            agent.add(travelAgenciesMessageES);
        } else {
            agent.add(travelAgenciesMessage);
        }
        agent.add(cardMsg(card));
    }
    somethingElse(agent);
}

module.exports = { travelAgencies }