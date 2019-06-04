// app.js - main entry script

const Tipico = require('./app/modules/Tipico')

let numbers = [23, 11, 295, 71, 24, 67 , 4, 3 , 11, 10, 78, 129, 1000000000]
let columns = 4

/* @TODO: accept argunets in CLI  */
Tipico.displayNumbers(numbers, columns)
