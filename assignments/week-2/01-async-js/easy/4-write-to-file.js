const fs = require("fs");
function writeFileAsync(data = " something\n") {
  return new Promise((res, rej) => {
    fs.appendFile("./file.txt", data, (err) => {
      if (err) {
        rej(err);
      } else {
        res("data added successfully");
      }
    });
  });
}

async function readFileAsync() {
  //   fs.readFile("./file.txt", (err, data) => {
  //     console.log(data.toString());
  //   });

  try {
    const data = await fs.promises.readFile("./file.txt");
    console.log(data.toString());
  } catch (err) {
    console.error(err);
  }
}
async function main(dataToAdd) {
  //   await writeFileAsync(dataToAdd).then(readFileAsync);

  try {
    await writeFileAsync(dataToAdd);
    await readFileAsync();
  } catch (err) {
    console.error(err);
  }
}
// main(" Chaudhary Sahab is here");
main();
