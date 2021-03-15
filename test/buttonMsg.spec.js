const chai = require('chai');
const { Payload } = require('dialogflow-fulfillment');

const { buttonMsg } = require('../src/webhook/dialogflow/richResponses/buttonMsg');

const expect = chai.expect;
const btnItems = [
    {
        text: 'About Venezuela',
        icon: 'arrow_right_alt',
        color: 'blue',
        link: 'link',
        event: 'about-ve',
    }
];
const response = buttonMsg(btnItems);

describe('ButtonMsg Function', () => {
    it('should return an payload object', () => {
        expect(response).to.be.an('object');
        expect(response).to.be.an.instanceOf(Payload);
    });
    it('should return a rich content array', () => {
        const expectedResponse = [
            {
                type: 'button',
                icon: {
                    type: btnItems[0].icon,
                    color: btnItems[0].color
                },
                text: btnItems[0].text,
                link: btnItems[0].link,
                event: {
                    name: btnItems[0].event,
                    languageCode: '',
                    parameters: {}
                }
            }
        ];

        expect(response.payload.richContent[0]).to.eql(expectedResponse);
    });
});

