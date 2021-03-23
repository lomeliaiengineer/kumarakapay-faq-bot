const { somethingElse } = require('../richResponses/somethingElseMsg');
const { chatbaseMsg } = require('../../../chatbase/chatbase');

const cultureMessage1 = 'Like most South American countries📍, Venezuela has a very rich culture brought by groups from different parts of the world🌎.';
const cultureMessage2 = 'You can see minor influences from Italians, Arabs and Portuguese to name a few.';
const cultureMessage3 = 'But in general, the Venezuelan culture has a very prominent Spanish and Caribbean influence💃.';

const cultureMessageES1 = 'Como la mayoría de los países sudamericanos📍, Venezuela tiene una cultura muy rica traída por grupos de diferentes partes del mundo🌎.';
const cultureMessageES2 = 'Puede ver influencias menores de italianos, árabes y portugueses, por nombrar algunos.';
const cultureMessageES3 = 'Pero en general, la cultura venezolana tiene una influencia española y caribeña muy destacada💃.';

const culture = (agent) => {

    chatbaseMsg(agent);

    if (agent.locale == 'es') {
        agent.add(cultureMessageES1);
        agent.add(cultureMessageES2);
        agent.add(cultureMessageES3);
    }else{
        agent.add(cultureMessage1);
        agent.add(cultureMessage2);
        agent.add(cultureMessage3);
    }
    
    somethingElse(agent);
}

module.exports = { culture }