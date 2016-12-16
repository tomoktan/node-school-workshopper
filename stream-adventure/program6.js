process.stdin.pipe(require('concat-stream')(buffer => process.stdout.write(buffer.toString().split('').reverse().join(''))));
