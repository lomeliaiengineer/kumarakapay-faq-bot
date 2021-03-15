const { somethingElse } = require('../richResponses/somethingElseMsg');

const exchangeMoneyMessage = '💱There are plenty of exchange houses where you can change your money.';
const exchangeMoneyMessageES = '💱Hay muchas casas de cambio donde puedes cambiar tu dinero.';

const exchangeMoney = (agent) => {
    if (agent.locale == 'es') {
        agent.add(exchangeMoneyMessageES);
    }else{
        agent.add(exchangeMoneyMessage);
    }
    somethingElse(agent);
}

module.exports = { exchangeMoney }