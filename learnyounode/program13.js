const url = require('url');
const http = require('http');
const map = require('through2-map');
const moment = require('moment');

const date1 = new Date('2016-01-01T00:00:00Z');
const date2 = new Date('2016/01/01 00:00:00');

console.log(date1.getDate());
console.log(date2.getDate());


const server = http.createServer((request, response) => {
  const iso = moment(url.parse(request.url, true).query.iso);

  response.writeHead(200, { 'Content-Type': 'application/json' });
  if (request.url.match(/\/api\/parsetime/)) {
    response.end(
      JSON.stringify(parseTime(iso))
    );
  }
  else if (request.url.match(/\/api\/unixtime/)) {
    response.end(
      JSON.stringify(getUnixTime(iso))
    );
  }
});

function parseTime(iso) {
  return {
    hour: iso.hours(),
    minute: iso.minutes(),
    second: iso.seconds()
  };
}

function getUnixTime(iso) {
  return {
    unixtime: iso.valueOf()
  };
}

server.listen(+process.argv[2]);
