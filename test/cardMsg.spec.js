const chai = require('chai');
const { Payload } = require('dialogflow-fulfillment');

const { cardMsg } = require('../src/webhook/dialogflow/richResponses/cardMsg');

const expect = chai.expect;
const cardItems = [
    {
        title: 'Puerto Escondido Hostel',
        subtitle: 'Price: $ \n Cepe - Aragua - Venezuela',
        img: 'http://posadapuertoescondido.com/wp-content/uploads/2012/05/a.jpg',
        link: 'http://posadapuertoescondido.com/',
        imgText: 'img'
    }
];
const response = cardMsg(cardItems);

describe('CardMsg Function', () => {
    it('should return an payload object', () => {
        expect(response).to.be.an('object');
        expect(response).to.be.an.instanceOf(Payload);
    });
    it('should return a rich content array', () => {
        const expectedResponse = [
            {
                type: 'image',
                rawUrl: cardItems[0].img,
                accessibilityText: cardItems[0].imgText,
            },
            {
                type: 'info',
                title: cardItems[0].title,
                subtitle: cardItems[0].subtitle,
                actionLink: cardItems[0].link
            }
        ];

        expect(response.payload.richContent[0]).to.eql(expectedResponse);
    });
});
