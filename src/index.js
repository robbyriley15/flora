const path = require('path');

const Graceful = require('@ladjs/graceful');
const Cabin = require('cabin');
const Bree = require('bree');

const bree = new Bree({
 
    logger: new Cabin(),
    outputWorkerMetadata: true,
    jobs: [
      {
        name: 'lights-on',
        worker: { options: { workerData: { test: 'penis' }}},
        outputWorkerMetadata: true,

        // interval: 'at 6:00 am'
      },
      // {
      //   name: 'lights-off',
      //   interval: 'at 10:00 pm'
      // },
      // {
      //   name: 'pump-on',
      //   timeout: false,
      //   interval: '15 * * * *'
      // },
      // {
      //   name: 'pump-off',
      //   timeout: false,
      //   interval: '30 * * * *'
      // }
    ],
    });
  
  // handle graceful reloads, pm2 support, and events like SIGHUP, SIGINT, etc.
  const graceful = new Graceful({ brees: [bree] });
  graceful.listen();
  
  // start all jobs (this is the equivalent of reloading a crontab):
  bree.start();