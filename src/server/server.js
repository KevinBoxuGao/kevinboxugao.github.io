const path = require("path");
const express = require("express");
const app = express(),
  DIST_DIR = __dirname,
  HTML_FILE = path.join(DIST_DIR, "index.html");

//client get requests
app.use(express.static(DIST_DIR));
app.get("*", function (_, res) {
  res.sendFile(indexPath);
});

// Define port for app to listen on
const port = process.env.PORT || 3000;
// To make the server live
app.listen(port, () => {
  console.log(`App is live on port ${port}`);
});
