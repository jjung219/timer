const times = process.argv.slice(2);

for (const time of times) {
  if (time >= 0 && Number.isInteger(Number(time))) {

    setTimeout(() => {
      process.stdout.write('beep ');
    }, Number(time) * 100)
  }

}

