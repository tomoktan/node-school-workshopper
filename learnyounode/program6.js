const program6Module = require('./program6.module');

program6Module(process.argv[2], process.argv[3], (err, result) => {
  if (err) throw err;
  console.log(result.join('\n'));
});
