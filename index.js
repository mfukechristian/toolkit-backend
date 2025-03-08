import express from "express";
import dotenv from "dotenv";
dotenv.config();
import connectDB from "./config/dbConfig.js";
import sourceRoutes from "./routes/sourceRoute.js";

connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.get("/", (req, res) => {
  res.send("API is running...");
});

app.use("/api/sources", sourceRoutes);

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
