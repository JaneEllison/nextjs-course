import { MongoClient } from 'mongodb';

async function handler(req, res) {
    if(req.method === 'POST') {
        const { email, name, message } = req.body;

        if (!email || !email.includes('@') || !name || name.trim() === '' || !message || message.trim() === '') {
            res.status(422).json({
                message: 'Invalid input',
            })
            return;
        }

        const newMessage = {
            email,
            name,
            message,
        };

        let client;
        const password = '';
        const userName = '';

        try {
            client = await MongoClient.connect(
                `mongodb+srv://${userName}:${password}@next-js-project.anbxcud.mongodb.net/?retryWrites=true&w=majority`
            );
        } catch (error) {
            res.status(500).json({message: 'Cant connect'});

            return;
        }

        const db = client.db();

        try {
            const result = await db.collection('messages').insertOne(newMessage);
            newMessage.id = result.insertedId;
        } catch (error) {
            client.close();
            res.status(500).json({message: 'Cant save the message'});
            return;
        }

        client.close();

        res.status(201).json({
            message: 'Success!'
        })
    }
}

export default handler;
