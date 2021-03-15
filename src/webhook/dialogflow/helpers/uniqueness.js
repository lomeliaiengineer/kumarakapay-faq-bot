const { somethingElse } = require('../richResponses/somethingElseMsg');


const uniquenessMessage1 = `Venezuela is one of the most ecologically diverse countries in the world, we have mountains⛰️, deserts🏜️, forests🌳, jungle🌴, wetlands🏞️, tropical deltas🏝️, coastal wilderness🐚, all densely packed with wildlife.`;
const uniquenessMessage2 = `Also, we were once known as the happiest country in the world🙋‍♀️🇻🇪, which I think hasn’t really changed because no matter how narrow our path gets we always have something to make a joke or laugh about.`;

const uniquenessMessageES1 = `Venezuela es uno de los países con mayor diversidad ecológica del mundo, tenemos montañas⛰️, desiertos🏜️, bosques🌳, selvas🌴, humedales🏞️, deltas tropicales🏝️, áreas silvestres costeras🐚, todo densamente poblado de vida silvestre.`;
const uniquenessMessageES2 = `Además, una vez fuimos conocidos como el país más feliz del mundo🙋‍♀️🇻🇪, lo que creo que no ha cambiado realmente porque no importa cuán estrecho se vuelva nuestro camino, siempre tenemos algo de qué bromear o reír.`;

const uniqueness = async (agent) => {
    

    if (agent.locale == 'es') {
        agent.add(uniquenessMessageES1);
        agent.add(uniquenessMessageES2);
    }else{
        agent.add(uniquenessMessage1);
        agent.add(uniquenessMessage2);
    }
    somethingElse(agent);
}

module.exports = { uniqueness }