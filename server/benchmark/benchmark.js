const apiBenchmark = require('api-benchmark');
const fs = require('fs');

const service = {
  server1: 'http://localhost:3001/api'
};

const routes = {
  cheklist: {
    method: 'get',
    route: '/checklist',
    headers: {
      'Accept': 'application/json'
    }
  },
  coin: {
    method: 'get',
    route: '/coin',
    headers: {
      'Accept': 'application/json'
    }
  },
  gambling: {
    method: 'get',
    route: '/gambling',
    headers: {
      'Accept': 'application/json'
    }
  },
  remider: {
    method: 'get',
    route: '/reminder',
    headers: {
      'Accept': 'application/json'
    }
  }
};

apiBenchmark.measure(service, routes, {
  debug: false,
  runMode: 'parallel',
  maxConcurrentRequests: 100,
  delay: 0,
  maxTime: 100000,
  minSamples: 100,
  stopOnError: false
}, (err, results) => {
  apiBenchmark.getHtml(results, (error, html) => {
    fs.writeFileSync('benchmark/benchmarks.html', html);
  });
});