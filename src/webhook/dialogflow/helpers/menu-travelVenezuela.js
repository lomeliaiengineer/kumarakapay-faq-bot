const { chipMsg } = require('../richResponses/chipMsg');
const { suggestionsT } = require('../richResponses/telegramSuggestionsMsg');

const travelVEMessage1 = 'What you wanna know about Travelling to Venezuela?.';
const travelVEMessage2 = '📌Please select an option.';
const menuOptions = [
    { text: 'Baggage', logo: '', link: '' },
    { text: 'Best Time To Travel', logo: '', link: '' },
    { text: 'Exchange Money', logo: '', link: '' },
    { text: 'Places to Visit', logo: '', link: '' },
    { text: 'Safety', logo: '', link: '' },
    { text: 'Airlines', logo: '', link: '' },
];
const suggestionsEN = ['Baggage', 'Best Time To Travel', 'Exchange Money', 'Places to Visit', 'Safety', 'Airlines'];

const travelVEMessageES1 = '¿Qué quieres saber sobre viajar a Venezuela ?.';
const travelVEMessageES2 = '📌Por favor seleccione una opción.';
const menuOptionsES = [
    { text: 'Equipaje', logo: '', link: '' },
    { text: 'Mejor época para viajar', logo: '', link: '' },
    { text: 'Cambio de dinero', logo: '', link: '' },
    { text: 'Lugares para visitar', logo: '', link: '' },
    { text: 'Seguridad', logo: '', link: '' },
    { text: 'Líneas aereas', logo: '', link: '' },
];
const suggestionsES = ['Equipaje', 'Mejor época para viajar', 'Cambio de dinero', 'Lugares para visitar', 'Seguridad', 'Líneas aereas'];

const travelVE = (agent) => {
    if (agent.requestSource === 'TELEGRAM') {
        if (agent.locale == 'es') {
            agent.add(travelVEMessageES1);
            agent.add(suggestionsT(suggestionsES, '📌Por favor seleccione una opción.'));
        } else {
            agent.add(travelVEMessage1);
            agent.add(suggestionsT(suggestionsEN, '📌Please select an option'));
        }
    } else {
        if (agent.locale == 'es') {
            agent.add(travelVEMessageES1);
            agent.add(travelVEMessageES2);
            agent.add(chipMsg(menuOptionsES));
        } else {
            agent.add(travelVEMessage1);
            agent.add(travelVEMessage2);
            agent.add(chipMsg(menuOptions));
        }
    }
}

module.exports = { travelVE }