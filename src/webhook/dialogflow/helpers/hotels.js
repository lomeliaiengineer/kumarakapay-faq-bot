const { Card } = require('dialogflow-fulfillment');

const { cardMsg } = require('../richResponses/cardMsg');
const { somethingElse } = require('../richResponses/somethingElseMsg');

const hotelsMessage = '🛎️These are the lists of hotels I recommend:';
const card = [
    {
        title: 'Puerto Escondido Hostel',
        subtitle: 'Price: $ \n Cepe - Aragua - Venezuela',
        img: 'http://posadapuertoescondido.com/wp-content/uploads/2012/05/a.jpg',
        link: 'http://posadapuertoescondido.com/',
        imgText: 'img'
    }
];

const hotelsMessageES = '🛎️Estas son las listas de hoteles que recomiendo:';
const cardES = [
    {
        title: 'Puerto Escondido Hostel',
        subtitle: 'PRECIO: $ \n Cepe - Aragua - Venezuela',
        img: 'http://posadapuertoescondido.com/wp-content/uploads/2012/05/a.jpg',
        link: 'http://posadapuertoescondido.com/',
        imgText: 'img'
    }
];

const hotels = (agent) => {
    if (agent.requestSource === 'TELEGRAM') {
        if (agent.locale == 'es') {

            agent.add(new Card({
                title: cardES[0].title,
                imageUrl: cardES[0].img,
                text: cardES[0].subtitle,
                buttonText: 'Ver',
                buttonUrl: cardES[0].link
            }));

        } else {

            agent.add(new Card({
                title: card[0].title,
                imageUrl: card[0].img,
                text: card[0].subtitle,
                buttonText: 'See more',
                buttonUrl: card[0].link
            }));
        }
    } else {
        if (agent.locale == 'es') {
            agent.add(hotelsMessageES);
            agent.add(cardMsg(cardES));
        } else {
            agent.add(hotelsMessage);
            agent.add(cardMsg(card));
        }
    }
    somethingElse(agent);
}

module.exports = { hotels }