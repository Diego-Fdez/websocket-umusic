# Websocket for Umusic Project

## Description:

<p>This is a WebSocket server built with Node.js, Express, and Socket.IO. It allows bidirectional communication between the server and clients in real time through WebSocket connections. The server is configured with CORS to allow cross-origin requests from a whitelist of domains. The project includes a WebSocket interface to exchange data in real time. The server can be used to build real-time chat applications, multiplayer games, and any other application that requires real-time communication between clients and the server.</p>

## Installation instructions:

<ul style="display:flex;flex-direction:column">
<li><strong>Previous requirements:</strong> Make sure you have Node.js installed on your local machine. You can download Node.js from its official website.</li>
<li><strong>Cloning the repository:</strong> Clone el repositorio de GitHub en su máquina local utilizando el siguiente comando en su terminal: git clone <a href='https://github.com/Diego-Fdez/websocket-umusic.git'>https://github.com/Diego-Fdez/websocket-umusic.git</a></li>
<li><strong>Installation of dependencies:</strong> pnpm install</li>
<li><strong>Configuration of the .env file:</strong> Create an .env file in the root directory of the project and set the necessary environment variables, such as the port the WebSocket server will run on and the domain whitelist for CORS.</li>
<li><strong>Ejecución del servidor:</strong> Ejecute el servidor WebSocket utilizando el siguiente comando en la terminal: pnpm start</li>
<li><strong>Server tests:</strong> Test the WebSocket server by opening a web browser and visiting the WebSocket server URL. If everything works correctly, you should see a message that the WebSocket server is running correctly.</li>
</ul>

## Instructions for use:

<ul style="display:flex;flex-direction:column">
<li><strong>Establish connection:</strong> To establish a WebSocket connection to the server, you must use a WebSocket client. You can use a WebSocket client library, such as socket.io-client for JavaScript, to establish a connection from your client application.</li>
<li><strong>Join a room:</strong> To join a specific chat room, send a "joinRoom" event to the WebSocket server with the room ID as a parameter. The WebSocket server will add the client to the specified room and notify the other clients in the same room.</li>
<li><strong>Send a message:</strong> To send a message to all clients in the same room, send a custom event with the message and any other necessary information to the WebSocket server. The WebSocket server will broadcast the message to all clients in the same room.</li>
<li><strong>Close connection:</strong> To close the WebSocket connection, just close the connection from the client side. You can also send a custom event "leaveRoom" to the WebSocket server to notify it that the client is leaving the current room.</li>
</ul>

## Dependencies:

<ul style="display:flex;flex-direction:column">
  <li>Express</li>
  <li>Socket.io</li>
  <li>cors</li>
  <li>nodemon (devDependencies)</li>
</ul>

## Contact:

<p>Mail: <a href="mailto:info.diegodev@gmail.com">info.diegodev@gmail.com</a></p>
<p>WhatsApp: (506) 8321-5708</p>
<p>Web: <a href="diegofedez-dev.vercel.app">diegofedez-dev.vercel.app</a></p>
