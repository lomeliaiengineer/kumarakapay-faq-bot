const { chipMsg } = require('../richResponses/chipMsg');
const { suggestionsT } = require('../richResponses/telegramSuggestionsMsg');

const aboutVEMessage1 = 'What you wanna know about Venezuela?.';
const aboutVEMessage2 = '📌Please select an option.';
const link = '';
const menuOptions = [
    { text: 'Culture', logo: link, link: '' },
    { text: 'Food', logo: link, link: '' },
    { text: 'Location', logo: link, link: '' },
    { text: 'Political Situation', logo: link, link: '' },
    { text: 'Transport', logo: link, link: '' },
    { text: 'Uniqueness', logo: link, link: '' },
    { text: 'Weather', logo: link, link: '' },
];
const suggestionsEN = ['Culture', 'Food', 'Location', 'Political Situation', 'Transport', 'Uniqueness', 'Weather'];

const aboutVEMessageES1 = '¿Qué quieres saber de Venezuela?.';
const aboutVEMessageES2 = '📌Por favor seleccione una opción.';
const menuOptionsES = [
    { text: 'Cultura', logo: link, link: '' },
    { text: 'Comida', logo: link, link: '' },
    { text: 'Ubicación', logo: link, link: '' },
    { text: 'Situación Política', logo: link, link: '' },
    { text: 'Transporte', logo: link, link: '' },
    { text: 'Singularidad', logo: link, link: '' },
    { text: 'Clima', logo: link, link: '' },
];
const suggestionsES = ['Cultura', 'Comida', 'Ubicación', 'Situación Política', 'Transporte', 'Singularidad', 'Clima'];

const aboutVE = (agent) => {
    if (agent.requestSource === 'TELEGRAM') {
        if (agent.locale == 'es') {
            agent.add(aboutVEMessageES1);
            agent.add(suggestionsT(suggestionsES, '📌Por favor seleccione una opción.'));
        } else {
            agent.add(aboutVEMessage1);
            agent.add(suggestionsT(suggestionsEN, '📌Please select an option'));
        }
    } else {
        if (agent.locale == 'es') {
            agent.add(aboutVEMessageES1);
            agent.add(aboutVEMessageES2);
            agent.add(chipMsg(menuOptionsES));
        } else {
            agent.add(aboutVEMessage1);
            agent.add(aboutVEMessage2);
            agent.add(chipMsg(menuOptions));
        }
    }
}

module.exports = { aboutVE }