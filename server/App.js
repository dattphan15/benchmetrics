const express = require("express");
const multer = require('multer');
const fs =  require('fs');
const csv = require('fast-csv')
// load .env data into process.env
require('dotenv').config();
const path = require("path");
const PORT = process.env.PORT || 3001;
const ENV        = process.env.ENV || "development";

const app = express();

const db = require("./db");

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
      cb(null, 'uploads');
  },
  filename: function (req, file, cb) {
      cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`);
  }
});
var upload = multer({ storage: storage });

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, '../client/build')));

// Handle GET requests to /api route
app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});


// POST request to /upload route for reading csv files
app.post("/upload",upload.single('data-file'), (req, res) => {

  csvRead(req.file.filename)
  res.json({ message: "Hello from server!" });
});

const csvRead = (path) =>{
 
  let csvdata = [];
  let filepath  = './uploads/'+path;
  let filestream = fs.createReadStream(filepath);

  let csvStream = csv.parse().on('data',(data)=>{
      
      csvdata.push(data);
  }).on('end',()=>{
    console.log(csvdata);
    fs.unlinkSync(filepath)
  })
  filestream.pipe(csvStream);
}

// All other GET requests not handled before will return our React app
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});