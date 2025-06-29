import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { testDatabaseConnection } from "./db";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Territory.io backend is running 🚀");
});

// Initialize the server and test database connection
async function startServer() {
  try {
    // Test database connection before starting server
    const dbConnected = await testDatabaseConnection();
    if (!dbConnected) {
      console.error("Failed to connect to database. Check your database configuration.");
      process.exit(1);
    }
    
    // Start the server if database connection is successful
    app.listen(4000, () => {
      console.log("Server running on http://localhost:4000");
    });
  } catch (error) {
    console.error("Error starting server:", error);
    process.exit(1);
  }
}

// Start the server
startServer();
