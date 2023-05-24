import express from "express";
import morgan from "morgan";
import cors from "cors";
import "dotenv/config.js";
import { dbConnection } from "./config/mongo.js";
import router from "./routes/userRoutes.js";
import tweetRouter from "./routes/tweetRoutes.js";
import commentRouter from "./routes/commentRoutes.js";
import path from "path";


// Routers

// Init express app
const app = express();

// Enable CORS
app.use(cors());

// Enable incoming JSON data
app.use(express.json());

// Enable incoming Form-Data
app.use(express.urlencoded({ extended: true }));

if (process.env.NODE_ENV === "development") app.use(morgan("dev"));
else app.use(morgan("combined"));

//Connection to DB
dbConnection().catch((error) => {
    console.error("Error connecting to MongoDB:", error);
});

const publicPath = path.resolve();
app.use(express.static(path.join(publicPath, "public")));

app.use("/api", router);
app.use("/api", tweetRouter);
app.use("/api", commentRouter);


// Endpoints
app.get("/", (req, res) => {
    res.status(200).json({ message: "Welcome to the whatsapp API" });
});
app.listen(process.env.PORT, () => {
    console.log(`Port has started in port ${process.env.PORT}`);
});


export default app

