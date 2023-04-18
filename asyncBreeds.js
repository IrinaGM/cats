const fs = require("fs");

const breedDetailsFromFile = (breed, done) => {
  console.log("breedDetailsFromFile: Calling readFile...");
  fs.readFile(`./data/${breed}.txt`, "utf8", (error, data) => {
    console.log("In readFile's Callback: it has the data.");
    if (!error) done(data);
  });
};

const printCatBreed = (breed) => {
  console.log("Return Value: ", breed);
};

breedDetailsFromFile("Bombay", printCatBreed);
