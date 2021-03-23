require('dotenv');
const { Card } = require('dialogflow-fulfillment');

const { somethingElse } = require('../richResponses/somethingElseMsg');
const { listMsg } = require('../richResponses/listMsg');
const { chatbaseMsg } = require('../../../chatbase/chatbase');

const travelMessage = `Right now as we know, we're going through tough times due to covid which makes it very complicated to travel overseas but we know that this too is going to pass so I'll leave you the airlines that used to travel to Venezuela:`;
const travelMessageES = `En este momento, como sabemos, estamos pasando por momentos difíciles debido al covid que hace que viajar al extranjero sea muy complicado, pero sabemos que esto también va a pasar, así que les dejo las aerolíneas que solían viajar a Venezuela:`;
const listItems = [
    {
        title: '✈️Air France',
        subtitle: '',
        event: ''
    },
    {
        title: '✈️Turkish Airlines',
        subtitle: '',
        event: ''
    },
    {
        title: '✈️Air Europa',
        subtitle: '',
        event: ''
    },
    {
        title: '✈️American Airlines',
        subtitle: '',
        event: ''
    },
    {
        title: '✈️British Airways',
        subtitle: '',
        event: ''
    },
    {
        title: '✈️Iberia',
        subtitle: '',
        event: ''
    },
    {
        title: '✈️TAP Air Portugal',
        subtitle: '',
        event: ''
    },
];

const airlines = (agent) => {

    chatbaseMsg(agent);

    if (agent.requestSource === 'TELEGRAM') {
        if (agent.locale == 'es') {
            agent.add(travelMessageES);
        } else {
            agent.add(travelMessage);
        }
        listItems.forEach(item => {
            agent.add(new Card({
                title: item.title,
                text: item.subtitle,
            }));
        });
    } else {
        if (agent.locale == 'es') {
            agent.add(travelMessageES);
        } else {
            agent.add(travelMessage);
        }
        agent.add(listMsg(listItems));
    }
    somethingElse(agent);
}

module.exports = { airlines }