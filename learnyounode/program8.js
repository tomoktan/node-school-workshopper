const http = require('http');

http.get(process.argv[2], response => {
  let result = [];
  response.setEncoding('utf8');
  response
    .on('data', data => result.push(data))
    .on('end', () => {
      console.log(result.join('').length);
      console.log(result.join(''));  
    })
    .on('error', console.error);
})
.on('error', console.error);
