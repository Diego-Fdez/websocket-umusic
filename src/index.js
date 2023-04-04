import express from 'express';
import { Server as WebSocketServer } from 'socket.io';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(express.json());

//cors configuration
const whitelist = [process.env.FRONTEND_URL];

/* A function that checks if the origin is in the whitelist. */
const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
};

/* A middleware that enables cors. */
app.use(cors(corsOptions));

const Port = 4000;

//listen to port
const server = app.listen(Port, () => {
  console.log(`Server is running on port ${Port}`);
});

//socket io setup
const io = new WebSocketServer(server, {
  pingTimeout: 60000,
  cors: {
    origin: process.env.FRONTEND_URL,
  },
});

//listen to connection
io.on('connection', (socket) => {
  //join to room
  socket.on('joinRoom', (roomId) => {
    socket.join(roomId);
  });

  //send message
  socket.on('addVideo', (video) => {
    socket.broadcast.to(video._id).emit('newVideo', video);
  });
});
