const { somethingElse } = require('../richResponses/somethingElseMsg');
const { chatbaseMsg } = require('../../../chatbase/chatbase');

const safetyMessage1 = '⚠️I can’t say it is perfect for backpackers or people that speak a foreign language traveling alone because people might try to trick them or steal their money by offering overpriced services taking advantage of the fact they’re not from here.';
const safetyMessage2 = '🔦I always recommend traveling with someone local who knows the country inside out, understands the situation, and also knows how to use that knowledge to make a safe and exciting experience without feeling like a guided bus tour.';
const safetyMessage3 = 'Nowadays, there are plenty of agencies in Venezuela that can help you with all you need.';

const safetyMessageES1 = '⚠️No puedo decir que sea perfecto para mochileros o personas que hablan un idioma extranjero que viajan solos porque la gente podría intentar engañarlos o robarles su dinero ofreciendo servicios caros aprovechando el hecho de que no son de aquí.';
const safetyMessageES2 = '🔦Siempre recomiendo viajar con alguien local que conozca el país de adentro hacia afuera, comprenda la situación y también sepa cómo usar ese conocimiento para hacer una experiencia segura y emocionante sin sentirse como un tour guiado en autobús.';
const safetyMessageES3 = 'Hoy en día, existen muchas agencias en Venezuela que pueden ayudarte en todo lo que necesites.';

const safety = (agent) => {

    chatbaseMsg(agent);

    if (agent.locale == 'es') {
        agent.add(safetyMessageES1);
        agent.add(safetyMessageES2);
        agent.add(safetyMessageES3);
    } else {
        agent.add(safetyMessage1);
        agent.add(safetyMessage2);
        agent.add(safetyMessage3);
    }
    somethingElse(agent);
}

module.exports = { safety }