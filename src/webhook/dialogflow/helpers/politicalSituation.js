const { somethingElse } = require('../richResponses/somethingElseMsg');

const politicalSituationMessage1 = `💡Right now, things are really quiet when referring to protests, that doesn’t mean all our problems are gone, it's just that the vast majority has left and the ones that are still here, do our best to build our country back by working and being better civilians.`;
const politicalSituationMessage2 = '💡We have come to the conclusion that politicians don’t care about us or our needs so we are fighting our way up against the current.';

const politicalSituationMessageES1 = `💡En este momento, las cosas están muy tranquilas en lo que respecta a las protestas, eso no significa que todos nuestros problemas se hayan ido, es solo que la gran mayoría se ha ido y los que todavía están aquí, hacemos nuestro mejor esfuerzo para reconstruir nuestro país trabajando y ser mejores civiles.`;
const politicalSituationMessageES2 = '💡Hemos llegado a la conclusión de que los políticos no se preocupan por nosotros o nuestras necesidades, por lo que estamos luchando contra la corriente.';

const politicalSituation = (agent) => {
    if (agent.locale == 'es') {
        agent.add(politicalSituationMessageES1);
        agent.add(politicalSituationMessageES2);
    }else{
        agent.add(politicalSituationMessage1);
        agent.add(politicalSituationMessage2);
    }
    somethingElse(agent);
}

module.exports = { politicalSituation }