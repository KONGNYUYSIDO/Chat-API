import Message from "../models/messageMod.js";


export async function getMessages ( req, res ) {
    const { senderId, receiverId } = req.params;
    try {
        const message = await Message.find({
            $or: [
                { sender: senderId, receiver: receiverId },
                { sender: receiverId, receiver: senderId }
              ]
        }).populate('sender receiver', 'username');
        res.json(message);
    } catch (error) {
        res.status( 500 ).json({ message: error.message });
    }
}


export async function createMsg ( req, res ) {
    const { senderId, receiverId, content } = req.body;
    
    try {
        const newMessage = new Message ({
            sender: senderId,
            receiver: receiverId,
            text
        });
        const create = await newMessage.save();
        res.status( 201 ).json({ status: "Success", message: "Message saved successfully", data: create }); 
    } catch (error) {
        res.status( 500 ).json({ message: error.message });
    }
}