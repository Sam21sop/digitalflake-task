import dotenv from "dotenv";
dotenv.config();

import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import userRoute from "./routes/userRoute.js";
import productRoute from "./routes/productRoute.js";
import errorHandler from "./middleWare/errorMiddleware.js";
import cookieParser from "cookie-parser";
import path from "path";
import connectToDB from "./database/db.js";



const app = express();

// Middlewares
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
// app.use(cors());
app.use(
  cors({
    origin: ["http://localhost:5173", "https://localhost:8080"],
    credentials: true,
  })
);

app.use("/uploads", express.static(path.resolve("backend", "uploads")));

// Routes Middleware
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
// app.use("/api/contactus", contactRoute);

// Routes
app.get("/", (req, res) => {
  res.send("Home Page");
});

// Error Middleware
app.use(errorHandler);
// Connect to DB and start server
const PORT = process.env.PORT || 5000;

// server running on specified port
app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
  connectToDB();
});
