const nNumber = 555;
console.log('nNumber', nNumber, typeof nNumber);

const sString = 'String';
console.log('sString', sString, typeof sString);

const bBoolean = true;
console.log('bBolean', bBoolean, typeof bBoolean);

const nNull = null;
console.log('nNull', nNull, typeof nNull);

const biBigInt = 1000n;
console.log('biBigInt', biBigInt, typeof biBigInt);

const oObject = {
    value1: 'Val1',
    fieldId: 1n,
}
console.log('oObject', oObject, typeof oObject);

const id = Symbol('id');
console.log('id', id , typeof id);

let uUndefined;
console.log('uUndefined', uUndefined, typeof uUndefined);