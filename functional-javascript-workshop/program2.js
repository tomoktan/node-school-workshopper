'use strict';
function repeat(operation, num) {
  for (let i = 0; i < num; i++) {
    operation();
  }
  // 再帰な書き方
  // if (num === 0) return;
  // operation();
  // return repeat(operation, --num);
}

module.exports = repeat;
