const chai = require('chai');
const { somethingElse } = require('../src/webhook/dialogflow/richResponses/somethingElseMsg');

const expect = chai.expect;
const agent = {
    add: function() {}
}
const response = somethingElse(agent);

describe('somethingElseMsg Function', () => {
    it('should have a agent param', () => {
        expect(agent.add).to.be.a('function');
    });
})