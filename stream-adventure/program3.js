process.stdin
  .setEncoding('utf8')
  .on('data', chunk => process.stdout.write(chunk));
