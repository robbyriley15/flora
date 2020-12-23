const Cabin = require('cabin');
const fetch = require('node-fetch')
const { workerData } = require('worker_threads');
const logger = new Cabin();
const arduinoAddress = 'http://192.168.1.22'
const lightOn = '/L'

if (workerData.job) {
    logger.info('got teh data')
    logger.info(workerData.job.worker.options.workerData.test)
    logger.info(' break')
} else {
    logger.info('fuck')
}
// fetch(`${arduinoAddress}${lightOn}`)