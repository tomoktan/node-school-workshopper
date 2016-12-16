let count = 0;
process.stdin
  .pipe(require('split')())
  .pipe(require('through2')(function (buffer, encoding, next) {
    if (++count % 2 === 0) this.push(buffer.toString().toUpperCase() + '\n');
    else this.push(buffer.toString().toLowerCase() + '\n');
    next();
  }))
  .pipe(process.stdout);
