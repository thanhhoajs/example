
<p align="center">
  <img src="https://drive.google.com/uc?export=view&id=1_M5tYoaKfXpqsOAPQl3WVWs9u5NWrG76" alt="ThanhHoa Logo" width="300"/>
</p>

# ThanhHoa WebSocket Example

This example demonstrates setting up a WebSocket server using **ThanhHoaJS**. It includes a chat room feature with multiple rooms, allowing users to connect and chat in real time.

## Getting Started

### Installation

1. Clone the repository.
2. Install dependencies:

   ```bash
   bun install
   ```

### Run the Example

Start both the WebSocket server and the client in one command:

```bash
bun start
```

- **Server**: Runs on `ws://localhost:3000`.
- **Client**: Runs on `http://localhost:3001`. (You can visit this)

### Project Structure

```plaintext
src/
├── modules/
│   └── room/
│       ├── room.handler.ts       # WebSocket route handlers for chat room events
│       └── room.module.ts        # Room module registration with WebSocket
└── main.ts                       # Main server setup and configuration
```

## Example Code Overview

### 1. Room Handler

Defines how each WebSocket connection interacts within a chat room:

### 2. Room Module

Sets up the WebSocket routes for each chat room:

### 3. Main WebSocket Server Setup

The main server setup, handling connections and logging events:

## Author

Nguyen Nhu Khanh <kwalker.nnk@gmail.com>
