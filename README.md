# Video Compression Demo with BullMQ

## Overview
This repository demonstrates a simple video‑compression workflow using **BullMQ** for job queuing, an **Express** API for submitting jobs, and a **worker** that simulates the compression process.

## Prerequisites
- Node.js (v18 or later)
- Redis server running on the default port (6379)
- pnpm (or npm) for package management

## Installation
```bash
# Clone the repository
git clone https://github.com/ansarulSohan/video-compression.git
cd video-compression

# Install dependencies
pnpm install   # or `npm install`
```

## Configuration
Create a `.env` file at the project root if you need to override defaults:
```
PORT=3000
REDIS_HOST=127.0.0.1
REDIS_PORT=6379
```
The default configuration is defined in `config.js`.

## Available Scripts
| Script | Description |
|--------|-------------|
| `npm start` | Starts the Express API (`app.js`). |
| `npm run worker` | Starts the BullMQ worker (`worker.js`). |
| `npm run queue` | Runs a simple script that adds example jobs to the queue. |
| `npm run dev` | Runs both the API and the worker concurrently (requires `concurrently`). |

## API Endpoints
- **POST** `/transcode`
  - Body: `{ "fileName": "myvideo.mp4" }`
  - Returns the job ID and a confirmation message.
- **GET** `/status/:id`
  - Returns the current state (`waiting`, `active`, `completed`, `failed`), progress percentage, and result if completed.
- **GET** `/`
  - Simple health‑check that returns a plain text message.

## Worker
The worker (`worker.js`) listens on the queue defined in `config.js`. For each job it:
1. Logs the start of processing.
2. Simulates work with a short delay (`sleep`).
3. Updates job progress every 20%.
4. Returns a mock result containing the name of the “compressed” file.

## Adding Jobs Manually
You can add jobs without using the API by running:
```bash
npm run queue
```
This script adds two example jobs (`movie1.mp4` and `movie2.mp4`).

## Running the Demo
# Video Compression Demo with BullMQ

## Overview
This repository demonstrates a simple video‑compression workflow using **BullMQ** for job queuing, an **Express** API for submitting jobs, and a **worker** that simulates the compression process.

## Prerequisites
- Node.js (v18 or later)
- Redis server running on the default port (6379)
- pnpm (or npm) for package management

## Installation
```bash
# Clone the repository
git clone https://github.com/ansarulSohan/video-compression.git
cd video-compression

# Install dependencies
pnpm install   # or `npm install`
```

## Configuration
Create a `.env` file at the project root if you need to override defaults:
```
PORT=3000
REDIS_HOST=127.0.0.1
REDIS_PORT=6379
```
The default configuration is defined in `config.js`.

## Available Scripts
| Script | Description |
|--------|-------------|
| `npm start` | Starts the Express API (`app.js`). |
| `npm run worker` | Starts the BullMQ worker (`worker.js`). |
| `npm run queue` | Runs a simple script that adds example jobs to the queue. |
| `npm run dev` | Runs both the API and the worker concurrently (requires `concurrently`). |

## API Endpoints
- **POST** `/transcode`
  - Body: `{ "fileName": "myvideo.mp4" }`
  - Returns the job ID and a confirmation message.
- **GET** `/status/:id`
  - Returns the current state (`waiting`, `active`, `completed`, `failed`), progress percentage, and result if completed.
- **GET** `/`
  - Simple health‑check that returns a plain text message.

## Worker
The worker (`worker.js`) listens on the queue defined in `config.js`. For each job it:
1. Logs the start of processing.
2. Simulates work with a short delay (`sleep`).
3. Updates job progress every 20%.
4. Returns a mock result containing the name of the “compressed” file.

## Adding Jobs Manually
You can add jobs without using the API by running:
```bash
npm run queue
```
This script adds two example jobs (`movie1.mp4` and `movie2.mp4`).

## Running the Demo
1. Start Redis.
2. In one terminal, run `npm run worker`.
3. In another terminal, run `npm start`.
4. Use a tool like `curl` or Postman to POST a job to `/transcode` and then poll `/status/:id`.

## Contributing

We welcome contributions! Please follow these guidelines:

### Fork & Branch
1. Fork the repository.
2. Create a new branch for your work, preferring the `feature/<name>` or `bugfix/<name>` naming convention.
3. Keep your branch up to date with `master` (or `main`) by regularly pulling the latest changes.

### Commit Messages
- Write clear, concise commit messages.
- Use the conventional commit format: `type(scope): description` (e.g., `feat(queue): add batch job endpoint`).

### Pull Request Process
1. Push your branch to your fork.
2. Open a Pull Request against the `master` (or `main`) branch.
3. Provide a descriptive title and summary of changes.
4. Ensure all tests pass and the code follows the existing style.
5. Request a review; once approved, the PR will be merged.

### Code Style
- Use ESLint and Prettier configurations already set up in the project.
- Add or update tests for new functionality.

## License

This project is licensed under the ISC License.
