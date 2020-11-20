const { expect } = require("@jest/globals");

const testFunctions = require('../getChange.js');

test('American coins - $0.25', () => {
    let expectedResult = {
        '25': 1
    };
    expect(testFunctions.getChange(25,[25,10,5,1])).toEqual(expectedResult);
});

test('American coins - $0.41', () => {
    let expectedResult = {
        '25': 1,
        '10': 1,
        '5': 1,
        '1': 1
    };
    expect(testFunctions.getChange(41,[25,10,5,1])).toEqual(expectedResult);
});

test('Euro coins - $0.25', () => {
    let expectedResult = {
        '20': 1,
        '5': 1
    };
    expect(testFunctions.getChange(25,[200,100,50,20,10,5,2,1])).toEqual(expectedResult);
});

test('Euro coins - $3.86', () => {
    let expectedResult = {
        '200': 1,
        '100': 1,
        '50': 1,
        '20': 1,
        '10': 1,
        '5': 1,
        '1': 1
    };
    expect(testFunctions.getChange(386,[200,100,50,20,10,5,2,1])).toEqual(expectedResult);
});

test('Euro coins - $0.00', () => {
    let expectedResult = {};
    expect(testFunctions.getChange(0,[200,100,50,20,10,5,2,1])).toEqual(expectedResult);
});