const { Card } = require('dialogflow-fulfillment');

const { somethingElse } = require('../richResponses/somethingElseMsg');
const { cardMsg } = require('../richResponses/cardMsg');
const { chatbaseMsg } = require('../../../chatbase/chatbase');

const card = [
    {
        title: '🚌Public buses',
        subtitle: 'As always, this would be the cheapest option. However, I wouldn’t recommend it. The state of these buses isn’t the best, also you might get too much attention and that’s exactly the opposite you’d want.',
        img: 'https://diarioavance.com/wp-content/uploads/2019/03/transporte-Veneuzlea.jpg',
        link: '',
        imgText: 'img'
    },
    {
        title: '🚇Train',
        subtitle: 'Caracas has a subway system if you still want to stretch your budget.',
        img: 'https://www.vtv.gob.ve/wp-content/uploads/2020/03/Metro-de-Caracas-1140x570-1.jpg',
        link: '',
        imgText: 'img'
    },
    {
        title: '🚕Taxis',
        subtitle: 'The taxis in Venezuela don’t have meters and in fact, there are a lot of unlicensed taxis. Make sure you negotiate a fixed fare before going inside the taxi. This is the most practical means of transportation.',
        img: 'https://i.pinimg.com/originals/36/fc/6a/36fc6a387a49068c3a300428df4e1ca6.jpg',
        link: '',
        imgText: 'img'
    },
    {
        title: '🚐Private transfers',
        subtitle: 'If you can spend more, then it is always best to have private transfers. There are dedicated agencies that have networks of trusted drivers to pick you up and deliver you to hotels, airports, or whatever your planned destination is.        ',
        img: 'https://http2.mlstatic.com/D_NQ_NP_838642-MLV28163357104_092018-C.jpg',
        link: '',
        imgText: 'img'
    }
];

const cardES = [
    {
        title: '🚌Transporte público',
        subtitle: 'Como siempre, esta sería la opción más económica. Sin embargo, no lo recomendaría. El estado de estos autobuses no es el mejor, también es posible que recibas demasiada atención y eso es exactamente lo contrario que desearías.',
        img: 'https://diarioavance.com/wp-content/uploads/2019/03/transporte-Veneuzlea.jpg',
        link: '',
        imgText: 'img'
    },
    {
        title: '🚇Metro',
        subtitle: 'Caracas tiene un sistema de metro si aún desea estirar su presupuesto.',
        img: 'https://www.vtv.gob.ve/wp-content/uploads/2020/03/Metro-de-Caracas-1140x570-1.jpg',
        link: '',
        imgText: 'img'
    },
    {
        title: '🚕Taxis',
        subtitle: 'Los taxis en Venezuela no tienen taxímetro y de hecho, hay muchos taxis sin licencia. Asegúrese de negociar una tarifa fija antes de subir al taxi. Este es el medio de transporte más práctico.',
        img: 'https://i.pinimg.com/originals/36/fc/6a/36fc6a387a49068c3a300428df4e1ca6.jpg',
        link: '',
        imgText: 'img'
    },
    {
        title: '🚐Traslados privados',
        subtitle: 'Si puede gastar más, siempre es mejor tener traslados privados. Hay agencias dedicadas que tienen redes de conductores confiables para que lo recojan y lo lleven a hoteles, aeropuertos o cualquiera que sea su destino planificado.',
        img: 'https://http2.mlstatic.com/D_NQ_NP_838642-MLV28163357104_092018-C.jpg',
        link: '',
        imgText: 'img'
    }
];


const transport = async (agent) => {

    chatbaseMsg(agent);

    if (agent.requestSource === 'TELEGRAM') {
        if (agent.locale == 'es') {
            cardES.forEach(item => {
                agent.add(new Card({
                    title: item.title,
                    imageUrl: item.img,
                    text: item.subtitle,
                }));
            });

        } else {
            card.forEach(item => {
                agent.add(new Card({
                    title: item.title,
                    imageUrl: item.img,
                    text: item.subtitle,
                }));
            });
        }
    } else {
        if (agent.locale == 'es') {
            agent.add(cardMsg(cardES));
        } else {
            agent.add(cardMsg(card));
        }
    }
    somethingElse(agent);
}

module.exports = { transport }