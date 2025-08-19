import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import { MongoClient } from "mongodb";

// Load environment variables
dotenv.config();

// Initialize Express
const app = express();
const PORT = process.env.PORT || 5173;
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);
// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const dbName = "boilerplateProject";

async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log("Connected successfully to server");
  const db = client.db(dbName);
  const collection = db.collection("documents");

  // the following code examples can be pasted here...

  return "done.";
}

main().then(console.log).catch(console.error);
// Don't close the client here as we need the connection for the API
// Routes
app.get("/", (req, res) => {
  console.log("API is running...");
  res.send("API is running...");
});

app.get("/hello", (req, res) => {
  res.send("Hello World");
});

app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});
