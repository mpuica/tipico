//Tipico.js test file

const Tipico = require('../../../app/modules/Tipico.js')
const displayNumbers = require('../../../app/modules/Tipico').displayNumbers
const getCellMaxWidth = require('../../../app/modules/Tipico').getCellMaxWidth
const writeSeparatorLine = require('../../../app/modules/Tipico').writeSeparatorLine
const chunkArray = require('../../../app/modules/Tipico').chunkArray
const writeValuesLine = require('../../../app/modules/Tipico').writeValuesLine

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

    describe('chunkArray', () => {
        test('should exist', () => {
            expect(chunkArray).toBeDefined()
        })

        test('should be a function', () => {
            expect(typeof chunkArray).toBe("function")
        })

    })

    describe('writeValuesLine', () => {
        test('should exist', () => {
            expect(writeValuesLine).toBeDefined()
        })

        test('should be a function', () => {
            expect(typeof writeValuesLine).toBe("function")
        })

    })
})

try {
    module.exports = Tipico
    module.exports.displayNumbers = displayNumbers
    module.exports.getCellMaxWidth = getCellMaxWidth
    module.exports.writeSeparatorLine = writeSeparatorLine
    module.exports.chunkArray = chunkArray
    module.exports.writeValuesLine = writeValuesLine
} catch (error) {
    console.log('we caught an error')
}
