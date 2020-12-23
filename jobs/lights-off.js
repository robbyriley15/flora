const Cabin = require('cabin');
const fetch = require('node-fetch')

const logger = new Cabin();
const arduinoAddress = 'http://192.168.1.22'
const lightOff = '/H'

fetch(`${arduinoAddress}${lightOff}`)