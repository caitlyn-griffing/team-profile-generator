const Intern = require('../lib/Intern');

let newIntern = new Intern('barbie', 33333, 'barbie@girl.com', 'Barbie University');    
describe('Intern Methods', () => {    
    test('Get Name Method', () => {    
        expect(newIntern.getName()).toEqual('barbie');    
    })    
    test('Get Id Method', () => {       
        expect(newIntern.getId()).toEqual(33333);    
    })    
    test('Get Email Method', () => {    
        expect(newIntern.getEmail()).toEqual('barbie@girl.com');    
    })    
    test('Get School Method', () => {    
        expect(newIntern.getSchool()).toEqual('Barbie University');    
    })    
    test('Get Role Method', () => {    
        expect(newIntern.getRole()).toEqual('Intern');    
    })    
})