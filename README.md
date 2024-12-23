
# WebSocket Chat Application with React

This is a WebSocket-based chat application built using React (for the client) and Node.js (for the server).

## Features

- Real-time messaging with WebSocket
- Basic chat interface built with React
- Bidirectional communication between client and server

## Project Structure

```
/websocket-chat-react
|-- /client           # React client application
|-- /server           # Node.js server application
|-- .gitignore        # Git ignore file
```

## Prerequisites

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

## Installation

### Client

1. Navigate to the client directory:

   ```bash
   cd client
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the client application:

   ```bash
   npm start
   ```

### Server

1. Navigate to the server directory:

   ```bash
   cd server
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the server:

   ```bash
   npm start
   ```

The client will connect to the server via WebSocket at the specified address (typically `localhost:3000` for development).

## Usage

- Open the app in multiple tabs to simulate different users.
- Enter a username and begin chatting.
- Messages will be exchanged in real-time between all connected users.

## Contributing

Feel free to fork the repo, create a branch, and submit a pull request for any improvements!

## License

This project is licensed under the MIT License.
