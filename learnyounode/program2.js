let result = 0;

for (let i in process.argv) {
  if (i < 2) continue;
  result = result + Number(process.argv[i]);
}

console.log(result);
