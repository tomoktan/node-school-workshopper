process.stdin
  .pipe(require('through2')(function (buffer, encoding, next) {
    this.push(buffer.toString().toUpperCase());
    next();
  }))
  .pipe(process.stdout);
