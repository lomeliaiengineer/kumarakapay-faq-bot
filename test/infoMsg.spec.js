const chai = require('chai');
const { Payload } = require('dialogflow-fulfillment');

const { infoMsg } = require('../src/webhook/dialogflow/richResponses/infoMsg');

const expect = chai.expect;
const infoItems = [
    {
        title: 'info',
        subtitle: 'info',
        img: 'info',
        link: 'info',
    },
];
const response = infoMsg(infoItems);

describe('infoMsg Function', () => {
    it('should return an payload object', () => {
        expect(response).to.be.an('object');
        expect(response).to.be.an.instanceOf(Payload);
    });
    it('should return a rich content array', () => {
        const expectedResponse = [
            {
                type: 'info',
                title: infoItems[0].title,
                subtitle: infoItems[0].subtitle,
                image: {
                    src: {
                        rawUrl: infoItems[0].img
                    }
                },
                actionLink: infoItems[0].link
            }
        ];

        expect(response.payload.richContent[0]).to.eql(expectedResponse);
    });
});
