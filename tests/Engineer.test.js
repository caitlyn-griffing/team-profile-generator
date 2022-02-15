const Engineer = require('../lib/Engineer');

let newEngineer = new Engineer('spongebob', 22222, 'sponge@bob.com', 'spongebob5000');    
describe('Engineer Methods', () => {    
    test('Get Name Method', () => {    
        expect(newEngineer.getName()).toEqual('spongebob');    
    })    
    test('Get Id Method', () => {       
        expect(newEngineer.getId()).toEqual(22222);    
    })    
    test('Get Email Method', () => {    
        expect(newEngineer.getEmail()).toEqual('sponge@bob.com');    
    })    
    test('Get Git Method', () => {    
        expect(newEngineer.getGitHub()).toEqual('spongebob5000');    
    })    
    test('Get Role Method', () => {    
        expect(newEngineer.getRole()).toEqual('Engineer');    
    })    
})