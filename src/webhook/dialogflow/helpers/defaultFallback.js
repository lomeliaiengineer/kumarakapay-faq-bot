const { chatbaseMsgNotHandled } = require('../../../chatbase/chatbase');

const defaultFallbackMessage = `I didn't get that. Can you say it again?🙇‍♀️`;
const defaultFallbackMessageES = 'Lo siento, no entendí lo que querías decir, ¿podrías repetirlo?🙇‍♀️';

const defaultFallback = (agent) => {

    chatbaseMsgNotHandled(agent);

    if (agent.locale == 'es') {
        agent.add(defaultFallbackMessageES);
    } else {
        agent.add(defaultFallbackMessage);
    }
}

module.exports = { defaultFallback }