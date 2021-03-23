const chatbase = require('@google/chatbase');

const chatbaseMsg = (agent) => {
    chatbase.newMessage(process.env.CHATBASE_KEY)
        .setAsTypeUser()
        .setPlatform(agent.requestSource !== null ? agent.requestSource : 'DFMessenger')
        .setMessage(agent.query)
        .setIntent(agent.intent)
        .setAsHandled()
        .setVersion('1.0')
        .setUserId('unique-user-0')
        .send()
        .then(msg => console.log(msg.getCreateResponse()))
        .catch(err => console.error(err));
}

const chatbaseMsgNotHandled = (agent) => {
    chatbase.newMessage(process.env.CHATBASE_KEY)
        .setAsTypeUser()
        .setPlatform(agent.requestSource !== null ? agent.requestSource : 'DFMessenger')
        .setMessage(agent.query)
        .setAsNotHandled()
        .setVersion('1.0')
        .setUserId('unique-user-0')
        .send()
        .then(msg => console.log(msg.getCreateResponse()))
        .catch(err => console.error(err));
}

module.exports = { chatbaseMsg, chatbaseMsgNotHandled } 
