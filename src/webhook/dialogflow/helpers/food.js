const { Card } = require('dialogflow-fulfillment');

const { cardMsg } = require('../richResponses/cardMsg');
const { somethingElse } = require('../richResponses/somethingElseMsg');
const { chatbaseMsg } = require('../../../chatbase/chatbase');

const foodMessage1 = 'You’ll find different types of food and dishes from region to region but there are a few of these that are common in each region🍽️: Arepas, Cachapas, Pabellon Criollo, Tequeños, Empanadas.';
const foodMessage2 = 'However, on our daily basics, we eat very common plates like pasta🍝, rice🍚, fish🐟, meat🥩, beans🍲, and vegetables like potatoes🥔, carrots🥕, corn🌽, and onions🧅.';
const foodMessage3 = 'So you have nothing to worry about🤤.';

const foodMessageES1 = 'Encontrarás diferentes tipos de comida y platos de una región a otra, pero hay algunos de estos que son comunes en cada región🍽️: Arepas, Cachapas, Pabellón Criollo, Tequeños, Empanadas.';
const foodMessageES2 = 'Sin embargo, en nuestras actividades básicas diarias, comemos platos muy comunes como pasta🍝, arroz🍚, pescado🐟, carne🥩, frijoles🍲 y verduras como patatas🥔, zanahorias🥕, maíz🌽 y cebollas🧅.';
const foodMessageES3 = 'Así que no tienes nada de qué preocuparte🤤.';

const card = [
    {
        title: 'Cachapa',
        subtitle: '',
        img: 'https://okdiario.com/img/2019/05/29/receta-de-cachapa-venezolana-1.jpg',
        link: '',
        imgText: 'img'
    },
    {
        title: 'Arepas',
        subtitle: '',
        img: 'https://www.recetasderechupete.com/wp-content/uploads/2019/11/Tipos-de-arepa-2.jpg',
        link: '',
        imgText: 'img'
    },
    {
        title: 'Pabellón Criollo',
        subtitle: '',
        img: 'https://www.goya.com/media/4098/venezuelan-shredded-beef.jpg?quality=80',
        link: '',
        imgText: 'img'
    },
    {
        title: 'Empanadas',
        subtitle: '',
        img: 'https://i.pinimg.com/originals/60/ae/15/60ae15608687f3e2489c5de3f5b31a4f.jpg',
        link: '',
        imgText: 'img'
    },
    {
        title: 'Tequeños',
        subtitle: '',
        img: 'https://aws.traveler.es/prod/designs/v1/assets/940x627/177017.jpg',
        link: '',
        imgText: 'img'
    }
];

const food = (agent) => {

    chatbaseMsg(agent);

    if (agent.requestSource === 'TELEGRAM') {
        if (agent.locale == 'es') {
            agent.add(foodMessageES1);
            agent.add(foodMessageES2);
            agent.add(foodMessageES3);
        } else {
            agent.add(foodMessage1);
            agent.add(foodMessage2);
            agent.add(foodMessage3);
        }
        card.forEach(item => {
            agent.add(new Card({
                title: item.title,
                imageUrl: item.img,
                text: item.subtitle,
            }));
        });
    } else {
        if (agent.locale == 'es') {
            agent.add(foodMessageES1);
            agent.add(foodMessageES2);
            agent.add(foodMessageES3);
        } else {
            agent.add(foodMessage1);
            agent.add(foodMessage2);
            agent.add(foodMessage3);
        }
        agent.add(cardMsg(card));
    }
    somethingElse(agent);
}

module.exports = { food }