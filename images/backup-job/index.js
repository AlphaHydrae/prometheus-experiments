const chance = require('chance').Chance();
const cron = require('node-cron');
const request = require('request');

cron.schedule('*/5 * * * * *', function(){

  const time = chance.floating({
    min: 1,
    max: 60
  });

  const size = chance.integer({
    min: 1000000,
    max: 5000000
  });

  console.log('Backup took ' + time + 's and takes ' + size + ' bytes');

  request({
    method: 'POST',
    url: 'http://prometheus_push_gateway:9091/metrics/job/vagrant-backup/instance/vagrant-vm',
    body: `
backup_size_bytes ${size}
backup_time_seconds ${time}
    `
  }, function(err, res) {
    if (err) {
      console.warn('Could not publish metrics to Prometheus at ' + (new Date()));
    } else {
      console.log('Successfully published metrics to Prometheus at ' + (new Date()));
      console.log(res.statusCode);
    }
  });
});
