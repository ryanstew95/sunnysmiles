const express = require("express");
const app = express();
const PORT = 4888;

// Middleware for parsing JSON
app.use(express.json());

app.use(express.static("public"));

// Sample route
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Menu route
app.get("/menu", (req, res) => {
  res.send("This is the Menu.");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
