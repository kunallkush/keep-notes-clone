const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
const port = 3001;

// Create MySQL connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "keep_notes",
});

// Connect to MySQL
db.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL:", err);
    return;
  }
  console.log("Connected to MySQL");
});

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Routes
app.get("/api/notes", (req, res) => {
  const sql = "SELECT * FROM notes";
  db.query(sql, (err, result) => {
    if (err) {
      console.error("Error fetching notes:", err);
      res.status(500).json({ error: "Internal Server Error" });
      return;
    }
    res.json(result);
  });
});

app.post("/api/notes", (req, res) => {
  const { note } = req.body;
  const created_time = new Date().toISOString().slice(0, 19).replace("T", " ");
  const sql = "INSERT INTO notes (note, created_time) VALUES (?, ?)";
  db.query(sql, [note, created_time], (err, result) => {
    if (err) {
      console.error("Error adding note:", err);
      res.status(500).json({ error: "Internal Server Error" });
      return;
    }
    res.sendStatus(200);
  });
});
app.delete("/api/notes/:id", (req, res) => {
  const { id } = req.params;
  const sql = "DELETE FROM notes WHERE id = ?";
  db.query(sql, [id], (err, result) => {
    if (err) {
      console.error("Error deleting note:", err);
      res.status(500).json({ error: "Internal Server Error" });
      return;
    }
    res.sendStatus(200);
  });
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
