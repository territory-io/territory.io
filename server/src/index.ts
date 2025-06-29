import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Territory.io backend is running 🚀");
});

app.listen(4000, () => {
  console.log("Server running on http://localhost:4000");
});

// Specify a port number for the server
const port = 5000;
// Start the server and listen to the port
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
