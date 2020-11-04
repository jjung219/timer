
process.stdin.setRawMode(true);
process.stdin.setEncoding('utf8');

process.stdin.on('data', (key) => {
  if (key === '\u0003') {
    process.stdout.write('Thanks for using me, ciao!\n')
    process.exit();
  }
  if (key === "b") {
    process.stdout.write('beep\n')
  }

  if (key >= 1 && key <= 9) {
    process.stdout.write(`setting timer for ${key} seconds\n`)
    setTimeout(() => {

      process.stdout.write('beep\n')
    }, key * 1000);
  }
})