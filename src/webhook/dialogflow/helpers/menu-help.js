const { listMsg } = require('../richResponses/listMsg');
const { suggestionsT } = require('../richResponses/telegramSuggestionsMsg');

const showMenuMessage = 'I can help you with the following categories';
const listItems = [
    {
        title: '🇻🇪About Venezuela',
        subtitle: 'Weather, Food, Transport, Location, Uniqueness, Culture, Political Situation',
        event: 'about-ve'
    },
    {
        title: '✈️Travel to Venezuela',
        subtitle: 'Baggage, Best time to travel, Exchange Money, Places to Visit, Airlines, Safety',
        event: 'travel-ve'
    },
    {
        title: '🏨Hotels & Travel Agencies',
        subtitle: 'Hotels, Travel Agencies',
        event: 'hotels-agencies'
    },
];
const suggestionsEN = ['About Venezuela', 'Travel to Venezuela', 'Hotels & Travel Agencies']; 

const showMenuMessageES = 'Puedo ayudarte con las siguientes categorías:';
const listItemsES = [
    {
        title: '🇻🇪Sobre Venezuela',
        subtitle: 'Clima, Comida, Transporte, Ubicación, Singularidad, Cultura, Situación política',
        event: 'about-ve'
    },
    {
        title: '✈️Viajar a Venezuela',
        subtitle: 'Equipaje, Mejor época para viajar, Cambio de dinero, Lugares para visitar, Líneas aereas, Seguridad',
        event: 'travel-ve'
    },
    {
        title: '🏨Hoteles y agencias de viajes',
        subtitle: 'Hoteles y agencias de viajes',
        event: 'hotels-agencies'
    },
];
const suggestionsES = ['Sobre Venezuela', 'Viajar a Venezuela', 'Hoteles y agencias de viajes']; 

const showMenu = (agent) => {
    if (agent.requestSource === 'TELEGRAM') {
        if (agent.locale == 'es') {
            agent.add(showMenuMessageES);
            agent.add(suggestionsT(suggestionsES, '📌Por favor seleccione una opción.'));
        } else {
            agent.add(showMenuMessage);
            agent.add(suggestionsT(suggestionsEN, '📌Please select an option'));
        }
    } else {
        if (agent.locale == 'es') {
            agent.add(showMenuMessageES);
            agent.add(listMsg(listItemsES));
        } else {
            agent.add(showMenuMessage);
            agent.add(listMsg(listItems));
        }
    }

}

module.exports = { showMenu }