const { Card } = require('dialogflow-fulfillment');

const { somethingElse } = require('../richResponses/somethingElseMsg');
const { cardMsg } = require('../richResponses/cardMsg');

const card = [
    {
        title: 'Caracas',
        subtitle: 'Capital of Venezuela',
        img: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/33/fe/d4/caracas.jpg?w=1100&h=600&s=1',
        link: '',
        imgText: 'img'
    },
    {
        title: 'Angel Falls',
        subtitle: `World's highest uninterrupted waterfall`,
        img: 'https://www.portalmochilero.com/wp-content/uploads/2020/01/la-catarata-mas-alta-del-mundo-2-759x50-1.jpg',
        link: '',
        imgText: 'img'
    },
    {
        title: 'Choroní',
        subtitle: 'Coastal locality',
        img: 'https://i.pinimg.com/originals/a0/35/0c/a0350cc7806f14d6ee07333c522a676a.jpg',
        link: '',
        imgText: 'img'
    },
    {
        title: 'Roraima Trek',
        subtitle: 'Most popular trek of Venezuela',
        img: 'https://www.vuelaviajes.com/wp-content/2015/03/Monte-Roraima-Venezuela.jpg',
        link: '',
        imgText: 'img'
    },
    {
        title: 'Orinoco Delta',
        subtitle: 'Vast area of largely uninhabited tropical lowland grasslands',
        img: 'https://cf.bstatic.com/images/hotel/max1024x768/233/233617939.jpg',
        link: '',
        imgText: 'img'
    },
    {
        title: 'Los Roques Archipelago',
        subtitle: 'The area contains more than 300 islands and cays surrounding a 400-sq.-km lagoon',
        img: 'https://miviaje.com/wp-content/uploads/2016/04/shutterstock_355535438.jpg',
        link: '',
        imgText: 'img'
    },
    {
        title: 'Gran Sabana',
        subtitle: 'It’s distinguished by its numerous tepuis, massive flat-topped mountains that rise from grassy savanna and are often covered in mist',
        img: 'https://media-cdn.tripadvisor.com/media/photo-s/12/f7/f3/40/roraima-trek.jpg',
        link: '',
        imgText: 'img'
    },
    {
        title: 'Merida',
        subtitle: 'Experience the longest and highest cable car in the world',
        img: 'https://refrinox.com/wp-content/uploads/2019/04/henry-toro.jpg',
        link: '',
        imgText: 'img'
    },
    {
        title: 'Isla Margarita',
        subtitle: 'Popular holiday destination',
        img: 'https://media.istockphoto.com/photos/typical-fisherman-village-at-the-nort-coast-of-margarita-island-picture-id908849276?k=6&m=908849276&s=612x612&w=0&h=rUcUx1ALxpzSs8odiLB86n9da8k760pwS-7dh88w6rY=',
        link: '',
        imgText: 'img'
    },
    {
        title: 'Mochima National Park',
        subtitle: 'It’s known for abundant wildlife, including sea turtles and dolphins',
        img: 'https://imgs.globovision.com/KFqRZ-q962CoOlWDQYkMOjOidc4=/700x0/smart/06061809c38f471ba76d6e4f4a08ba6a',
        link: '',
        imgText: 'img'
    },
    {
        title: 'Medanos de Coro National Park',
        subtitle: 'Desert',
        img: 'https://i1.wp.com/www.elreporteglobal.com/wp-content/uploads/2018/09/Medanos-de-Coro-Venezuela.jpg?fit=633%2C428&ssl=1',
        link: '',
        imgText: 'img'
    }
];

const cardES = [
    {
        title: 'Caracas',
        subtitle: 'Capital de Venezuela',
        img: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/33/fe/d4/caracas.jpg?w=1100&h=600&s=1',
        link: '',
        imgText: 'img'
    },
    {
        title: 'Salto Angel',
        subtitle: `La cascada ininterrumpida más alta del mundo`,
        img: 'https://www.portalmochilero.com/wp-content/uploads/2020/01/la-catarata-mas-alta-del-mundo-2-759x50-1.jpg',
        link: '',
        imgText: 'img'
    },
    {
        title: 'Choroní',
        subtitle: 'Localidad costera',
        img: 'https://i.pinimg.com/originals/a0/35/0c/a0350cc7806f14d6ee07333c522a676a.jpg',
        link: '',
        imgText: 'img'
    },
    {
        title: 'Roraima',
        subtitle: 'El paseo más popular de Venezuela',
        img: 'https://www.vuelaviajes.com/wp-content/2015/03/Monte-Roraima-Venezuela.jpg',
        link: '',
        imgText: 'img'
    },
    {
        title: 'Orinoco Delta',
        subtitle: 'Amplia área de praderas de tierras bajas tropicales en gran parte deshabitadas',
        img: 'https://cf.bstatic.com/images/hotel/max1024x768/233/233617939.jpg',
        link: '',
        imgText: 'img'
    },
    {
        title: 'Los Roques Archipelago',
        subtitle: 'El área contiene más de 300 islas y cayos que rodean una laguna de 400 kilómetros cuadrados.',
        img: 'https://miviaje.com/wp-content/uploads/2016/04/shutterstock_355535438.jpg',
        link: '',
        imgText: 'img'
    },
    {
        title: 'Gran Sabana',
        subtitle: 'Se distingue por sus numerosos tepuyes, enormes montañas de cima plana que se elevan desde la sabana cubierta de hierba y a menudo están cubiertas de niebla.',
        img: 'https://media-cdn.tripadvisor.com/media/photo-s/12/f7/f3/40/roraima-trek.jpg',
        link: '',
        imgText: 'img'
    },
    {
        title: 'Mérida',
        subtitle: 'Experimente el teleférico más largo y más alto del mundo.',
        img: 'https://refrinox.com/wp-content/uploads/2019/04/henry-toro.jpg',
        link: '',
        imgText: 'img'
    },
    {
        title: 'Isla de Margarita',
        subtitle: 'Destino de vacaciones popular.',
        img: 'https://media.istockphoto.com/photos/typical-fisherman-village-at-the-nort-coast-of-margarita-island-picture-id908849276?k=6&m=908849276&s=612x612&w=0&h=rUcUx1ALxpzSs8odiLB86n9da8k760pwS-7dh88w6rY=',
        link: '',
        imgText: 'img'
    },
    {
        title: 'Parque Nacional Mochima',
        subtitle: 'Es conocido por su abundante vida salvaje, como tortugas marinas y delfines.',
        img: 'https://imgs.globovision.com/KFqRZ-q962CoOlWDQYkMOjOidc4=/700x0/smart/06061809c38f471ba76d6e4f4a08ba6a',
        link: '',
        imgText: 'img'
    },
    {
        title: 'Parque Nacional Médanos de Coro',
        subtitle: 'Desierto',
        img: 'https://i1.wp.com/www.elreporteglobal.com/wp-content/uploads/2018/09/Medanos-de-Coro-Venezuela.jpg?fit=633%2C428&ssl=1',
        link: '',
        imgText: 'img'
    }
];

const placesToVisit = (agent) => {
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

module.exports = { placesToVisit }