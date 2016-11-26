const net = require('net')  
const server = net.createServer(socket => {  
  const now = new Date();
  socket
    .end(
      now.getFullYear() + '-' + 
      ('0' + (now.getMonth() + 1)).slice(-2) + '-' +
      ('0' + now.getDate()).slice(-2) + ' ' +
      ('0' + now.getHours()).slice(-2) + ':' +
      ('0' + now.getMinutes()).slice(-2) + '\n'
    );
});  
server.listen(+process.argv[2]);
