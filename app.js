import "dotenv/config";
import express from "express";
import { Queue } from "bullmq";
import { redisConfig, config } from "./config.js";
import morgan from "morgan";
import helmet from "helmet";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
process.env.NODE_ENV === "development" ? app.use(morgan("dev")) : app.use(morgan("combined"));
app.use(helmet());


app.get("/", (req, res) => {
    res.send("API is running at http://localhost:3000");
})


app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});