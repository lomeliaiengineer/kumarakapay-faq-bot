const chai = require('chai');
const { Payload } = require('dialogflow-fulfillment');

const { listMsg } = require('../src/webhook/dialogflow/richResponses/listMsg');

const expect = chai.expect;
const listItems = [
    {
        title: 'list',
        subtitle: 'list',
        event: 'list'
    },
];
const response = listMsg(listItems);

describe('listMsg Function', () => {
    it('should return an payload object', () => {
        expect(response).to.be.an('object');
        expect(response).to.be.an.instanceOf(Payload);
    });
    it('should return a rich content array', () => {
        const expectedResponse = [
            {
                type: 'list',
                title: listItems[0].title,
                subtitle: listItems[0].subtitle,
                event: {
                    name: listItems[0].event,
                    languageCode: '',
                    parameters: {}
                }
            }
        ];

        expect(response.payload.richContent[0]).to.eql(expectedResponse);
    });
});
