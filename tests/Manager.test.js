// const { expect } = require('@jest/globals');
// const { describe } = require('yargs');
const Manager = require('../lib/Manager');

let newManager = new Manager('Karen', 44444, 'karen@managersBFF.com', '1-800-382-5633');
describe('Manager Methods', () => {
    test('Get Name Method', () => {
        expect(newManager.getName()).toEqual('Karen');
    })
    test('Get Id Method', () => {
        expect(newManager.getId()).toEqual(44444);
    })
    test('Get Email Method', () => {
        expect(newManager.getEmail()).toEqual('karen@managersBFF.com');
    })
    test('Get Office Method', () => {
        expect(newManager.getOfficeNumber()).toEqual('1-800-382-5633');
    })
})