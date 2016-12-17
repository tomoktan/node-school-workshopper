'use strict';
function countWords(input) {
  // reduceの意味ないよね...
  // let result = {};
  // input.reduce((previous, current) => {
  //   if (Object.keys(result).indexOf(current) != -1) result[current] = ++result[current];
  //   else result[current] = 1;
  // }, '');
  // return result;

  // よりいけてる解答
  return input.reduce((map, current) => {
    map[current] = ++map[current] || 1;
    return map;
  }, {});
}

module.exports = countWords;
