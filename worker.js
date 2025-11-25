import { Worker } from "bullmq";
import { redisConfig, QUEUE_NAME } from "./config.js";

const sleep = (t) => new Promise((resolve) => setTimeout(resolve, t * 1000));

const worker = new Worker(
    QUEUE_NAME,
    async (job) => {
        console.log(`[Worker] Processing job ${job.id}: ${job.data.fileName}`);


        // Simulate video compression steps
        for (let i = 0; i <= 100; i += 20) {
            await sleep(1); // Simulate work
            await job.updateProgress(i);
            console.log(`[Worker] Job ${job.id} progress: ${i}%`);
        }

        console.log(`[Worker] Job ${job.id} completed!`);
        return { compressedFile: `compressed_${job.data.fileName}` };
    },
    redisConfig
);

worker.on("completed", (job) => {
    console.log(`[Worker] Job ${job.id} has completed!`);
});

worker.on("failed", (job, err) => {
    console.error(`[Worker] Job ${job.id} has failed with ${err.message}`);
});

console.log("[Worker] Worker started, listening for jobs...");
