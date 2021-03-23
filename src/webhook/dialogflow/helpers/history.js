const { chatbaseMsg } = require('../../../chatbase/chatbase');

const historyMessage1 = 'My name is Kumarakapay, my creator María Lomeli gave me this name in honor of a beautiful camp located in the estate of Bolivar, where she and her family stayed the first time visiting La Gran Sabana🏕️.';
const historyMessage2 = 'I was born by the wish of my creator to show people all over the world what Venezuela has to offer like our breathtaking views and paradise-like places🌊.';
const historyMessage3 = '🔮So let’s begin, ask me something you want to know about Venezuela. ';

const historyMessageES1 = 'Mi nombre es Kumarakapay, mi creadora María Lomeli me dio este nombre en honor a un hermoso campamento ubicado en la hacienda Bolívar, donde ella y su familia se hospedaron la primera vez que visitó La Gran Sabana🏕️.';
const historyMessageES2 = 'Nací por el deseo de mi creador de mostrarle a la gente de todo el mundo lo que Venezuela tiene para ofrecer, como nuestras impresionantes vistas y lugares paradisíacos🌊.';
const historyMessageES3 = '🔮Así que comencemos, pregúntame algo que quieras saber sobre Venezuela.';

const history = (agent) => {

    chatbaseMsg(agent);

    if (agent.locale == 'es') {
        agent.add(historyMessageES1);
        agent.add(historyMessageES2);
        agent.add(historyMessageES3);
    }else{
        agent.add(historyMessage1);
        agent.add(historyMessage2);
        agent.add(historyMessage3);
    }
}

module.exports = { history }