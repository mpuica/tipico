//Tipico.js test file

const Tipico = require('../../../app/modules/Tipico.js')
const displayNumbers = require('../../../app/modules/Tipico').displayNumbers
const getCellMaxWidth = require('../../../app/modules/Tipico').getCellMaxWidth
const writeSeparatorLine = require('../../../app/modules/Tipico').writeSeparatorLine

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

    describe('getCellMaxWidth', () => {
        test('should exist', () => {
            expect(getCellMaxWidth).toBeDefined()
        })

        test('should be a function', () => {
            expect(typeof getCellMaxWidth).toBe("function")
        })

    })

    describe('writeSeparatorLine', () => {
        test('should exist', () => {
            expect(writeSeparatorLine).toBeDefined()
        })

        test('should be a function', () => {
            expect(typeof writeSeparatorLine).toBe("function")
        })

    })
})

try {
    module.exports = Tipico
    module.exports.displayNumbers = displayNumbers
    module.exports.getCellMaxWidth = getCellMaxWidth
    module.exports.writeSeparatorLine = writeSeparatorLine
} catch (error) {
    console.log('we caught an error')
}
