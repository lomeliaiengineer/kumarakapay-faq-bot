const { chipMsg } = require('../richResponses/chipMsg');
const { suggestionsT } = require('../richResponses/telegramSuggestionsMsg');
const { chatbaseMsg } = require('../../../chatbase/chatbase');

const hotelsAgenciesMessage1 = 'What you wanna know?.';
const hotelsAgenciesMessage2 = '📌Please select an option.';
const menuOptions = [
    { text: 'Hotels', logo: '', link: '' },
    { text: 'Travel Agencies', logo: '', link: '' },
];
const suggestionsEN = ['Hotels', 'Travel Agencies']; 

const hotelsAgenciesMessageES1 = '¿Qué quieres saber?.';
const hotelsAgenciesMessageES2 = '📌Por favor seleccione una opción.';
const menuOptionsES = [
    { text: 'Hoteles', logo: '', link: '' },
    { text: 'Agencias de viaje', logo: '', link: '' },
];
const suggestionsES = ['Hoteles', 'Agencias de viaje']; 

const hotelsAgencies = (agent) => {

    chatbaseMsg(agent);

    if (agent.requestSource === 'TELEGRAM') {
        if (agent.locale == 'es') {
            agent.add(hotelsAgenciesMessageES1);
            agent.add(suggestionsT(suggestionsES, '📌Por favor seleccione una opción.'));
        } else {
            agent.add(hotelsAgenciesMessage1);
            agent.add(suggestionsT(suggestionsEN, '📌Please select an option.'));
        }
    } else {
        if (agent.locale == 'es') {
            agent.add(hotelsAgenciesMessageES1);
            agent.add(hotelsAgenciesMessageES2);
            agent.add(chipMsg(menuOptionsES));
        } else {
            agent.add(hotelsAgenciesMessage1);
            agent.add(hotelsAgenciesMessage2);
            agent.add(chipMsg(menuOptions));
        }
    }
}

module.exports = { hotelsAgencies }