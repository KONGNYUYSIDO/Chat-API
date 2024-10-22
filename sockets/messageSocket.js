import jwt from "jsonwebtoken";
import User from "../models/userModel.js";
import Message from "../models/messageMod.js";

//object to store list of connected users and their socket id's
const connectedUsers = { };

export async function sendmessage( sender, receiver, message ) {
    const msg = new Message({
        sender,
        receiver,
        message,
    });
    await msg.save();

    //checking if the receiver is connected
    const receiverSocketId = connectedUsers[receiver];
    if (receiverSocketId) {
        //if the receiver is connected, send the message
        socket.to(receiverSocketId).emit('receiveMessage', {
            sender,
            message,
        });
        console.log('Message successfully sent to:', receiver);       
    } else {
        console.log('$ {receiver} is not connected');
    }
}

export async function disconnect( userId ) {
    console.log('user', userId, 'disconnected');
    delete connectedUsers[userId];
    console.log(connectedUsers);
}

export async function socketConnection ( socket ) {
    try {
        
        const userId = socket.id;
        console.log('User', userId, 'authenticated');

        // Add the user to the connectedUsers object
        connectedUsers[userId] = socket.id;
        console.log('Connected users:', connectedUsers);

        // Handle message sending
        socket.on('sendMessage', async ({ sender, receiver, message }) => {
            console.log(`${sender} is messaging ${receiver}: ${message}`);
            
            const receiverSocketId = await sendmessage(sender, receiver, message);
            
            if (receiverSocketId) {
                socket.to(receiverSocketId).emit('receiveMessage', {
                    sender,
                    message,
                });
                console.log('Message sent to:', receiver);
            }
        });

        // Handle disconnection
        socket.on('disconnect', async () => {
            await disconnect(userId, socket);
        });

    } catch (error) {
        console.log('Error handling socket connection:', error.message);
    }
}

export async function initSocket(io) {
    io.on('connection', async (socket) => {
        await socketConnection(socket);
    });
}
