const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 3000;

// Folder where files will be created
const folderPath = path.join(__dirname, "files");

// Ensure the folder exists
if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath);
}

// API to create a new file
app.get("/create-file", (req, res) => {
  const currentDate = new Date();
  const timestamp = currentDate.toISOString(); // Content of the file (timestamp)

  // Format the filename: YYYY-MM-DD_HH-MM-SS.txt
  const formattedDate = currentDate
      .toISOString()
      .replace(/T/, "_")   // Replace 'T' with '_'
      .replace(/:/g, "-")  // Replace ':' with '-'
      .split(".")[0];      // Remove milliseconds
  const fileName = `${formattedDate}.txt`;

  const filePath = path.join(folderPath, fileName);

  // Write the current timestamp to the file
  fs.writeFile(filePath, timestamp, (err) => {
      if (err) {
          console.error(err);
          return res.status(500).send("Error creating file");
      }
      res.send(`File created: ${fileName}`);
  });
});


// API to list all text files
app.get("/list-files", (req, res) => {
    fs.readdir(folderPath, (err, files) => {
        if (err) {
            console.error(err);
            return res.status(500).send("Error reading folder");
        }

        const textFiles = files.filter(file => path.extname(file) === ".txt");
        res.json(textFiles);
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
