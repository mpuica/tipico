//Tipico.js test file

const Tipico = require('../../../app/modules/Tipico.js')
const displayNumbers = require('../../../app/modules/Tipico').displayNumbers

describe('Tipico', () => {
    test('should exist', () => {
        expect(Tipico).toBeDefined()
    })
    describe('displayNumbers', () => {
        test('should exist', () => {
            expect(displayNumbers).toBeDefined()
        })

        test('should be a function', () => {
            expect(typeof displayNumbers).toBe("function")
        })
    })
})

try {
    module.exports = Tipico;
    module.exports.displayNumbers = displayNumbers;
} catch (error) {
    console.log('we caught an error');
}
