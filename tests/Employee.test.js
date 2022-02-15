// const { jest } = require('@jest/globals');
const Employee = require('../lib/Employee');


let newEmployee = new Employee('applebottom', 11111, 'apple@bottom.com');    

describe('Employee Methods', () => {    
    test('Get Name Method', () => { 
        expect(newEmployee.getName()).toEqual('applebottom'); 
    })    
    test('Get Id Method', () => { 
        expect(newEmployee.getId()).toEqual(11111); 
    })
    test('Get Email Method', () => { 
        expect(newEmployee.getEmail()).toEqual('apple@bottom.com'); 
    })
    test('Get Role Method', () => { 
        expect(newEmployee.getRole()).toEqual('Employee'); 
    })    
})