import { Queue } from "bullmq";
import { redisConfig, QUEUE_NAME } from "./config.js";

const myQueue = new Queue(QUEUE_NAME, redisConfig);

async function addJobs() {
    console.log("Adding jobs to queue...");
    await myQueue.add("video-compression", { fileName: "movie1.mp4" });
    await myQueue.add("video-compression", { fileName: "movie2.mp4" });
    console.log("Jobs added!");
    process.exit(0);
}

await addJobs();