const fs = require('fs');
const path = require('path');

fs.readdir(process.argv[2], (err, files) => {
  if (err) throw err;
  var result = files.filter(file => {
    if ('.' + process.argv[3] === path.extname(file)) return file;
  });
  console.log(result.join('\n'));
});
