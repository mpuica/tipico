//Tipico.js - main module

const Tipico = ({

    cellCorner: '+',
    cellHLine: '-',
    cellVLine: '|',
    cellMaxWidth: 0,
    chunkNums: [],

    /**
     * get the maximum number of digits in the array of numbers
     * @param {array} nums The array of numbers to be written in the table
     *
     */
    getCellMaxWidth: function (nums) {
        return Math.max(...nums).toString().length
    },

    /**
     * write the horizontal separation line based on the number of cells and the width of a cell
     * @param {int} cols The number of cells per line
     * @param {int} cellWidth The number of digits in each cell
     *
     */
    writeSeparatorLine: function (cols, cellWidth) {
        return  this.cellCorner + (this.cellHLine.repeat(cellWidth) + this.cellCorner).repeat(cols)
    },

    /**
     * split an existing array into smaller arrays
     * @param {array} array The source array
     * @param {int} size The size of each chunk
     * @returns {array}
     */
    chunkArray: function (array, size) {
        let chunk = []
        let i = 0
        while (i < array.length) {
            chunk.push(array.slice(i, size + i))
            i += size
        }
        return chunk
    },

    /**
     * Main function to be called in app.js
     * @param {array} nums The array of numbers to be written in the table
     * @param {int} cols The number of cells per row
     *
     */
    displayNumbers: function (nums, cols) {
        this.chunkNums = this.chunkArray(nums, cols)
        this.cellMaxWidth = this.getCellMaxWidth(nums)
    }
})

module.exports = Tipico