const somethingElse = (agent) => {
    if (agent.locale == 'es') {
        return agent.add('En qué más puedo ayudarte?');
    }else{
        return agent.add('Is there something else I can help you with?');
    }
}

module.exports = { somethingElse };