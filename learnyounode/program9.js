const http = require('http');

let result = [];
let i = 2;
async(2, () => {
  for (let value of result) {
    console.log(value);
  }
});

function async (i, callback) {
  http.get(process.argv[i], response => {
    let datas = [];
    response
      .setEncoding('utf8')
      .on('data', data => datas.push(data))
      .on('end', () => {
        if (i === process.argv.length) return callback();
        result.push(datas.join(''));
        return async(i + 1, callback);
      })
      .on('error', error => callback(error));
  })
  .on('error', error => callback(error));
}
