const Intern = require('../lib/Intern');

let newIntern = new Intern('spongebob', 22222, 'sponge@bob.com', 'spongebob5000');    
describe('Intern Methods', () => {    
    test('Get Name Method', () => {    
        expect(newIntern.getName()).toEqual('spongebob');    
    })    
    test('Get Id Method', () => {       
        expect(newIntern.getId()).toEqual(22222);    
    })    
    test('Get Email Method', () => {    
        expect(newIntern.getEmail()).toEqual('sponge@bob.com');    
    })    
    test('Get Git Method', () => {    
        expect(newIntern.getGitHub()).toEqual('spongebob5000');    
    })    
    test('Get Role Method', () => {    
        expect(newIntern.getRole()).toEqual('Intern');    
    })    
})