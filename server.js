import app from "./index.js";
import { Server } from "socket.io";
import { createServer } from "http";
import { PORT } from "./config/index.js";
import User from "./models/userModel.js";
import Message from "./models/messageMod.js";
// import { initSocket  } from "./sockets/messageSocket.js";


const server = createServer( app );
const socketio = new Server( server, {
    cors: {
        origin: '*',
        methods: ['GET', 'POST'],
    },
} );


socketio.on('connection', (socket) => {
    // const userId = socket.id;
    // console.log('User', socket.id,'connected');

    socket.on('onLogin', async (userId) => {
      try {
        await User.findByIdAndUpdate( userId, { sockId: socket.id }, { new: true });

        console.log("Logged in successfully");

        const unsentMessage = await Message.find({ receiver: userId, sent: false });

        unsentMessage.forEach((messages) => {
          socket.emit('newMessage', messages);

          messages.sent = true;
          messages.save();
        });
      } catch (error) {
        console.log( error );
      }
    });
  
    socket.on('message', async (data) => {
      const { senderId, receiverId, text } = data;

      try {
        const recipient =  await User.findById(receiverId);

        const message = new Message({
          sender: senderId,
          receiver: receiverId,
          text,
          sent: recipient && recipient.sockId ? true : false,
        });
    
        await message.save();
    
        if (recipient && recipient.sockId) {
          socketio.to(recipient.sockId).emit('newMessage', message.text);
        } else{
          console.log("user is offline");
        }
          // socketio.emit('newMessage', message);
      } catch ( error ){
        console.log(error);
      }
    });
  
    socket.on('disconnect', async() => {
      console.log('User disconnected');
      try {
        await User.findOneAndUpdate({ sockId: socket.id }, { sockId: null });
      } catch (error) {
        console.log( error );
      }
    });
  });


server.listen( PORT, () => {
    console.log('Server is running .........');
})