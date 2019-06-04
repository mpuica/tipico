//Tipico.js - main module

const Tipico = ({

    cellCorner: '+',
    cellHLine: '-',
    cellVLine: '|',
    cellMaxWidth: 0,

    /**
     * get the maximum number of digits in the array of numbers
     * @param {array} nums The array of numbers to be written in the table
     *
     */
    getCellMaxWidth: function (nums) {
        return Math.max(...nums).toString().length
    },

    /**
     * Main function to be called in app.js
     * @param {array} nums The array of numbers to be written in the table
     * @param {int} cols The number of cells per row
     *
     */
    displayNumbers: function (nums, cols) {
        this.cellMaxWidth = this.getCellMaxWidth(nums)
    }
})

module.exports = Tipico