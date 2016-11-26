const fs = require('fs');
const path = require('path');

module.exports = (dir, extension, callback) => {
  fs.readdir(dir, (err, files) => {
    if (err) return callback(err);
    const result = files.filter(file => {
      if ('.' + extension === path.extname(file)) return file;
    });
    callback(null, result);
  });
};
