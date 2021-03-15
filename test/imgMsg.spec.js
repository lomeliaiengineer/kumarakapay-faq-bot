const chai = require('chai');
const { Payload } = require('dialogflow-fulfillment');

const { imgMsg } = require('../src/webhook/dialogflow/richResponses/imgMsg');

const expect = chai.expect;
const imgItems = [
    {
        text: 'About Venezuela',
        img: 'link'
    }
];
const response = imgMsg(imgItems);

describe('imgMsg Function', () => {
    it('should return an payload object', () => {
        expect(response).to.be.an('object');
        expect(response).to.be.an.instanceOf(Payload);
    });
    it('should return a rich content array', () => {
        const expectedResponse = [
            {
                type: "image",
                rawUrl: imgItems[0].img,
                accessibilityText: imgItems[0].text
            }
        ];

        expect(response.payload.richContent[0]).to.eql(expectedResponse);
    });
});

