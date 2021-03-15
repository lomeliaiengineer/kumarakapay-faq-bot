const chai = require('chai');
const { Payload } = require('dialogflow-fulfillment');

const { chipMsg } = require('../src/webhook/dialogflow/richResponses/chipMsg');

const expect = chai.expect;
const chipItems = [
    {
        text: 'Hotels',
        logo: '',
        link: ''
    },
];
const response = chipMsg(chipItems);

describe('chipMsg Function', () => {
    it('should return an payload object', () => {
        expect(response).to.be.an('object');
        expect(response).to.be.an.instanceOf(Payload);
    });
    it('should return a rich content array', () => {
        const expectedResponse = [
            {
                type: 'chips',
                options: [{
                    text: chipItems[0].text,
                    image: {
                        src: {
                            rawUrl: chipItems[0].logo
                        }
                    },
                    link: chipItems[0].link
                }]
            }
        ];

        expect(response.payload.richContent[0]).to.eql(expectedResponse);
    });
});
