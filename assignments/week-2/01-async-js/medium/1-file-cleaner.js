const fs = require("fs");

async function readFileAsync() {
  // return new Promise((res, rej) => {
  //   fs.readFile("./file.txt", (err, data) => {
  //     if (err) {
  //       rej(err);
  //     } else {
  //       res(data.toString());
  //     }
  //   });
  // });
  try {
    const data = await fs.promises.readFile("./file.txt", "utf8");
    return data.trim();
  } catch (err) {
    throw err;
  }
}

async function fileCleaner() {
  // await readFileAsync().then((data) => {
  //   const string = data.trim();
  //   const arr = string.split(" ");
  //   const arr2 = arr.filter((item) => item.trim());
  //   const cleanString = arr2.join(" ");
  //   console.log(cleanString);
  // });
  try {
    const fileContent = await readFileAsync();
    const wordsArray = fileContent.split(/\s+/).filter(Boolean);
    const cleanString = wordsArray.join(" ");
    console.log(cleanString);
  } catch (err) {
    console.error(err);
  }
}
fileCleaner();
